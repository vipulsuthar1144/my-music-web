import { IExternalUrls } from "./recent.schema";

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
}

export interface IImage {
  height?: number;
  url?: string;
  width?: number;
}

export interface IArtistSlice {
  isLoading: boolean;
  artists: IArtistSchema[];
  isError: boolean;
}
