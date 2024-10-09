import { apiInstance } from "@/config/axios.config";

export const getArtistByIdAPI = async (artistId: string, signal: AbortSignal) => {
  return await apiInstance.get(`artists/${artistId}`, {
    signal,
  });
};

export const getAlbumsOfArtistAPI = async (artistId: string, offset: number, limit: number, signal: AbortSignal) => {
  return await apiInstance.get(`artists/${artistId}/albums?limit=${limit}&offset=${offset}`, {
    signal,
  });
};


export const getTopTracksOfArtistAPI = async (artistId: string, signal: AbortSignal) => {
  return await apiInstance.get(`artists/${artistId}/top-tracks`, {
    signal,
  });
};

export const getRelatedArtistsAPI = async (artistId: string, signal: AbortSignal) => {
  return await apiInstance.get(`artists/${artistId}/related-artists`, {
    signal,
  });
};
