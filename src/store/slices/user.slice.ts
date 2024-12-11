import { IArtistSchema } from "@/schemas/artist.schema";
import { IPlaylistSchema } from "@/schemas/playlist.schema";
import { ITrackSchema } from "@/schemas/track.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getRandomColor } from "@utils/genaralFunctions";
import {
  followUnfollowUser,
  getMyProfile,
  getMyProfileFollowedArtists,
  getMyProfileTopArtists,
  getMyProfileTopTracks,
  getUserPlaylist,
  getUserProfileById,
} from "../thunkServices/user.thunksevices";

interface IUserSlice {
  isUserProfileLoading: boolean;
  isUserProfileError: boolean;
  userProfileData: IArtistSchema | null;
  bgColor: string;

  isUserPlaylistsLoading: boolean;
  userPlaylists: IPlaylistSchema[];
  isUserPlaylistsError: boolean;
  hasMoreUserPlaylists: boolean;
  userPlaylistsOffset: number;

  isMyProfileLoading: boolean;
  isMyProfileError: boolean;
  myProfileData: IArtistSchema | null;

  isMyProfileTopArtistListLoading: boolean;
  myProfileTopArtistList: IArtistSchema[];
  isMyProfileTopArtistListError: boolean;
  hasMoreMyProfileTopArtistList: boolean;
  myProfileTopArtistListOffset: number;

  isMyProfileTopTrackListLoading: boolean;
  myProfileTopTrackList: ITrackSchema[];
  isMyProfileTopTrackListError: boolean;
  hasMoreMyProfileTopTrackList: boolean;
  myProfileTopTrackListOffset: number;

  isFollowedArtistListLoading: boolean;
  followedArtistList: IArtistSchema[];
  isFollowedArtistListError: boolean;

  isfollowUnfollowUserLoading: boolean;
}

