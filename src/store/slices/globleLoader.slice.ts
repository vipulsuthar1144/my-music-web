import { createSlice } from "@reduxjs/toolkit";

type TGlobleLoader = {
  isTopLoading: boolean;
  topLoadingProgress: number;
};

const intialState: TGlobleLoader = {
  isTopLoading: false,
  topLoadingProgress: 0,
};

export const globleLoaderSlice = createSlice({
  name: "globleLoader",
  initialState: intialState,
  reducers: {
    setTopLoadingProgress: (state, action) => {
      state.topLoadingProgress = action.payload;
    },
  },
});

export const { setTopLoadingProgress } = globleLoaderSlice.actions;

export default globleLoaderSlice.reducer;
