import {
  checkIsSavedAlbumAPI,
  getAlbumByIdAPI,
  getAlbumsTracksAPI,
  getNewReleaseAlbumsAPI,
  getSavedAlbumsAPI,
  saveUnsaveAlbumAPI,
} from "@/services/album.services";
import getAsyncThunk from "../getAsyncThunk";
import { IAlbumSchema } from "@/schemas/album.schema";
import { IPagination } from "@/schemas/search.schema";
import { ITrackSchema } from "@/schemas/track.schema";
import { AxiosResponse } from "axios";

export const getAlbumById = getAsyncThunk<IAlbumSchema, { albumId: string }>(
  "GET/getAlbumById",
  async ({ albumId }, signal) => {
    const result = await getAlbumByIdAPI(albumId, signal);
    if (result.data) {
      const isSaved: AxiosResponse<boolean[]> = await checkIsSavedAlbumAPI(
        albumId
      );
      isSaved.data
        ? (result.data.isSaved = isSaved.data[0])
        : (result.data.isSaved = false);
      return result.data;
    }
    if (result.data) return result.data;
    return result;
  }
);

export const getSavedAlbums = getAsyncThunk<
  IPagination<{ album: IAlbumSchema }>,
  { offset: number; limit: number }
>("GET/getSavedAlbums", async ({ offset, limit }, signal) => {
  const result = await getSavedAlbumsAPI(offset, limit, signal);
  if (result.data) return result.data;
  return result;
});

export const saveUnsaveAlbum = getAsyncThunk<
  boolean,
  { forSave: boolean; albumId: string }
>("PUT/DELETE/followUnfollowArtist", async ({ forSave, albumId }, signal) => {
  const result = await saveUnsaveAlbumAPI(forSave, albumId, signal);
  return result;
});

export const getAlbumTracks = getAsyncThunk<
  IPagination<ITrackSchema>,
  { albumId: string; offset: number }
>("GET/getAlbumTracks", async ({ albumId, offset }, signal) => {
  const result = await getAlbumsTracksAPI(albumId, offset, signal);
  if (result.data) return result.data;
  return result;
});
export const getNewReleaseAlbums = getAsyncThunk<
  { albums?: IPagination<IAlbumSchema> },
  { limit: number; offset: number }
>("GET/getNewReleaseAlbums", async ({ limit, offset }, signal) => {
  const result = await getNewReleaseAlbumsAPI(limit, offset, signal);
  if (result.data) return result.data;
  return result;
});
