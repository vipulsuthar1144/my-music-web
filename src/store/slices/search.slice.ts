import { ISearchSlice } from "@/schemas/search.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getSearchResult, getSeeAllDataBySearchQuery } from "../thunkServices/search.thunksevices";

const intialState: ISearchSlice = {
  isSearchDataLoading: false,
  isSearchDataError: false,
  searchData: null,
  searchQuery: "",
  isSeeAllDataListLoading: false,
  isSeeAllDataListError: false,
  seeAllDataList: [],
  hasMoreSeeAllDataList: true,
  seeAllDataListOffset: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: intialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    emptySearchData: (state) => {
      state.searchData = null;
    },
    resetSeeAllDataList: (state) => {
      state.seeAllDataList = [];
      state.hasMoreSeeAllDataList = true;
      state.seeAllDataListOffset = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResult.pending, (state) => {
        state.isSearchDataLoading = true;
      })
      .addCase(getSearchResult.fulfilled, (state, action) => {
        state.isSearchDataLoading = false;
        state.searchData = action.payload;
      })
      .addCase(getSearchResult.rejected, (state) => {
        state.isSearchDataLoading = false;
        state.isSearchDataError = true;
      })
      .addCase(getSeeAllDataBySearchQuery.pending, (state) => {
        state.isSeeAllDataListLoading = true;
        state.isSeeAllDataListError = false;
      })
      .addCase(getSeeAllDataBySearchQuery.fulfilled, (state, action) => {
        state.isSeeAllDataListLoading = false;
        state.isSeeAllDataListError = false;

        if (action.payload.tracks) {
          state.seeAllDataListOffset += action.payload.tracks?.limit ?? 0;
          state.seeAllDataList = [...state.seeAllDataList, ...(action.payload.tracks.items ?? [])];
          state.hasMoreSeeAllDataList = (action.payload.tracks?.total ?? 0) >= state.seeAllDataListOffset;
        } else if (action.payload.artists) {
          state.seeAllDataListOffset += action.payload.artists?.limit ?? 0;
          state.seeAllDataList = [...state.seeAllDataList, ...(action.payload.artists.items ?? [])];
          state.hasMoreSeeAllDataList = (action.payload.artists?.total ?? 0) >= state.seeAllDataListOffset;
        } else if (action.payload.albums) {
          state.seeAllDataListOffset += action.payload.albums?.limit ?? 0;
          state.seeAllDataList = [...state.seeAllDataList, ...(action.payload.albums.items ?? [])];
          state.hasMoreSeeAllDataList = (action.payload.albums?.total ?? 0) >= state.seeAllDataListOffset;
        } else if (action.payload.playlists) {
          state.seeAllDataListOffset += action.payload.playlists?.limit ?? 0;
          state.seeAllDataList = [...state.seeAllDataList, ...(action.payload.playlists.items ?? [])];
          state.hasMoreSeeAllDataList = (action.payload.playlists?.total ?? 0) >= state.seeAllDataListOffset;
        } else {
          state.hasMoreSeeAllDataList = false;
        }

        if (state.seeAllDataListOffset > 100) {
          state.hasMoreSeeAllDataList = false;
        }
      })
      .addCase(getSeeAllDataBySearchQuery.rejected, (state) => {
        state.isSeeAllDataListLoading = false;
        state.isSeeAllDataListError = true;
      });
  },
});

export const { setSearchQuery, emptySearchData, resetSeeAllDataList } = searchSlice.actions;
export default searchSlice.reducer;
