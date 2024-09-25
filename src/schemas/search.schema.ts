import { IAlbumSchema } from "./album.schema";
import { IAritstSchema } from "./artist.schema";
import { IPlaylistSchema } from "./playlist.schema";
import { ITrackSchema } from "./track.schema";

export interface ISearchSchema {
  tracks?: BaseSearch<ITrackSchema>;
  artists?: BaseSearch<IAritstSchema>;
  albums?: BaseSearch<IAlbumSchema>;
  playlists?: BaseSearch<IPlaylistSchema>;
}

interface BaseSearch<T> {
  href?: string;
  limit?: number;
  next?: string;
  offset?: number;
  previous?: string;
  total?: number;
  items?: T[];
}
