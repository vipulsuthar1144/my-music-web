import { apiInstance } from "@/config/axios.config";

export const getSearchResultAPI = async <T = string>(q: T, signal: AbortSignal) => {
  const type = ["artist", "album", "playlist", "track"];
  return await apiInstance.get(`search?q=${q}&type=${type.join(",")}`, {
    signal,
  });
};
