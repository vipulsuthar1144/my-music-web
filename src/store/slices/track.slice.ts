import { ICategorySlice } from "@/schemas/category.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../thunkServices/category.thunksevices";
import { ITrackSlice } from "@/schemas/track.schema";
import { getRecentPlayedTracks } from "../thunkServices/track.thunksevices";

const intialState: ITrackSlice = {
  isRecentPlayedTrackListError: false,
  isRecentPlayedTrackListLoading: false,
  recentPlayedTrackList: [],
};

export const trackSlice = createSlice({
  name: "track",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentPlayedTracks.pending, (state) => {
        state.isRecentPlayedTrackListLoading = true;
      })
      .addCase(getRecentPlayedTracks.fulfilled, (state, action) => {
        state.isRecentPlayedTrackListLoading = false;
        state.recentPlayedTrackList = [...(action.payload?.items ?? [])];
      })
      .addCase(getRecentPlayedTracks.rejected, (state) => {
        state.isRecentPlayedTrackListLoading = false;
        state.isRecentPlayedTrackListError = true;
      });
  },
});

export default trackSlice.reducer;
