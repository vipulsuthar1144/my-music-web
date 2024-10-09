import { ISearchSchema, ISearchSlice } from "@/schemas/search.schema";
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
    emptySearchData: (state) => {
      state.searchData = null;
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
          updateSeeAllData(state, "tracks", action.payload);
        } else if (action.payload.artists) {
          updateSeeAllData(state, "artists", action.payload);
        } else if (action.payload.albums) {
          updateSeeAllData(state, "albums", action.payload);
        } else if (action.payload.playlists) {
          updateSeeAllData(state, "playlists", action.payload);
        } else {
          state.hasMoreSeeAllDataList = false;
        }
      })
      .addCase(getSeeAllDataBySearchQuery.rejected, (state) => {
        state.isSeeAllDataListLoading = false;
        state.isSeeAllDataListError = true;
      });
  },
});

export const { emptySearchData } = searchSlice.actions;
export default searchSlice.reducer;

const updateSeeAllData = (state: ISearchSlice, payloadKey: keyof ISearchSchema, payload: ISearchSchema) => {
  const data = payload[payloadKey];

  if (data) {
    const offset = data.offset ?? 0;
    const limit = data.limit ?? 0;
    const total = data.total ?? 0;
    const items = data.items ?? [];

    state.seeAllDataListOffset = offset + limit;
    state.hasMoreSeeAllDataList = total >= offset + limit;

    state.seeAllDataList = offset === 0 ? [...items] : [...state.seeAllDataList, ...items];

    if (offset >= 80) state.hasMoreSeeAllDataList = false;
  }
};
