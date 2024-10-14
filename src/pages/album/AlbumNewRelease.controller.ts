import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetAlbumState } from "@/store/slices/album.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getNewReleaseAlbums } from "@/store/thunkServices/album.thunksevices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAlbumNewReleaseController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isNewReleaseAlbumListError, isNewReleaseAlbumListLoading, newReleaseAlbumList, hasMoreNewReleaseAlbumList, newReleaseAlbumListOffset } = useAppSelector((state) => state.album);

  useEffect(() => {
    dispatch(resetAlbumState());
    dispatch(getNewReleaseAlbums({ limit: 20, offset: 0 }));
  }, [dispatch]);

  const handleGetNewReleaseAlbums = () => {
    dispatch(getNewReleaseAlbums({ limit: 20, offset: newReleaseAlbumListOffset }));
  };

  const lastAlbumListItemRef = useLoadMore(handleGetNewReleaseAlbums, isNewReleaseAlbumListLoading, hasMoreNewReleaseAlbumList, isNewReleaseAlbumListError);

  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };
  return {
    listenerGoToAlbumDetails,
    lastAlbumListItemRef,
    isNewReleaseAlbumListError,
    isNewReleaseAlbumListLoading,
    newReleaseAlbumList,
    hasMoreNewReleaseAlbumList,
    newReleaseAlbumListOffset,
  };
};

export default useAlbumNewReleaseController;
