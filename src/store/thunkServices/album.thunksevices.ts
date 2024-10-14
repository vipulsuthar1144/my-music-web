import { getAlbumByIdAPI, getAlbumsTracksAPI, getNewReleaseAlbumsAPI } from "@/services/album.services";
import getAsyncThunk from "../getAsyncThunk";
import { IAlbumSchema } from "@/schemas/album.schema";
import { IPagination } from "@/schemas/search.schema";
import { ITrackSchema } from "@/schemas/track.schema";

export const getAlbumById = getAsyncThunk<IAlbumSchema, { albumId: string }>("GET/getAlbumById", async ({ albumId }, signal) => {
  const result = await getAlbumByIdAPI(albumId, signal);
  if (result.data) return result.data;
  return result;
});

export const getAlbumTracks = getAsyncThunk<IPagination<ITrackSchema>, { albumId: string; offset: number }>("GET/getAlbumTracks", async ({ albumId, offset }, signal) => {
  const result = await getAlbumsTracksAPI(albumId, offset, signal);
  if (result.data) return result.data;
  return result;
});
export const getNewReleaseAlbums = getAsyncThunk<{ albums?: IPagination<IAlbumSchema> }, { limit: number; offset: number }>("GET/getNewReleaseAlbums", async ({ limit, offset }, signal) => {
  const result = await getNewReleaseAlbumsAPI(limit, offset, signal);
  if (result.data) return result.data;
  return result;
});
