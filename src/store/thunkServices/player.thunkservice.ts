import {
  getAvailableDevicesAPI,
  getCurrentPlayingTrackAPI,
  pauseTrackAPI,
  playNextTrackAPI,
  playPreTrackAPI,
  playTrackAPI,
} from "@/services/player.services";
import getAsyncThunk from "../getAsyncThunk";
import {
  IAvailableDeviceSchema,
  ICurrentPlayingTrackSchema,
  IRequestPlayTrackSchema,
} from "@/schemas/player.schema";
import { checkIsSavedTrackAPI } from "@/services/track.services";
import { AxiosResponse } from "axios";

export const getAvailableDevices = getAsyncThunk<
  { devices: IAvailableDeviceSchema[] },
  void
>("GET/getAvailableDevices", async (_, signal) => {
  const result = await getAvailableDevicesAPI(signal);
  if (result.data) return result.data;
  return result;
});

export const getCurrentPlayingTrack = getAsyncThunk<
  ICurrentPlayingTrackSchema,
  void
>("GET/getCurrentPlayingTrack", async (_, signal) => {
  const result = await getCurrentPlayingTrackAPI(signal);
  console.warn("result: " + result.data);

  if (result.data) {
    const isLiked: AxiosResponse<boolean[]> = await checkIsSavedTrackAPI(
      result.data.item.id ?? ""
    );
    result.data.item.isLiked = isLiked.data ? isLiked.data[0] : false;

    // Remove non-serializable values
    const { headers, request, ...serializableData } = result;

    return serializableData.data;
  }
  return null;
});

export const playTrack = getAsyncThunk<
  void,
  { deviceId: string; reqPlayTrackSchema: IRequestPlayTrackSchema }
>("PUT/playTrack", async ({ deviceId, reqPlayTrackSchema }, signal) => {
  console.log("playTrack : ", deviceId, reqPlayTrackSchema.uris);

  const result = await playTrackAPI(deviceId, reqPlayTrackSchema, signal);

  if (result.data) return result.data;
  return result;
});

export const pauseTrack = getAsyncThunk<void, { deviceId: string }>(
  "PUT/pauseTrack",
  async ({ deviceId }, signal) => {
    const result = await pauseTrackAPI(deviceId, signal);

    if (result.data) return result.data;
    return result;
  }
);

export const playNextTrack = getAsyncThunk<void, { deviceId: string }>(
  "PUT/playNextTrack",
  async ({ deviceId }, signal) => {
    const result = await playNextTrackAPI(deviceId, signal);

    if (result.data) return result.data;
    return result;
  }
);
export const playPreTrack = getAsyncThunk<void, { deviceId: string }>(
  "PUT/playPreTrack",
  async ({ deviceId }, signal) => {
    const result = await playPreTrackAPI(deviceId, signal);
    if (result.data) return result.data;
    return result;
  }
);
