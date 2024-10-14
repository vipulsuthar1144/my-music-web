import { apiInstance } from "@/config/axios.config";

export const getPlaylistByIdAPI = async (playlistId: string, signal: AbortSignal) => {
  return await apiInstance.get(`playlists/${playlistId}`, {
    signal,
  });
};
export const getPlaylistTracksAPI = async (playlistId: string, offset: number, limit: number, signal: AbortSignal) => {
  return await apiInstance.get(`playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`, {
    signal,
  });
};
export const getPlaylistsByCategoryIdAPI = async (categoryId: string, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`browse/categories/${categoryId}/playlists?limit=20&offset=${offset}`, {
    signal,
  });
};
export const getPopularPlaylistsAPI = async (limit: number, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`browse/featured-playlists?limit=${limit}&offset=${offset}`, {
    signal,
  });
};
