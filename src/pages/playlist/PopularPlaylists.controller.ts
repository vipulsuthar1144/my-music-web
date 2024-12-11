import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getPopularPlaylists } from "@/store/thunkServices/playlist.thunkservices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePopularPlaylistsController = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const {
    isPopularPlaylistsError,
    isPopularPlaylistsLoading,
    hasMorePopularPlaylists,
    popularPlaylists,
    popularPlaylistsOffset,
  } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    // dispatch(resetPlaylistState());
    // dispatch(getPopularPlaylists({ limit: 20, offset: 0 }));
  }, [dispatch]);

  const handleGetPlaylistsByCategoryId = () => {
    dispatch(
      getPopularPlaylists({ limit: 20, offset: popularPlaylistsOffset })
    );
  };
  const lastPlaylistListItemRef = useLoadMore(
    handleGetPlaylistsByCategoryId,
    isPopularPlaylistsLoading,
    hasMorePopularPlaylists,
    isPopularPlaylistsError
  );
  const listenerGoToPlaylistDetails = (playlistId?: string) => {
    playlistId && navigate(`/playlist/${playlistId}`);
  };

  return {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    isPopularPlaylistsError,
    isPopularPlaylistsLoading,
    hasMorePopularPlaylists,
    popularPlaylists,
    popularPlaylistsOffset,
  };
};

export default usePopularPlaylistsController;
