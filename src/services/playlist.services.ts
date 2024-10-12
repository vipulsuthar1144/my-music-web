import { apiInstance } from "@/config/axios.config";

export const getPlaylistByIdAPI = async (playlistId: string, signal: AbortSignal) => {
  return await apiInstance.get(`playlists/${playlistId}`, {
    signal,
  });
};

export const getPlaylistTracksAPI = async (playlistId: string, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`playlists/${playlistId}/tracks?limit=10&offset=${offset}`, {
    signal,
  });
};

export const getPlaylistsByCategoryIdAPI = async (categoryId: string, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`browse/categories/${categoryId}/playlists?limit=20&offset=${offset}`, {
    signal,
  });
};
