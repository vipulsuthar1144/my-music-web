import { IArtistSchema } from "@/schemas/artist.schema";
import getAsyncThunk from "../getAsyncThunk";
import {
  getMyProfileAPI,
  getMyProfileFollowedArtistsAPI,
  getMyProfileTopItemsAPI,
  getUserPlaylistsAPI,
  getUserProfileByIdAPI,
} from "@/services/user.services";
import { IPagination } from "@/schemas/search.schema";
import { IPlaylistSchema } from "@/schemas/playlist.schema";
import { ITrackSchema } from "@/schemas/track.schema";
import { AxiosResponse } from "axios";
import {
  checkFollowArtistOrUserAPI,
  followUnfollowArtistOrUserAPI,
} from "@/services/artist.services";

export const getUserProfileById = getAsyncThunk<
  IArtistSchema,
  { userId: string }
>("GET/getUserProfileById", async ({ userId }, signal) => {
  const result = await getUserProfileByIdAPI(userId, signal);
  if (result.data) {
    const isFollowed: AxiosResponse<boolean[]> =
      await checkFollowArtistOrUserAPI(userId, "user");
    isFollowed.data
      ? (result.data.isFollowed = isFollowed.data[0])
      : (result.data.isFollowed = false);
    return result.data;
  }
  if (result.data) return result.data;
  return result;
});

export const followUnfollowUser = getAsyncThunk<
  boolean,
  { forFollow: boolean; userId: string }
>("PUT/DELETE/followUnfollowUser", async ({ forFollow, userId }, signal) => {
  const result = await followUnfollowArtistOrUserAPI(
    forFollow,
    userId,
    "user",
    signal
  );
  return result;
});

export const getUserPlaylist = getAsyncThunk<
  IPagination<IPlaylistSchema>,
  { userId: string; offset: number }
>("GET/getUserPlaylist", async ({ userId, offset }, signal) => {
  const result = await getUserPlaylistsAPI(userId, offset, signal);
  if (result.data) return result.data;
  return result;
});

export const getMyProfile = getAsyncThunk<IArtistSchema, void>(
  "GET/getMyProfile",
  async (_, signal) => {
    const result = await getMyProfileAPI(signal);
    if (result.data) return result.data;
    return result;
  }
);

export const getMyProfileTopArtists = getAsyncThunk<
  IPagination<IArtistSchema>,
  { limit: number; offset: number }
>("GET/getMyProfileTopArtists", async ({ limit, offset }, signal) => {
  const result = await getMyProfileTopItemsAPI(
    "artists",
    limit,
    offset,
    signal
  );
  if (result.data) return result.data;
  return result;
});

export const getMyProfileTopTracks = getAsyncThunk<
  IPagination<ITrackSchema>,
  { limit: number; offset: number }
>("GET/getMyProfileTopTracks", async ({ limit, offset }, signal) => {
  const result = await getMyProfileTopItemsAPI("tracks", limit, offset, signal);
  if (result.data) return result.data;
  return result;
});

export const getMyProfileFollowedArtists = getAsyncThunk<
  { artists?: IPagination<IArtistSchema> },
  { limit: number }
>("GET/getMyProfileFollowedArtists", async ({ limit }, signal) => {
  const result = await getMyProfileFollowedArtistsAPI(limit, signal);
  if (result.data) return result.data;
  return result;
});
