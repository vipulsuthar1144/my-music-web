import { IAritstSchema, IImage } from "./artist.schema";
import { IExternalUrls } from "./recent.schema";

export interface IPlaylistSchema {
  collaborative?: boolean;
  description?: string;
  external_urls?: IExternalUrls;
  href?: string;
  id?: string;
  images?: IImage[];
  name?: string;
  owner?: IAritstSchema;
  public?: boolean;
  snapshot_id?: string;
  tracks?: {
    href?: string;
    total?: number;
  };
  type?: string;
  uri?: string;
}