const intialState: IUserSlice = {
  bgColor: "#9759a8",
  isUserProfileError: false,
  isUserProfileLoading: false,
  userProfileData: null,
  isUserPlaylistsError: false,
  isUserPlaylistsLoading: false,
  userPlaylists: [],
  hasMoreUserPlaylists: true,
  userPlaylistsOffset: 0,
  isMyProfileError: false,
  isMyProfileLoading: false,
  myProfileData: null,
  isMyProfileTopArtistListError: false,
  isMyProfileTopArtistListLoading: false,
  myProfileTopArtistList: [],
  hasMoreMyProfileTopArtistList: true,
  myProfileTopArtistListOffset: 0,
  isMyProfileTopTrackListError: false,
  isMyProfileTopTrackListLoading: false,
  myProfileTopTrackList: [],
  hasMoreMyProfileTopTrackList: true,
  myProfileTopTrackListOffset: 0,
  isFollowedArtistListLoading: false,
  followedArtistList: [],
  isFollowedArtistListError: false,
  isfollowUnfollowUserLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {
    resetUserState: (state) => {
      state.isUserProfileError = false;
      state.isUserPlaylistsLoading = false;
      state.userProfileData = null;
      state.isUserPlaylistsError = false;
      state.isUserPlaylistsLoading = false;
      state.userPlaylists = [];
      state.hasMoreUserPlaylists = true;
      state.userPlaylistsOffset = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileById.pending, (state) => {
        state.isUserProfileLoading = true;
      })
      .addCase(getUserProfileById.fulfilled, (state, action) => {
        state.isUserProfileLoading = false;
        state.bgColor = getRandomColor();
        state.userProfileData = action.payload;
      })
      .addCase(getUserProfileById.rejected, (state) => {
        state.isUserProfileLoading = false;
        state.isUserProfileError = true;
      })
      .addCase(getUserPlaylist.pending, (state) => {
        state.isUserPlaylistsLoading = true;
      })
      .addCase(getUserPlaylist.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isUserPlaylistsLoading = false;

        state.userPlaylistsOffset = offset + limit;
        state.hasMoreUserPlaylists = total > offset + limit;

        if (offset == 0) {
          state.userPlaylists = [...(action.payload?.items ?? [])];
        } else {
          state.userPlaylists = [
            ...state.userPlaylists,
            ...(action.payload?.items ?? []),
          ];
        }

        if (offset >= 80) {
          state.hasMoreUserPlaylists = false;
        }
      })
      .addCase(getUserPlaylist.rejected, (state) => {
        state.isUserPlaylistsLoading = false;
        state.isUserPlaylistsError = true;
      })
      .addCase(getMyProfile.pending, (state) => {
        state.isMyProfileLoading = true;
      })
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.isMyProfileLoading = false;
        state.bgColor = getRandomColor();
        state.myProfileData = action.payload;
      })
      .addCase(getMyProfile.rejected, (state) => {
        state.isMyProfileLoading = false;
        state.isMyProfileError = true;
      })
      .addCase(getMyProfileTopArtists.pending, (state) => {
        state.isMyProfileTopArtistListLoading = true;
      })
      .addCase(getMyProfileTopArtists.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isMyProfileTopArtistListLoading = false;

        state.myProfileTopArtistListOffset = offset + limit;
        state.hasMoreMyProfileTopArtistList = total > offset + limit;

        if (offset == 0) {
          state.myProfileTopArtistList = [...(action.payload?.items ?? [])];
        } else {
          state.myProfileTopArtistList = [
            ...state.myProfileTopArtistList,
            ...(action.payload?.items ?? []),
          ];
        }

        if (offset >= 80) {
          state.hasMoreMyProfileTopArtistList = false;
        }
      })
      .addCase(getMyProfileTopArtists.rejected, (state) => {
        state.isMyProfileTopArtistListLoading = false;
        state.isMyProfileTopArtistListError = true;
      })
      .addCase(getMyProfileTopTracks.pending, (state) => {
        state.isMyProfileTopTrackListLoading = true;
      })
      .addCase(getMyProfileTopTracks.fulfilled, (state, action) => {
        let offset = action.payload?.offset ?? 0;
        let limit = action.payload?.limit ?? 0;
        let total = action.payload?.total ?? 0;

        state.isMyProfileTopTrackListLoading = false;

        state.myProfileTopTrackListOffset = offset + limit;
        state.hasMoreMyProfileTopTrackList = total > offset + limit;

        if (offset == 0) {
          state.myProfileTopTrackList = [...(action.payload?.items ?? [])];
        } else {
          state.myProfileTopTrackList = [
            ...state.myProfileTopTrackList,
            ...(action.payload?.items ?? []),
          ];
        }

        if (offset >= 80) {
          state.hasMoreMyProfileTopTrackList = false;
        }
      })
      .addCase(getMyProfileTopTracks.rejected, (state) => {
        state.isMyProfileTopTrackListLoading = false;
        state.isMyProfileTopTrackListError = true;
      })
      .addCase(getMyProfileFollowedArtists.pending, (state) => {
        state.isFollowedArtistListLoading = true;
      })
      .addCase(getMyProfileFollowedArtists.fulfilled, (state, action) => {
        state.isFollowedArtistListLoading = false;
        state.followedArtistList = [...(action.payload?.artists?.items ?? [])];
      })
      .addCase(getMyProfileFollowedArtists.rejected, (state) => {
        state.isFollowedArtistListLoading = false;
        state.isFollowedArtistListError = true;
      })
      .addCase(followUnfollowUser.pending, (state) => {
        state.isfollowUnfollowUserLoading = true;
      })
      .addCase(followUnfollowUser.fulfilled, (state, action) => {
        state.isfollowUnfollowUserLoading = false;
        state.userProfileData &&
          (state.userProfileData.isFollowed = action.payload);
      })
      .addCase(followUnfollowUser.rejected, (state) => {
        state.isfollowUnfollowUserLoading = false;
      });
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
