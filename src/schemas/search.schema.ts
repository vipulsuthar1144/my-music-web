import { IAlbumSchema } from "./album.schema";
import { IArtistSchema } from "./artist.schema";
import { IPlaylistSchema } from "./playlist.schema";
import { ITrackSchema } from "./track.schema";

export interface ISearchSchema {
  tracks?: IPagination<ITrackSchema>;
  artists?: IPagination<IArtistSchema>;
  albums?: IPagination<IAlbumSchema>;
  playlists?: IPagination<IPlaylistSchema>;
}

export interface IPagination<T> {
  href?: string;
  limit?: number;
  next?: string;
  offset?: number;
  previous?: string;
  total?: number;
  items?: T[];
}

export interface ISearchSlice {
  isSearchDataLoading: boolean;
  searchData: ISearchSchema | null;
  isSearchDataError: boolean;
  searchQuery: string;
  isSeeAllDataListLoading: boolean;
  seeAllDataList: IArtistSchema[] | ITrackSchema[] | IAlbumSchema[] | IPlaylistSchema[];
  isSeeAllDataListError: boolean;
  hasMoreSeeAllDataList: boolean;
  seeAllDataListOffset: number;
}

export type TSeeAllSearchTypeAttribute = "track" | "artist" | "playlist" | "album";
