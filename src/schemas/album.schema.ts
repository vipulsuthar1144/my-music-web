import { IAritstSchema, IImage } from "./artist.schema";
import { IExternalUrls } from "./recent.schema";
import { IRestrictions } from "./track.schema";

export interface IAlbumSchema {
  album_type?: string;
  artists?: IAritstSchema[];
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
}
