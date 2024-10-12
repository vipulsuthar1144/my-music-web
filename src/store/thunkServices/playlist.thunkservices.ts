import { getAlbumByIdAPI, getAlbumsTracksAPI } from "@/services/album.services";
import getAsyncThunk from "../getAsyncThunk";
import { IAlbumSchema } from "@/schemas/album.schema";
import { IPagination } from "@/schemas/search.schema";
import { ITrackSchema } from "@/schemas/track.schema";
import { getPlaylistByIdAPI, getPlaylistTracksAPI } from "@/services/playlist.services";
import { IPlaylistSchema, IPlaylistTrackSchema } from "@/schemas/playlist.schema";

export const getPlaylistById = getAsyncThunk<IPlaylistSchema, { playlistId: string }>("GET/getPlaylistById", async ({ playlistId }, signal) => {
  const result = await getPlaylistByIdAPI(playlistId, signal);
  if (result.data) return result.data;
  return result;
});

export const getPlaylistTracks = getAsyncThunk<IPagination<IPlaylistTrackSchema>, { playlistId: string; offset: number }>("GET/getPlaylistTracks", async ({ playlistId, offset }, signal) => {
  const result = await getPlaylistTracksAPI(playlistId, offset, signal);
  if (result.data) return result.data;
  return result;
});
