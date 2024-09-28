import { ISearchSchema } from "@/schemas/search.schema";
import { getSearchResultAPI } from "@/services/search.services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getAsyncThunk from "../getAsyncThunk";

export const getSearchResult = getAsyncThunk<ISearchSchema, string>("GET/searchResult", async (searchQuery, signal) => {
  const result = await getSearchResultAPI(searchQuery, signal);
  if (result.data) return result.data;
  return result;
});
