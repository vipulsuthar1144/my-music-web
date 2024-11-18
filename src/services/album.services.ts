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
  forSave: boolean = true,
  albumId: string,
  signal: AbortSignal
) => {
  let result;
  if (forSave) {
    result = await apiInstance.put(`me/albums?ids=${albumId}`, {
      signal,
    });
    console.log(forSave, " saveUnsaveAlbumAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return true;
    }
  } else {
    result = await apiInstance.delete(`me/albums?ids=${albumId}`, {
      signal,
    });
    console.log(forSave, " saveUnsaveAlbumAPI : ", result);

    if (result.status == 204 || result.status == 200) {
      return false;
    }
  }

  return forSave;
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
