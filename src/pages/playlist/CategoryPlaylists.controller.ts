import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetPlaylistState } from "@/store/slices/playlist.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getPlaylistsByCategoryId } from "@/store/thunkServices/playlist.thunkservices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useCategoryPlaylistsController = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const { isCategoryPlaylistsError, categoryTitle, isCategoryPlaylistsLoading, categoryPlaylists, categoryPlaylistsOffset, hasMoreCategoryPlaylists } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    if (categoryId) {
      dispatch(resetPlaylistState());
      dispatch(getPlaylistsByCategoryId({ categoryId: categoryId, offset: 0 }));
    }
  }, [dispatch, categoryId]);

  const handleGetPlaylistsByCategoryId = () => {
    categoryId && dispatch(getPlaylistsByCategoryId({ categoryId: categoryId, offset: categoryPlaylistsOffset }));
  };
  const lastPlaylistListItemRef = useLoadMore(handleGetPlaylistsByCategoryId, isCategoryPlaylistsLoading, hasMoreCategoryPlaylists, isCategoryPlaylistsError);
  const listenerGoToPlaylistDetails = (playlistId?: string) => {
    playlistId && navigate(`/playlist/${playlistId}`);
  };
  return {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    categoryTitle,
    isCategoryPlaylistsError,
    isCategoryPlaylistsLoading,
    categoryPlaylists,
    categoryPlaylistsOffset,
    hasMoreCategoryPlaylists,
  };
};

export default useCategoryPlaylistsController;
