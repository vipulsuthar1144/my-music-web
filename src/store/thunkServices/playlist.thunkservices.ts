import { getPopularPlaylistsAPI } from "./../../services/playlist.services";
import { IPlaylistSchema, IPlaylistTrackSchema } from "@/schemas/playlist.schema";
import { IPagination, ISearchSchema } from "@/schemas/search.schema";
import { getPlaylistByIdAPI, getPlaylistsByCategoryIdAPI, getPlaylistTracksAPI } from "@/services/playlist.services";
import getAsyncThunk from "../getAsyncThunk";
import { getSearchResultAPI } from "@/services/search.services";

export const getPlaylistById = getAsyncThunk<IPlaylistSchema, { playlistId: string }>("GET/getPlaylistById", async ({ playlistId }, signal) => {
  const result = await getPlaylistByIdAPI(playlistId, signal);
  if (result.data) return result.data;
  return result;
});

export const getPlaylistTracks = getAsyncThunk<IPagination<IPlaylistTrackSchema>, { playlistId: string; offset: number }>("GET/getPlaylistTracks", async ({ playlistId, offset }, signal) => {
  const result = await getPlaylistTracksAPI(playlistId, offset, 10, signal);
  if (result.data) return result.data;
  return result;
});

export const getPlaylistsByCategoryId = getAsyncThunk<{ message: string; playlists: IPagination<IPlaylistSchema> }, { categoryId: string; offset: number }>(
  "GET/getPlaylistsByCategoryId",
  async ({ categoryId, offset }, signal) => {
    const result = await getPlaylistsByCategoryIdAPI(categoryId, offset, signal);
    if (result.data) return result.data;
    return result;
  }
);
export const getPopularPlaylists = getAsyncThunk<{ message?: string; playlists?: IPagination<IPlaylistSchema> }, { limit: number; offset: number }>(
  "GET/getPopularPlaylists",
  async ({ limit, offset }, signal) => {
    const result = await getPopularPlaylistsAPI(limit, offset, signal);
    if (result.data) return result.data;
    return result;
  }
);

export const getTop2DailyMixPlaylist = getAsyncThunk<ISearchSchema, void>("GET/getTop2DailyMixPlaylist", async (_, signal) => {
  const type = ["playlist"];
  const result = await getSearchResultAPI("daily mix", type, 10, signal);
  if (result.data) return result.data;
  return result;
});
