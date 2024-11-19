import { apiInstance } from "@/config/axios.config";

export const getArtistByIdAPI = async (
  artistId: string,
  signal: AbortSignal
) => {
  return await apiInstance.get(`artists/${artistId}`, {
    signal,
  });
};

export type TArtistOrUser = "artist" | "user";
export const checkFollowArtistOrUserAPI = async (
  artistId: string,
  type: TArtistOrUser = "artist"
) => {
  return await apiInstance.get(
    `me/following/contains?type=${type}&ids=${artistId}`
  );
};

export const followUnfollowArtistOrUserAPI = async (
  isFollowed: boolean = false,
  artistId: string,
  type: TArtistOrUser = "artist",
  signal: AbortSignal
) => {
  let result;
  if (!isFollowed) {
    result = await apiInstance.put(
      `me/following?type=${type}&ids=${artistId}`,
      {
        signal,
      }
    );
    console.log(isFollowed, " followUnfollowArtistOrUserAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return true;
    }
  } else {
    result = await apiInstance.delete(
      `me/following?type=${type}&ids=${artistId}`,
      {
        signal,
      }
    );
    console.log(isFollowed, " followUnfollowArtistOrUserAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return false;
    }
  }

  return isFollowed;
};

export const getAlbumsOfArtistAPI = async (
  artistId: string,
  offset: number,
  limit: number,
  signal: AbortSignal
) => {
  return await apiInstance.get(
    `artists/${artistId}/albums?limit=${limit}&offset=${offset}`,
    {
      signal,
    }
  );
};

export const getTopTracksOfArtistAPI = async (
  artistId: string,
  signal: AbortSignal
) => {
  return await apiInstance.get(`artists/${artistId}/top-tracks`, {
    signal,
  });
};

export const getRelatedArtistsAPI = async (
  artistId: string,
  signal: AbortSignal
) => {
  return await apiInstance.get(`artists/${artistId}/related-artists`, {
    signal,
  });
};
