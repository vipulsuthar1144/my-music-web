import { IAlbumSchema } from "./album.schema";
import { IArtistSchema } from "./artist.schema";
import { IExternalUrls } from "./recent.schema";

export interface ITrackSchema {
  album?: IAlbumSchema;
  artists?: IArtistSchema[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: IExternalIds;
  external_urls?: IExternalUrls;
  is_playable?: boolean;
  linked_from?: {};
  restrictions?: IRestrictions;
  href?: string;
  id?: string;
  is_local?: boolean;
  name?: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
}

export interface IExternalIds {
  isrc?: string;
}
export interface IRestrictions {
  reason?: string;
}
