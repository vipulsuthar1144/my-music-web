import { getRecentPlayedTracksAPI } from "@/services/track.services";
import getAsyncThunk from "../getAsyncThunk";
import { IPagination, ISearchSchema } from "@/schemas/search.schema";
import { IRecentPlayedTrackSchema } from "@/schemas/track.schema";
import { getSearchResultAPI } from "@/services/search.services";
import { getPlaylistTracksAPI } from "@/services/playlist.services";
import { AxiosResponse } from "axios";
import { IPlaylistTrackSchema } from "@/schemas/playlist.schema";

export const getRecentPlayedTracks = getAsyncThunk<IPagination<IRecentPlayedTrackSchema>, { limit?: number }>("GET/getRecentPlayedTracks", async ({ limit = 10 }, signal) => {
  const result = await getRecentPlayedTracksAPI(limit, signal);
  if (result.data) return result.data;
  return result;
});

export const getTop5TrendingHindiTracks = getAsyncThunk<IPagination<IPlaylistTrackSchema>, void>("GET/getTop5TrendingHindiTracks", async (_, signal) => {
  const type = ["playlist"];
  const top1Playlist: AxiosResponse<ISearchSchema> = await getSearchResultAPI("Top 50 hindi", type, 1, signal);
  const result = top1Playlist.data.playlists?.items && (await getPlaylistTracksAPI(top1Playlist.data.playlists?.items[0]?.id ?? "", 0, 5, signal));
  if (result) return result.data;
  return result;
});

export const getTop5TrendingPunjabiTracks = getAsyncThunk<IPagination<IPlaylistTrackSchema>, void>("GET/getTop5TrendingPunjabiTracks", async (_, signal) => {
  const type = ["playlist"];
  const top1Playlist: AxiosResponse<ISearchSchema> = await getSearchResultAPI("Top 50 punjabi", type, 1, signal);
  const result = top1Playlist.data.playlists?.items && (await getPlaylistTracksAPI(top1Playlist.data.playlists?.items[0]?.id ?? "", 0, 5, signal));
  if (result) return result.data;
  return result;
});

export const getTop5TrendingEnglishTracks = getAsyncThunk<IPagination<IPlaylistTrackSchema>, void>("GET/getTop5TrendingEnglishTracks", async (_, signal) => {
  const type = ["playlist"];
  const top1Playlist: AxiosResponse<ISearchSchema> = await getSearchResultAPI("Top 50 English", type, 1, signal);
  const result = top1Playlist.data.playlists?.items && (await getPlaylistTracksAPI(top1Playlist.data.playlists?.items[0]?.id ?? "", 0, 5, signal));
  if (result) return result.data;
  return result;
});
