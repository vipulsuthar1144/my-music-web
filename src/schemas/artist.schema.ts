import { IAlbumSchema } from "./album.schema";
import { IExternalUrls } from "./recent.schema";
import { ITrackSchema } from "./track.schema";

export interface IArtistSchema {
  external_urls?: IExternalUrls;
  followers?: {
    href?: string;
    total?: number;
  };
  genres?: string[];
  href?: string;
  id?: string;
  images?: IImage[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
  display_name?: string;
  email?: string;
}

export interface IImage {
  height?: number;
  url?: string;
  width?: number;
}

export interface IArtistTopTrackOrReletedArtistSchema {
  tracks?: ITrackSchema[];
  artists?: IArtistSchema[];
}

export interface IArtistSlice {
  isArtistDataLoading: boolean;
  artistData: IArtistSchema | null;
  isArtistDataError: boolean;

  bgColor: string;

  isArtistAlbumsListLoading: boolean;
  artistAlbumsList: IAlbumSchema[];
  isArtistAlbumsListError: boolean;
  hasMoreArtistAlbumsList: boolean;
  artistAlbumsListOffset: number;

  isArtistTopTracksListLoading: boolean;
  artistTopTrackList: ITrackSchema[];
  isArtistTopTracksListError: boolean;

  isRelatedArtistListLoading: boolean;
  relatedArtistList: IArtistSchema[];
  isRelatedArtistListError: boolean;
}
