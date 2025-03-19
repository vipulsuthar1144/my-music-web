import {
  IAvailableDeviceSchema,
  ICurrentPlayingTrackSchema,
} from "@/schemas/player.schema";
import { createSlice } from "@reduxjs/toolkit";
import {
  getAvailableDevices,
  getCurrentPlayingTrack,
  playback,
} from "../thunkServices/player.thunkservice";
import { likeUnlikeTracks } from "../thunkServices/track.thunksevices";

interface IPlayerSlice {
  availableDevice: IAvailableDeviceSchema[] | null;
  currentPlayingTrack: ICurrentPlayingTrackSchema | null;
  isPlayerVisible: boolean;
  isPlaybackLoading: boolean;
}

const intialState: IPlayerSlice = {
  availableDevice: null,
  currentPlayingTrack: null,
  isPlayerVisible: false,
  isPlaybackLoading: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState: intialState,
  reducers: {
    resetPlayerState: (state) => {
      state.availableDevice = null;
      state.currentPlayingTrack = null;
      state.isPlayerVisible = false;
    },
    togglePlaybackLoadingState: (state) => {
      state.isPlaybackLoading = !state.isPlaybackLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAvailableDevices.fulfilled, (state, action) => {
        state.availableDevice = action.payload.devices;
      })
      .addCase(getCurrentPlayingTrack.pending, (state) => {
        state.isPlaybackLoading = true;
      })
      .addCase(getCurrentPlayingTrack.fulfilled, (state, action) => {
        state.isPlaybackLoading = false;
        state.currentPlayingTrack = action.payload;
      })
      .addCase(getCurrentPlayingTrack.rejected, (state) => {
        state.isPlaybackLoading = false;
      })
      .addCase(likeUnlikeTracks.fulfilled, (state, action) => {
        state.currentPlayingTrack?.item?.isLiked &&
          (state.currentPlayingTrack.item.isLiked = action.payload);
      })
      .addCase(playback.play.pending, (state) => {
        state.isPlayerVisible = true;
        state.isPlaybackLoading = true;
      })
      .addCase(playback.play.fulfilled, (state) => {
        state.isPlayerVisible = true;
        state.isPlaybackLoading = false;
      })
      .addCase(playback.play.rejected, (state) => {
        state.isPlayerVisible = false;
        state.isPlaybackLoading = false;
      });
  },
});

export const { resetPlayerState, togglePlaybackLoadingState } =
  playerSlice.actions;
export default playerSlice.reducer;
