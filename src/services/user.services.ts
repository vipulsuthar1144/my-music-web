import { apiInstance } from "@/config/axios.config";

export const getUserProfileByIdAPI = async (userId: string, signal: AbortSignal) => {
  return await apiInstance.get(`users/${userId}`, {
    signal: signal,
  });
};

export const getUserPlaylistsAPI = async (userId: string, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`users/${userId}/playlists?limit=20&offset=${offset}`, {
    signal: signal,
  });
};

export const getMyProfileAPI = async (signal: AbortSignal) => {
  return await apiInstance.get(`/me`, {
    signal: signal,
  });
};

export type TTopItemsType = "artists" | "tracks";
export const getMyProfileTopItemsAPI = async (type: TTopItemsType, limit: number, offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`/me/top/${type}?time_range=short_term&limit=${limit}&offset=${offset}`, {
    signal: signal,
  });
};
export const getMyProfileFollowedArtistsAPI = async (limit: number, signal: AbortSignal) => {
  return await apiInstance.get(`/me/following?type=artist&limit=${limit}`, {
    signal: signal,
  });
};
