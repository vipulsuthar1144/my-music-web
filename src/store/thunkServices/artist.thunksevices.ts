import { getAlbumsOfArtistAPI, getArtistByIdAPI, getRelatedArtistsAPI, getTopTracksOfArtistAPI } from "@/services/artist.services";
import getAsyncThunk from "../getAsyncThunk";
import { IArtistSchema, IArtistTopTrackOrReletedArtistSchema } from "@/schemas/artist.schema";
import { IPagination } from "@/schemas/search.schema";
import { IAlbumSchema } from "@/schemas/album.schema";

export const getArtistById = getAsyncThunk<IArtistSchema, { artistId: string }>("GET/getArtistById", async ({ artistId }, signal) => {
  const result = await getArtistByIdAPI(artistId, signal);
  if (result.data) return result.data;
  return result;
});

export const getAlbumsOfArtist = getAsyncThunk<IPagination<IAlbumSchema>, { artistId: string; offset: number; limit: number }>("GET/getAlbumsOfArtist", async ({ artistId, offset, limit }, signal) => {
  const result = await getAlbumsOfArtistAPI(artistId, offset, limit, signal);
  if (result.data) return result.data;
  return result;
});

export const getTopTracksOfArtist = getAsyncThunk<IArtistTopTrackOrReletedArtistSchema, { artistId: string }>("GET/getTopTracksOfArtist", async ({ artistId }, signal) => {
  const result = await getTopTracksOfArtistAPI(artistId, signal);
  if (result.data) return result.data;
  return result;
});

export const getRelatedArtists = getAsyncThunk<IArtistTopTrackOrReletedArtistSchema, { artistId: string }>("GET/getRelatedArtists", async ({ artistId }, signal) => {
  const result = await getRelatedArtistsAPI(artistId, signal);
  if (result.data) return result.data;
  return result;
});
