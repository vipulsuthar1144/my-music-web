import { IArtistSchema, IImage } from "./artist.schema";
import { IExternalUrls } from "./recent.schema";
import { IPagination } from "./search.schema";
import { ITrackSchema } from "./track.schema";

export interface IPlaylistSchema {
  collaborative?: boolean;
  description?: string;
  external_urls?: IExternalUrls;
  followers?: {
    href?: string;
    total?: number;
  };
  href?: string;
  id?: string;
  images?: IImage[];
  name?: string;
  owner?: IArtistSchema;
  public?: boolean;
  snapshot_id?: string;
  tracks?:
    | {
        href?: string;
        total?: number;
      }
    | IPagination<IPlaylistTrackSchema>;
  type?: string;
  uri?: string;
}

export interface IPlaylistTrackSchema {
  added_at?: string;
  is_local?: boolean;
  track?: ITrackSchema;
}

export interface IPlaylistSlice {
  bgColor: string;
  isPlaylistDataLoading: boolean;
  playlistData: IPlaylistSchema | null;
  isPlaylistDataError: boolean;

  isPlaylistTrackListLoading: boolean;
  playlistTrackList: IPlaylistTrackSchema[];
  isPlaylistTrackListError: boolean;
  hasMorePlaylistTrackList: boolean;
  playlistTrackListOffset: number;
}
