import { IAlbumSchema } from "@/schemas/album.schema";
import {
  IArtistSchema,
  IArtistTopTrackOrReletedArtistSchema,
} from "@/schemas/artist.schema";
import { IPagination } from "@/schemas/search.schema";
import {
  checkFollowArtistOrUserAPI,
  followUnfollowArtistOrUserAPI,
  getAlbumsOfArtistAPI,
  getArtistByIdAPI,
  getRelatedArtistsAPI,
  getTopTracksOfArtistAPI,
} from "@/services/artist.services";
import { AxiosResponse } from "axios";
import getAsyncThunk from "../getAsyncThunk";

export const getArtistById = getAsyncThunk<IArtistSchema, { artistId: string }>(
  "GET/getArtistById",
  async ({ artistId }, signal) => {
    const result = await getArtistByIdAPI(artistId, signal);
    if (result.data) {
      const isFollowed: AxiosResponse<boolean[]> =
        await checkFollowArtistOrUserAPI(artistId);
      isFollowed.data
        ? (result.data.isFollowed = isFollowed.data[0])
        : (result.data.isFollowed = false);
      return result.data;
    }
    return result;
  }
);

export const followUnfollowArtist = getAsyncThunk<
  boolean,
  { forFollow: boolean; artistId: string }
>(
  "PUT/DELETE/followUnfollowArtist",
  async ({ forFollow, artistId }, signal) => {
    const result = await followUnfollowArtistOrUserAPI(
      forFollow,
      artistId,
      "artist",
      signal
    );
    return result;
  }
);

export const getAlbumsOfArtist = getAsyncThunk<
  IPagination<IAlbumSchema>,
  { artistId: string; offset: number; limit: number }
>("GET/getAlbumsOfArtist", async ({ artistId, offset, limit }, signal) => {
  const result = await getAlbumsOfArtistAPI(artistId, offset, limit, signal);
  if (result.data) return result.data;
  return result;
});

export const getTopTracksOfArtist = getAsyncThunk<
  IArtistTopTrackOrReletedArtistSchema,
  { artistId: string }
>("GET/getTopTracksOfArtist", async ({ artistId }, signal) => {
  const result = await getTopTracksOfArtistAPI(artistId, signal);
  if (result.data) return result.data;
  return result;
});

export const getRelatedArtists = getAsyncThunk<
  IArtistTopTrackOrReletedArtistSchema,
  { artistId: string }
>("GET/getRelatedArtists", async ({ artistId }, signal) => {
  const result = await getRelatedArtistsAPI(artistId, signal);
  if (result.data) return result.data;
  return result;
});
