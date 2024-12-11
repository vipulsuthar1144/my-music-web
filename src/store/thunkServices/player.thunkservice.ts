import {
  getAvailableDevicesAPI,
  getCurrentPlayingTrackAPI,
  playbackAPI,
  TRepeatModeOptions,
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

export const playback = {
  play: getAsyncThunk<void, { reqPlayTrackSchema: IRequestPlayTrackSchema }>(
    "PUT/playback/play",
    async ({ reqPlayTrackSchema }, signal) => {
      await playbackAPI.play(reqPlayTrackSchema, signal);
    }
  ),
  pause: getAsyncThunk("PUT/playback/pause", async (_, signal) => {
    await playbackAPI.pause(signal);
  }),
  skipNext: getAsyncThunk("PUT/playback/skipNext", async (_, signal) => {
    await playbackAPI.skipNext(signal);
  }),
  skipPrevious: getAsyncThunk(
    "PUT/playback/skipPrevious",
    async (_, signal) => {
      await playbackAPI.skipPrevious(signal);
    }
  ),
  setRepeatMode: getAsyncThunk<void, { mode: TRepeatModeOptions }>(
    "PUT/plaback/setRepeatMode",
    async ({ mode }, signal) => {
      await playbackAPI.setRepeatMode(mode, signal);
    }
  ),
  setShuffleMode: getAsyncThunk<void, { shuffle: boolean }>(
    "PUT/plaback/setShuffleMode",
    async ({ shuffle }, signal) => {
      await playbackAPI.setShuffleMode(shuffle, signal);
    }
  ),
  seekToPosition: getAsyncThunk<void, { positionMs: number }>(
    "PUT/plaback/seekToPosition",
    async ({ positionMs }, signal) => {
      await playbackAPI.seekToPosition(positionMs, signal);
    }
  ),
  setVolume: getAsyncThunk<void, { volume: number }>(
    "PUT/plaback/setVolume",
    async ({ volume }, signal) => {
      await playbackAPI.setVolume(volume, signal);
    }
  ),
};
