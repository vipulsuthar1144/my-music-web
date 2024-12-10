import { IRecentPlayedTrackSchema, ITrackSlice } from "@/schemas/track.schema";
import { createSlice } from "@reduxjs/toolkit";
import {
  getRecentPlayedTracks,
  getSavedTracks,
  likeUnlikeTracks,
} from "../thunkServices/track.thunksevices";

const intialState: ITrackSlice = {
  isRecentPlayedTrackListError: false,
  isRecentPlayedTrackListLoading: false,
  recentPlayedTrackList: [],

  isLikeUnlikeLoading: false,

  isSavedTracksListError: false,
  isSavedTracksListLoading: false,
  savedTracksList: [],
  hasMoreTracksAlbumList: true,
  savedTracksListOffset: 0,
};

export const trackSlice = createSlice({
  name: "track",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentPlayedTracks.pending, (state) => {
        state.isRecentPlayedTrackListLoading = true;
      })
      .addCase(getRecentPlayedTracks.fulfilled, (state, action) => {
        state.isRecentPlayedTrackListLoading = false;
        const seen = new Set();
        const recentList: IRecentPlayedTrackSchema[] =
          action?.payload?.items?.reduceRight((acc, curr) => {
            const trackId = curr.track?.id; // Extract the track ID
            if (trackId && !seen.has(trackId)) {
              seen.add(trackId); // Add only the ID to the Set
              acc.unshift(curr); // Keep the current item
            }
            return acc;
          }, [] as IRecentPlayedTrackSchema[]) ?? [];
        state.recentPlayedTrackList = [...recentList];
        // state.recentPlayedTrackList = [...(action?.payload?.items ?? [])];
      })
      .addCase(getRecentPlayedTracks.rejected, (state) => {
        state.isRecentPlayedTrackListLoading = false;
        state.isRecentPlayedTrackListError = true;
      })
      .addCase(likeUnlikeTracks.pending, (state) => {
        state.isLikeUnlikeLoading = true;
      })
      .addCase(likeUnlikeTracks.fulfilled, (state) => {
        state.isLikeUnlikeLoading = false;
        // state.savedTracksList && (state.savedTracksList. = action.payload);
      })
      .addCase(likeUnlikeTracks.rejected, (state) => {
        state.isLikeUnlikeLoading = false;
      })
      .addCase(getSavedTracks.pending, (state) => {
        state.isSavedTracksListLoading = true;
      })
      .addCase(getSavedTracks.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isSavedTracksListLoading = false;
        state.savedTracksListOffset = offset + limit;
        state.hasMoreTracksAlbumList = total > offset + limit;

        if (offset == 0) {
          state.savedTracksList = [...(action.payload?.items ?? [])];
        } else {
          state.savedTracksList = [
            ...state.savedTracksList,
            ...(action.payload?.items ?? []),
          ];
        }
        if (offset >= 80) {
          state.hasMoreTracksAlbumList = false;
        }
      })
      .addCase(getSavedTracks.rejected, (state) => {
        state.isSavedTracksListLoading = false;
        state.isSavedTracksListError = true;
      });
  },
});

export default trackSlice.reducer;
