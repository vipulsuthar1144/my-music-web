import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetPlaylistState } from "@/store/slices/playlist.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getMyPlaylists } from "@/store/thunkServices/playlist.thunkservices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useMyLibraryController = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const {
    isMyPlaylistError,
    isMyPlaylistLoading,
    myPlaylistOffset,
    myPlaylists,
    hasMoreMyPlaylist,
    bgColor,
  } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    dispatch(resetPlaylistState());
    dispatch(getMyPlaylists({ limit: 20, offset: 0 }));
  }, [dispatch]);

  const handleGetPlaylistsByCategoryId = () => {
    dispatch(getMyPlaylists({ limit: 20, offset: myPlaylistOffset }));
  };
  const lastPlaylistListItemRef = useLoadMore(
    handleGetPlaylistsByCategoryId,
    isMyPlaylistLoading,
    hasMoreMyPlaylist,
    isMyPlaylistError
  );
  const listenerGoToPlaylistDetails = (playlistId?: string) => {
    playlistId && navigate(`/playlist/${playlistId}`);
  };

  return {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    isMyPlaylistError,
    isMyPlaylistLoading,
    myPlaylistOffset,
    myPlaylists,
    hasMoreMyPlaylist,
    bgColor,
  };
};

export default useMyLibraryController;
