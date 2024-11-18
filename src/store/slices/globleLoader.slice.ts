import { createSlice } from "@reduxjs/toolkit";

type TGlobleLoader = {
  isTopLoading: boolean;
  topLoadingProgress: number;
  openMoreOptionBottomSheet: boolean;
  openDialogImagePreview: boolean;
  openDialogPremiumRequired: boolean;
};

const intialState: TGlobleLoader = {
  isTopLoading: false,
  topLoadingProgress: 0,
  openMoreOptionBottomSheet: false,
  openDialogImagePreview: false,
  openDialogPremiumRequired: false,
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
    toggleDialogImagePreview: (state, action) => {
      state.openDialogImagePreview = action.payload;
    },
    toggleDialogPremiumRequired: (state, action) => {
      state.openDialogPremiumRequired = action.payload;
    },
  },
});

export const {
  setTopLoadingProgress,
  toggleMoreOptionBottomSheet,
  toggleDialogImagePreview,
  toggleDialogPremiumRequired,
} = globleLoaderSlice.actions;

export default globleLoaderSlice.reducer;
