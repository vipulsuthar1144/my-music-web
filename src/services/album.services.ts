import { apiInstance } from "@/config/axios.config";

export const getAlbumByIdAPI = async (albumId: string, signal: AbortSignal) => {
  return await apiInstance.get(`albums/${albumId}`, {
    signal,
  });
};

export const getSavedAlbumsAPI = async (
  offset: number,
  limit: number,
  signal: AbortSignal
) => {
  return await apiInstance.get(`me/albums?limit=${limit}&offset=${offset}`, {
    signal,
  });
};

export const checkIsSavedAlbumAPI = async (albumId: string) => {
  return await apiInstance.get(`me/albums/contains?ids=${albumId}`);
};

export const saveUnsaveAlbumAPI = async (
  isSaved: boolean = false,
  albumId: string,
  signal: AbortSignal
) => {
  let result;
  if (!isSaved) {
    result = await apiInstance.put(`me/albums?ids=${albumId}`, {
      signal,
    });
    console.log(isSaved, " saveUnsaveAlbumAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return true;
    }
  } else {
    result = await apiInstance.delete(`me/albums?ids=${albumId}`, {
      signal,
    });
    console.log(isSaved, " saveUnsaveAlbumAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return false;
    }
  }

  return isSaved;
};

export const getAlbumsTracksAPI = async (
  albumId: string,
  offset: number,
  signal: AbortSignal
) => {
  return await apiInstance.get(
    `albums/${albumId}/tracks?limit=10&offset=${offset}`,
    {
      signal,
    }
  );
};
export const getNewReleaseAlbumsAPI = async (
  limit: number,
  offset: number,
  signal: AbortSignal
) => {
  return await apiInstance.get(
    `browse/new-releases?limit=${limit}&offset=${offset}&market=IN`,
    {
      signal,
    }
  );
};
