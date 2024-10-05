import { IAlbumSchema } from "./album.schema";
import { IAritstSchema } from "./artist.schema";
import { IPlaylistSchema } from "./playlist.schema";
import { ITrackSchema } from "./track.schema";

export interface ISearchSchema {
  tracks?: IBaseSearch<ITrackSchema>;
  artists?: IBaseSearch<IAritstSchema>;
  albums?: IBaseSearch<IAlbumSchema>;
  playlists?: IBaseSearch<IPlaylistSchema>;
}

export interface IBaseSearch<T> {
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
}
