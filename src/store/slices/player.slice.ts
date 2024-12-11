import {
  IAvailableDeviceSchema,
  ICurrentPlayingTrackSchema,
} from "@/schemas/player.schema";
import { createSlice } from "@reduxjs/toolkit";
import {
  getAvailableDevices,
  getCurrentPlayingTrack,
} from "../thunkServices/player.thunkservice";
import { likeUnlikeTracks } from "../thunkServices/track.thunksevices";

interface IPlayerSlice {
  availableDevice: IAvailableDeviceSchema[] | null;
  currentPlayingTrack: ICurrentPlayingTrackSchema | null;
}

const intialState: IPlayerSlice = {
  availableDevice: null,
  currentPlayingTrack: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAvailableDevices.fulfilled, (state, action) => {
        state.availableDevice = action.payload.devices;
      })
      .addCase(getCurrentPlayingTrack.fulfilled, (state, action) => {
        console.log("getCurrentPlayingTrack :: ", action.payload);
        state.currentPlayingTrack = action.payload;
      })
      .addCase(likeUnlikeTracks.fulfilled, (state, action) => {
        state.currentPlayingTrack?.item?.isLiked &&
          (state.currentPlayingTrack.item.isLiked = action.payload);
      });
  },
});

export default playerSlice.reducer;
