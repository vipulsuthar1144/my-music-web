import { IExternalUrls } from "./recent.schema";

interface IAritstSchema {
  external_urls?: IExternalUrls;
  followers?: {
    href?: string;
    total?: number;
  };
  genres?: string[];
  href?: string;
  id?: string;
  images?: IImage;
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

interface IArtistSlice {
  isLoading: boolean;
  artists: IAritstSchema[];
  isError: boolean;
}

export type { IArtistSlice, IAritstSchema };
