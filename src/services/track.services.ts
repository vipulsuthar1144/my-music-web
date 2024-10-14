import { apiInstance } from "@/config/axios.config";

export const getRecentPlayedTracksAPI = async (limit: number, signal: AbortSignal) => {
  return await apiInstance.get(`me/player/recently-played?limit=${limit}`, {
    signal: signal,
  });
};
