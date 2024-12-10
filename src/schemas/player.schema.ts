import { ITrackSchema } from "./track.schema";

export interface IAvailableDeviceSchema {
  id?: string;
  is_active?: boolean;
  is_private_session?: boolean;
  is_restricted?: boolean;
  name?: string;
  type?: string;
  volume_percent?: number;
  supports_volume?: boolean;
}

export interface ICurrentPlayingTrackSchema {
  device?: IAvailableDeviceSchema;
  repeat_state?: "off" | "track" | "context";
  shuffle_state?: boolean;
  context?: IContextSchema;
  timestamp?: number;
  progress_ms?: number;
  is_playing?: boolean;
  item?: ITrackSchema;
  currently_playing_type?: string;
  actions?: {
    disallows?: IActionsSchema;
  };
}

export interface IContextSchema {
  type?: string;
  href?: string;
  external_urls?: {
    spotify?: string;
  };
  uri?: string;
}

export interface IActionsSchema {
  interrupting_playback?: boolean;
  pausing?: boolean;
  resuming?: boolean;
  seeking?: boolean;
  skipping_next?: boolean;
  skipping_prev?: boolean;
  toggling_repeat_context?: boolean;
  toggling_shuffle?: boolean;
  toggling_repeat_track?: boolean;
  transferring_playback?: boolean;
}

export interface IRequestPlayTrackSchema {
  context_uri?: string;
  uris?: string[];
  offset?: {
    position: number;
  };
  position_ms?: number;
}
