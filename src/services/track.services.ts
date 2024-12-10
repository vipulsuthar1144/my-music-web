import { apiInstance } from "@/config/axios.config";

export const getRecentPlayedTracksAPI = async (
  limit: number,
  signal: AbortSignal
) => {
  return await apiInstance.get(`me/player/recently-played?limit=${limit}`, {
    signal: signal,
  });
};

export const getSavedTracksAPI = async (
  offset: number,
  limit: number,
  signal: AbortSignal
) => {
  return await apiInstance.get(`me/tracks?limit=${limit}&offset=${offset}`, {
    signal,
  });
};

export const checkIsSavedTrackAPI = async (trackId: string) => {
  return await apiInstance.get(`me/tracks/contains?ids=${trackId}`);
};

export const likeUnlikeTracksAPI = async (
  isLiked: boolean = false,
  trackId: string,
  signal: AbortSignal
) => {
  let result;
  if (!isLiked) {
    result = await apiInstance.put(`me/tracks?ids=${trackId}`, {
      signal,
    });
    console.log(isLiked, " PUT likeUnlikeTracksAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return true;
    }
  } else {
    result = await apiInstance.delete(`me/tracks?ids=${trackId}`, {
      signal,
    });
    console.log(isLiked, " DELETE likeUnlikeTracksAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return false;
    }
  }

  return isLiked;
};
