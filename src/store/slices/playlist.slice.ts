import { IAlbumSlice } from "@/schemas/album.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getAlbumById, getAlbumTracks } from "../thunkServices/album.thunksevices";
import { getRandomColor } from "@utils/genaralFunctions";
import { getAlbumsTracksAPI } from "@/services/album.services";
import { IPlaylistSlice } from "@/schemas/playlist.schema";
import { getPlaylistById, getPlaylistsByCategoryId, getPlaylistTracks, getPopularPlaylists } from "../thunkServices/playlist.thunkservices";

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

  isCategoryPlaylistsLoading: false,
  categoryTitle: "Playlists",
  categoryPlaylists: [],
  isCategoryPlaylistsError: false,
  hasMoreCategoryPlaylists: true,
  categoryPlaylistsOffset: 0,

  isPopularPlaylistsError: false,
  isPopularPlaylistsLoading: false,
  popularPlaylists: [],
  hasMorePopularPlaylists: true,
  popularPlaylistsOffset: 0,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: intialState,
  reducers: {
    resetPlaylistState: (state) => {
      state.bgColor = "#9759a8";
      state.isPlaylistDataLoading = false;
      state.isPlaylistDataError = false;
      state.playlistData = null;
      state.isPlaylistTrackListError = false;
      state.isPlaylistTrackListLoading = false;
      state.playlistTrackList = [];
      state.hasMorePlaylistTrackList = true;
      state.playlistTrackListOffset = 0;
      state.categoryTitle = "Playlists";
      state.isCategoryPlaylistsLoading = false;
      state.isCategoryPlaylistsError = false;
      state.categoryPlaylists = [];
      state.hasMoreCategoryPlaylists = true;
      state.categoryPlaylistsOffset = 0;
      state.isPopularPlaylistsError = false;
      state.isPopularPlaylistsLoading = false;
      state.popularPlaylists = [];
      state.hasMorePopularPlaylists = true;
      state.popularPlaylistsOffset = 0;
    },
  },
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

        if (offset == 0) {
          state.playlistTrackList = [...(action.payload?.items?.filter((item) => item.track?.name != "") ?? [])];
        } else {
          state.playlistTrackList = [...state.playlistTrackList, ...(action.payload?.items?.filter((item) => item.track?.name != "") ?? [])];
        }
      })
      .addCase(getPlaylistTracks.rejected, (state) => {
        state.isPlaylistTrackListLoading = false;
        state.isPlaylistTrackListError = true;
      })
      .addCase(getPlaylistsByCategoryId.pending, (state) => {
        state.isCategoryPlaylistsLoading = true;
      })
      .addCase(getPlaylistsByCategoryId.fulfilled, (state, action) => {
        let offset = action.payload?.playlists?.offset ?? 0;
        let limit = action.payload?.playlists?.limit ?? 0;
        let total = action.payload?.playlists?.total ?? 0;

        state.isCategoryPlaylistsLoading = false;
        state.categoryTitle = action.payload.message;

        state.categoryPlaylistsOffset = offset + limit;
        state.hasMoreCategoryPlaylists = total > offset + limit;

        if (offset == 0) {
          state.categoryPlaylists = [...(action.payload?.playlists?.items ?? [])];
        } else {
          state.categoryPlaylists = [...state.categoryPlaylists, ...(action.payload?.playlists?.items ?? [])];
        }

        if (offset >= 80) {
          state.hasMoreCategoryPlaylists = false;
        }
      })
      .addCase(getPlaylistsByCategoryId.rejected, (state) => {
        state.isCategoryPlaylistsLoading = false;
        state.isCategoryPlaylistsError = true;
      })
      .addCase(getPopularPlaylists.pending, (state) => {
        state.isPopularPlaylistsLoading = true;
      })
      .addCase(getPopularPlaylists.fulfilled, (state, action) => {
        let offset = action.payload?.playlists?.offset ?? 0;
        let limit = action.payload?.playlists?.limit ?? 0;
        let total = action.payload?.playlists?.total ?? 0;

        state.isPopularPlaylistsLoading = false;

        state.popularPlaylistsOffset = offset + limit;
        state.hasMorePopularPlaylists = total > offset + limit;

        if (offset == 0) {
          state.popularPlaylists = [...(action.payload?.playlists?.items ?? [])];
        } else {
          state.popularPlaylists = [...state.popularPlaylists, ...(action.payload?.playlists?.items ?? [])];
        }

        if (offset >= 80) {
          state.hasMorePopularPlaylists = false;
        }
      })
      .addCase(getPopularPlaylists.rejected, (state) => {
        state.isPopularPlaylistsLoading = false;
        state.isPopularPlaylistsError = true;
      });
  },
});

export const { resetPlaylistState } = playlistSlice.actions;

export default playlistSlice.reducer;
