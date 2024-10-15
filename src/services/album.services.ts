import { apiInstance } from "@/config/axios.config";

export const getAlbumByIdAPI = async (albumId: string, signal: AbortSignal) => {
  return await apiInstance.get(`albums/${albumId}`, {
    signal,
  });
};

export const getAlbumsTracksAPI = async (albumId: string, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`albums/${albumId}/tracks?limit=10&offset=${offset}`, {
    signal,
  });
};
export const getNewReleaseAlbumsAPI = async (limit: number, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`browse/new-releases?limit=${limit}&offset=${offset}&market=IN`, {
    signal,
  });
};
