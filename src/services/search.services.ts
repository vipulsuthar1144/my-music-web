import { apiInstance } from "@/config/axios.config";
import { TSeeAllSearchTypeAttribute } from "@/schemas/search.schema";

export const getSearchResultAPI = async (q: string, type: string[], limit: number = 10, signal: AbortSignal) => {
  // const type = ["artist", "album", "playlist", "track"];
  return await apiInstance.get(`search?q=${q}&type=${type.join(",")}&limit=${limit}&offset=0`, {
    signal,
  });
};

export const getSeeAllDataBySearchQueryAPI = async (q: string, type: string, offset: number, signal: AbortSignal) => {
  // const type = ["artist"];
  return await apiInstance.get(`search?q=${q}&type=${type}&limit=20&offset=${offset}`, {
    signal,
  });
};
