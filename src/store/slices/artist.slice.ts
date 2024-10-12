import { IArtistSlice } from "@/schemas/artist.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getRandomColor } from "@utils/genaralFunctions";
import { getAlbumsOfArtist, getArtistById, getRelatedArtists, getTopTracksOfArtist } from "../thunkServices/artist.thunksevices";

const intialState: IArtistSlice = {
  isArtistDataLoading: false,
  artistData: null,
  isArtistDataError: false,
  bgColor: "#9759a8",
  isArtistAlbumsListLoading: false,
  artistAlbumsList: [],
  isArtistAlbumsListError: false,
  hasMoreArtistAlbumsList: true,
  artistAlbumsListOffset: 0,

  isArtistTopTracksListLoading: false,
  artistTopTrackList: [],
  isArtistTopTracksListError: false,

  isRelatedArtistListLoading: false,
  relatedArtistList: [],
  isRelatedArtistListError: false,
};

export const artistSlice = createSlice({
  name: "artist",
  initialState: intialState,
  reducers: {
    resetArtistState: (state) => {
      state.isArtistDataLoading = false;
      state.artistData = null;
      state.isArtistDataError = false;
      state.bgColor = "#9759a8";
      state.isArtistAlbumsListLoading = false;
      state.artistAlbumsList = [];
      state.isArtistAlbumsListError = false;
      state.hasMoreArtistAlbumsList = true;
      state.artistAlbumsListOffset = 0;
      state.isArtistTopTracksListLoading = false;
      state.artistTopTrackList = [];
      state.isArtistTopTracksListError = false;
      state.isRelatedArtistListLoading = false;
      state.relatedArtistList = [];
      state.isRelatedArtistListError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtistById.pending, (state) => {
        state.isArtistDataLoading = true;
      })
      .addCase(getArtistById.fulfilled, (state, action) => {
        state.isArtistDataLoading = false;
        state.bgColor = getRandomColor();
        state.artistData = action.payload;
      })
      .addCase(getArtistById.rejected, (state) => {
        state.isArtistDataLoading = false;
        state.isArtistDataError = true;
      })
      .addCase(getAlbumsOfArtist.pending, (state) => {
        state.isArtistAlbumsListLoading = true;
      })
      .addCase(getAlbumsOfArtist.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isArtistAlbumsListLoading = false;
        state.artistAlbumsListOffset = offset + limit;
        state.hasMoreArtistAlbumsList = total > offset + limit;

        if (offset == 0) {
          state.artistAlbumsList = [...(action.payload?.items ?? [])];
        } else {
          state.artistAlbumsList = [...state.artistAlbumsList, ...(action.payload?.items ?? [])];
        }
        if (offset >= 80) state.hasMoreArtistAlbumsList = false;
      })
      .addCase(getAlbumsOfArtist.rejected, (state) => {
        state.isArtistAlbumsListLoading = false;
        state.isArtistAlbumsListError = true;
      })
      .addCase(getTopTracksOfArtist.pending, (state) => {
        state.isArtistTopTracksListLoading = true;
      })
      .addCase(getTopTracksOfArtist.fulfilled, (state, action) => {
        state.isArtistTopTracksListLoading = false;
        state.artistTopTrackList = action.payload.tracks ?? [];
      })
      .addCase(getTopTracksOfArtist.rejected, (state) => {
        state.isArtistTopTracksListLoading = false;
        state.isArtistTopTracksListError = true;
      })
      .addCase(getRelatedArtists.pending, (state) => {
        state.isRelatedArtistListLoading = true;
      })
      .addCase(getRelatedArtists.fulfilled, (state, action) => {
        state.isRelatedArtistListLoading = false;
        state.relatedArtistList = action.payload.artists ?? [];
      })
      .addCase(getRelatedArtists.rejected, (state) => {
        state.isRelatedArtistListLoading = false;
        state.isRelatedArtistListError = true;
      });
  },
});

export const { resetArtistState } = artistSlice.actions;

export default artistSlice.reducer;
