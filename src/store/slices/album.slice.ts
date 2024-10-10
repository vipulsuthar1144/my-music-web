import { IAlbumSlice } from "@/schemas/album.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getAlbumById, getAlbumTracks } from "../thunkServices/album.thunksevices";
import { getRandomColor } from "@utils/genaralFunctions";
import { getAlbumsTracksAPI } from "@/services/album.services";

const intialState: IAlbumSlice = {
  bgColor: "#9759a8",
  isAlbumDataLoading: false,
  isAlbumDataError: false,
  albumData: null,
  isTrackListError: false,
  isTrackListLoading: false,
  trackList: [],
  hasMoreTrackList: true,
  trackListOffset: 0,
};

export const albumSlice = createSlice({
  name: "album",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlbumById.pending, (state) => {
        state.isAlbumDataLoading = true;
      })
      .addCase(getAlbumById.fulfilled, (state, action) => {
        state.isAlbumDataLoading = false;
        state.bgColor = getRandomColor();
        state.albumData = action.payload;
      })
      .addCase(getAlbumById.rejected, (state) => {
        state.isAlbumDataLoading = false;
        state.isAlbumDataError = true;
      })
      .addCase(getAlbumTracks.pending, (state) => {
        state.isTrackListLoading = true;
      })
      .addCase(getAlbumTracks.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isTrackListLoading = false;
        state.trackListOffset = offset + limit;
        state.hasMoreTrackList = total > offset + limit;

        if (action.payload?.offset == 0) {
          state.trackList = [...(action.payload?.items ?? [])];
        } else {
          state.trackList = [...state.trackList, ...(action.payload?.items ?? [])];
        }
        if (offset >= 80) {
          state.hasMoreTrackList = false;
        }
      })
      .addCase(getAlbumTracks.rejected, (state) => {
        state.isTrackListLoading = false;
        state.isTrackListError = true;
      });
  },
});

export default albumSlice.reducer;
