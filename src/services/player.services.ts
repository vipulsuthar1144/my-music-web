import { apiInstance } from "@/config/axios.config";
import { IRequestPlayTrackSchema } from "@/schemas/player.schema";

export const getAvailableDevicesAPI = async (signal: AbortSignal) => {
  return await apiInstance.get(`me/player/devices`, {
    signal,
  });
};

export const getCurrentPlayingTrackAPI = async (signal: AbortSignal) => {
  return await apiInstance.get(`me/player`, {
    signal,
  });
};

export const playTrackAPI = async (
  deviceId: string,
  reqPlayTrackSchema: IRequestPlayTrackSchema,
  signal: AbortSignal
) => {
  console.log(deviceId);

  return await apiInstance.put(
    `me/player/play?device_id=${deviceId}`,
    {
      uris: reqPlayTrackSchema.uris,
      context_uri: reqPlayTrackSchema.context_uri,
      offset: reqPlayTrackSchema.offset,
      position_ms: reqPlayTrackSchema.position_ms,
    },
    {
      signal,
    }
  );
};
export const pauseTrackAPI = async (deviceId: string, signal: AbortSignal) => {
  return await apiInstance.put(`me/player/pause?device_id=${deviceId}`, {
    signal,
  });
};
export const playNextTrackAPI = async (
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.post(`me/player/next?device_id=${deviceId}`, {
    signal,
  });
};
export const playPreTrackAPI = async (
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.post(`me/player/previous?device_id=${deviceId}`, {
    signal,
  });
};

export type TRepeatModeOptions = "track" | "context" | "off";
export const setPlaybackRepeatModeAPI = async (
  mode: TRepeatModeOptions = "off",
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.put(
    `me/player/repeat?device_id=${deviceId}&state=${mode}`,
    {
      signal,
    }
  );
};
export const setPlaybackVolumeAPI = async (
  volume: number,
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.put(
    `me/player/volume?volume_percent=${volume}&device_id=${deviceId}`,
    {
      signal,
    }
  );
};
export const seekToPositionTrackAPI = async (
  positionMs: number,
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.put(
    `me/player/seek?position_ms=${positionMs}&device_id=${deviceId}`,
    {
      signal,
    }
  );
};
export const setPlaybackShuffleModeAPI = async (
  shuffle: boolean = false,
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.put(
    `me/player/shuffle?state=${shuffle}&device_id=${deviceId}`,
    {
      signal,
    }
  );
};

export const getQueueTracksAPI = async (signal: AbortSignal) => {
  return await apiInstance.get(`me/player/queue`, {
    signal,
  });
};

export const addTrackToQueueAPI = async (
  trackURI: string,
  deviceId: string,
  signal: AbortSignal
) => {
  return await apiInstance.put(
    `me/player/queue?uri=${trackURI}&device_id=${deviceId}`,
    {
      signal,
    }
  );
};
