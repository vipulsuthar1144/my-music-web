import { ISearchSchema } from "@/schemas/search.schema";
import { getSearchResultAPI, getSeeAllDataBySearchQueryAPI } from "@/services/search.services";
import getAsyncThunk from "../getAsyncThunk";

export const getSearchResult = getAsyncThunk<ISearchSchema, string>("GET/searchResult", async (searchQuery, signal) => {
  const result = await getSearchResultAPI(searchQuery, signal);
  if (result.data) return result.data;
  return result;
});

export const getSeeAllDataBySearchQuery = getAsyncThunk<ISearchSchema, { searchQuery: string; type: string; offset: number }>(
  "GET/getSeeAllDataBySearchQuery",
  async ({ searchQuery, type, offset }, signal) => {
    const result = await getSeeAllDataBySearchQueryAPI(searchQuery, type, offset, signal);
    if (result.data) return result.data;
    return result;
  }
);
