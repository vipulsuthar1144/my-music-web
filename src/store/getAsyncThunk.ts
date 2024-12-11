import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const abortController: Record<string, AbortController | null> = {};

const getAsyncThunk = <Returned, ThunkArg = void>(actionType: string, thunk: (arg: ThunkArg, signal: AbortSignal) => Promise<Returned>) => {
  return createAsyncThunk<Returned, ThunkArg>(actionType, async (args: ThunkArg, { rejectWithValue }) => {
    try {
      if (abortController[actionType]) {
        abortController[actionType]?.abort();
      }
      const controller = new AbortController();
      abortController[actionType] = controller;

      const response = await thunk(args, controller.signal);
      abortController[actionType] = null;
      return response;
    } catch (err: any) {
      if (axios.isCancel(err)) {
        console.log("Request canceled:", err.message);
        return rejectWithValue("Request was canceled");
      }
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  });
};

export default getAsyncThunk;
