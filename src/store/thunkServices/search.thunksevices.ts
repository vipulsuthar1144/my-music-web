import { ISearchSchema } from "@/schemas/search.schema";
import { getSearchResultAPI } from "@/services/search.services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchResult = createAsyncThunk<ISearchSchema, string>("GET/searchResult", async (searchQuery: string) => {
  const result = await getSearchResultAPI(searchQuery);
  if (result.data) return result.data as ISearchSchema;
  throw new Error("Failed to fetch result");
});
