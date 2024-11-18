import { IArtistSchema, IImage } from "./artist.schema";
import { IExternalUrls } from "./recent.schema";
import { IPagination } from "./search.schema";
import { IRestrictions, ITrackSchema } from "./track.schema";

export interface IAlbumSchema {
  album_type?: string;
  isSaved?: boolean;
  artists?: IArtistSchema[];
  available_markets?: string[];
  external_urls?: IExternalUrls;
  href?: string;
  id?: string;
  images?: IImage[];
  name?: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  type?: string;
  uri?: string;
  restrictions?: IRestrictions;
  tracks?: IPagination<ITrackSchema>;
}

export interface IAlbumSlice {
  bgColor: string;
  isAlbumDataLoading: boolean;
  albumData: IAlbumSchema | null;
  isAlbumDataError: boolean;

  isTrackListLoading: boolean;
  trackList: ITrackSchema[];
  isTrackListError: boolean;
  hasMoreTrackList: boolean;
  trackListOffset: number;

  isNewReleaseAlbumListLoading: boolean;
  newReleaseAlbumList: IAlbumSchema[];
  isNewReleaseAlbumListError: boolean;
  hasMoreNewReleaseAlbumList: boolean;
  newReleaseAlbumListOffset: number;

  isSaveUnsaveAlbumLoading: boolean;

  isSavedAlbumListLoading: boolean;
  savedAlbumList: { album: IAlbumSchema }[];
  isSavedAlbumListError: boolean;
  hasMoreSavedAlbumList: boolean;
  savedAlbumListOffset: number;
}
