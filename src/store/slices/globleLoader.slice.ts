import { createSlice } from "@reduxjs/toolkit";

type TGlobleLoader = {
  isTopLoading: boolean;
  topLoadingProgress: number;
  openMoreOptionBottomSheet: boolean;
};

const intialState: TGlobleLoader = {
  isTopLoading: false,
  topLoadingProgress: 0,
  openMoreOptionBottomSheet: false,
};

export const globleLoaderSlice = createSlice({
  name: "globleLoader",
  initialState: intialState,
  reducers: {
    setTopLoadingProgress: (state, action) => {
      state.topLoadingProgress = action.payload;
    },
    toggleMoreOptionBottomSheet: (state, action) => {
      state.openMoreOptionBottomSheet = action.payload;
    },
  },
});

export const { setTopLoadingProgress, toggleMoreOptionBottomSheet } = globleLoaderSlice.actions;

export default globleLoaderSlice.reducer;
