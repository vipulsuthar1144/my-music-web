import { apiInstance } from "@/config/axios.config";
import { IRequestPlayTrackSchema } from "@/schemas/player.schema";
import { LocalStorageKeys } from "@utils/constants";
import { showCustomToast } from "@utils/customToast";

export type TRepeatModeOptions = "track" | "context" | "off";
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

export const playbackQueueAPI = {
  get: async (signal: AbortSignal) => {
    return await apiInstance.get(`me/player/queue`, {
      signal,
    });
  },
  addTrack: async (trackURI: string, signal: AbortSignal) => {
    return await apiInstance.put(`me/player/queue?uri=${trackURI}`, {
      signal,
    });
  },
};

export const playbackAPI = {
  play: async (
    reqPlayTrackSchema: IRequestPlayTrackSchema,
    signal: AbortSignal
  ) => {
    const deviceId = localStorage.getItem(LocalStorageKeys.DEVICE_ID);
    if (!deviceId) {
      showCustomToast("Device is not available", "error");
      throw new Error("Device is not available");
    }
    await apiInstance.put(
      `me/player/play?device_id=${JSON.parse(deviceId)}`,
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
  },
  pause: async (signal: AbortSignal) => {
    await apiInstance.put(`me/player/pause`, {
      signal,
    });
  },
  skipNext: async (signal: AbortSignal) => {
    await apiInstance.post(`me/player/next`, {
      signal,
    });
  },
  skipPrevious: async (signal: AbortSignal) => {
    await apiInstance.post(`me/player/previous`, {
      signal,
    });
  },
  setRepeatMode: async (
    mode: TRepeatModeOptions = "off",
    signal: AbortSignal
  ) => {
    await apiInstance.put(`me/player/repeat?state=${mode}`, {
      signal,
    });
  },
  setShuffleMode: async (shuffle: boolean = false, signal: AbortSignal) => {
    await apiInstance.put(`me/player/shuffle?state=${shuffle}`, {
      signal,
    });
  },
  seekToPosition: async (positionMs: number, signal: AbortSignal) => {
    return await apiInstance.put(`me/player/seek?position_ms=${positionMs}`, {
      signal,
    });
  },
  setVolume: async (volume: number, signal: AbortSignal) => {
    return await apiInstance.put(`me/player/volume?volume_percent=${volume}`, {
      signal,
    });
  },
};
