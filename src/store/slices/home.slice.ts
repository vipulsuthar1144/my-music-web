import {
  IPlaylistSchema,
  IPlaylistTrackSchema,
} from "@/schemas/playlist.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getTop2DailyMixPlaylist } from "../thunkServices/playlist.thunkservices";
import {
  getTop5TrendingEnglishTracks,
  getTop5TrendingHindiTracks,
  getTop5TrendingPunjabiTracks,
} from "../thunkServices/track.thunksevices";

interface IHomeSlice {
  isHindiTrackListLoading: boolean;
  hindiTrackList: IPlaylistTrackSchema[];
  isHindiTrackListError: boolean;
  isPunjabiTrackListLoading: boolean;
  punjabiTrackList: IPlaylistTrackSchema[];
  isPunjabiTrackListError: boolean;
  isEnglishTrackListLoading: boolean;
  englishTrackList: IPlaylistTrackSchema[];
  isEnglishTrackListError: boolean;
  isDailyMixListLoading: boolean;
  dailyMixList: IPlaylistSchema[];
  isDailyMixListError: boolean;
}

const intialState: IHomeSlice = {
  isHindiTrackListLoading: false,
  isHindiTrackListError: false,
  hindiTrackList: [],
  isPunjabiTrackListError: false,
  isPunjabiTrackListLoading: false,
  punjabiTrackList: [],
  isEnglishTrackListError: false,
  isEnglishTrackListLoading: false,
  englishTrackList: [],
  isDailyMixListError: false,
  isDailyMixListLoading: false,
  dailyMixList: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTop5TrendingHindiTracks.pending, (state) => {
        state.isHindiTrackListLoading = true;
      })
      .addCase(getTop5TrendingHindiTracks.fulfilled, (state, action) => {
        state.isHindiTrackListLoading = false;
        state.hindiTrackList = [...(action.payload?.items ?? [])];
      })
      .addCase(getTop5TrendingHindiTracks.rejected, (state) => {
        state.isHindiTrackListLoading = false;
        state.isHindiTrackListError = true;
      })
      .addCase(getTop5TrendingPunjabiTracks.pending, (state) => {
        state.isPunjabiTrackListLoading = true;
      })
      .addCase(getTop5TrendingPunjabiTracks.fulfilled, (state, action) => {
        state.isPunjabiTrackListLoading = false;
        state.punjabiTrackList = [...(action.payload?.items ?? [])];
      })
      .addCase(getTop5TrendingPunjabiTracks.rejected, (state) => {
        state.isPunjabiTrackListLoading = false;
        state.isPunjabiTrackListError = true;
      })
      .addCase(getTop5TrendingEnglishTracks.pending, (state) => {
        state.isEnglishTrackListLoading = true;
      })
      .addCase(getTop5TrendingEnglishTracks.fulfilled, (state, action) => {
        state.isEnglishTrackListLoading = false;
        state.englishTrackList = [...(action.payload?.items ?? [])];
      })
      .addCase(getTop5TrendingEnglishTracks.rejected, (state) => {
        state.isEnglishTrackListLoading = false;
        state.isEnglishTrackListError = true;
      })
      .addCase(getTop2DailyMixPlaylist.pending, (state) => {
        state.isDailyMixListLoading = true;
      })
      .addCase(getTop2DailyMixPlaylist.fulfilled, (state, action) => {
        state.isDailyMixListLoading = false;
        console.log("getTop2DailyMixPlaylist", action.payload);

        const spotifyMix = action.payload?.playlists?.items?.filter(
          (item) => item?.owner?.id === "spotify"
        );
        state.dailyMixList = [...(spotifyMix ?? [])];
      })
      .addCase(getTop2DailyMixPlaylist.rejected, (state) => {
        state.isDailyMixListLoading = false;
        state.isDailyMixListError = true;
      });
  },
});

export default homeSlice.reducer;
