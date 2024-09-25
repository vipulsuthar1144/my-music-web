import { ITrackSchema } from "./track.schema";

export interface IRecentSchema {
  items?: IItem[];
  next?: string;
  cursors?: ICursors;
  limit?: number;
  href?: string;
}

export interface IItem {
  track?: ITrackSchema;
  played_at?: string;
  context?: IContext;
}
export interface IContext {
  type?: string;
  href?: string;
  external_urls?: IExternalUrls;
  uri?: string;
}
export interface IExternalUrls {
  spotify?: string;
}
export interface ICursors {
  after?: string;
  before?: string;
}
