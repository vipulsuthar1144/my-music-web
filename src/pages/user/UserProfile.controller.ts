import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetUserState } from "@/store/slices/user.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getUserPlaylist, getUserProfileById } from "@/store/thunkServices/user.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useUserProfileController = () => {
  const { isUserProfileError, isUserProfileLoading, userProfileData, bgColor, isUserPlaylistsError, isUserPlaylistsLoading, hasMoreUserPlaylists, userPlaylists, userPlaylistsOffset } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetUserState());
    if (userId) {
      dispatch(getUserProfileById({ userId: userId }))
        .unwrap()
        .then(() => {
          dispatch(getUserPlaylist({ userId: userId, offset: 0 }));
        });
    }
  }, [dispatch, userId]);

  const handleGetUserPlaylist = () => {
    userId && dispatch(getUserPlaylist({ userId: userId, offset: userPlaylistsOffset }));
  };
  const lastPlaylistListItemRef = useLoadMore(handleGetUserPlaylist, isUserPlaylistsLoading, hasMoreUserPlaylists, isUserPlaylistsError);
  const listenerGoToPlaylistDetails = (playlistId?: string) => {
    playlistId && navigate(`/playlist/${playlistId}`);
  };

  return {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    isUserProfileError,
    isUserProfileLoading,
    userProfileData,
    bgColor,
    userId,
    isUserPlaylistsError,
    isUserPlaylistsLoading,
    hasMoreUserPlaylists,
    userPlaylists,
    userPlaylistsOffset,
  };
};

export default useUserProfileController;
