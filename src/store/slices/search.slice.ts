import { ISearchSlice } from "@/schemas/search.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getSearchResult } from "../thunkServices/search.thunksevices";

const intialState: ISearchSlice = {
  isSearchDataLoading: false,
  isSearchDataError: false,
  searchData: null,
  searchQuery: "",
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
      });
  },
});

export const { setSearchQuery, emptySearchData } = searchSlice.actions;
export default searchSlice.reducer;
