import { IAlbumSlice } from "@/schemas/album.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getAlbumById, getAlbumTracks } from "../thunkServices/album.thunksevices";
import { getRandomColor } from "@utils/genaralFunctions";
import { getAlbumsTracksAPI } from "@/services/album.services";
import { IPlaylistSlice } from "@/schemas/playlist.schema";
import { getPlaylistById, getPlaylistTracks } from "../thunkServices/playlist.thunkservices";

const intialState: IPlaylistSlice = {
  bgColor: "#9759a8",
  isPlaylistDataLoading: false,
  isPlaylistDataError: false,
  playlistData: null,
  isPlaylistTrackListError: false,
  isPlaylistTrackListLoading: false,
  playlistTrackList: [],
  hasMorePlaylistTrackList: true,
  playlistTrackListOffset: 0,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylistById.pending, (state) => {
        state.isPlaylistDataLoading = true;
      })
      .addCase(getPlaylistById.fulfilled, (state, action) => {
        state.isPlaylistDataLoading = false;
        state.bgColor = getRandomColor();
        state.playlistData = action.payload;
      })
      .addCase(getPlaylistById.rejected, (state) => {
        state.isPlaylistDataLoading = false;
        state.isPlaylistDataError = true;
      })
      .addCase(getPlaylistTracks.pending, (state) => {
        state.isPlaylistTrackListLoading = true;
      })
      .addCase(getPlaylistTracks.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isPlaylistTrackListLoading = false;
        state.playlistTrackListOffset = offset + limit;
        state.hasMorePlaylistTrackList = total > offset + limit;

        if (action.payload?.offset == 0) {
          state.playlistTrackList = [...(action.payload?.items?.filter((item) => item.track?.name != "") ?? [])];
        } else {
          state.playlistTrackList = [...state.playlistTrackList, ...(action.payload?.items?.filter((item) => item.track?.name != "") ?? [])];
        }
        // if (offset >= 90) {
        //   state.hasMorePlaylistTrackList = false;
        // }
      })
      .addCase(getPlaylistTracks.rejected, (state) => {
        state.isPlaylistTrackListLoading = false;
        state.isPlaylistTrackListError = true;
      });
  },
});

export default playlistSlice.reducer;
