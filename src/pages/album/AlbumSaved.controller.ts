import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetAlbumState } from "@/store/slices/album.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getSavedAlbums } from "@/store/thunkServices/album.thunksevices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAlbumSavedController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    isSavedAlbumListLoading,
    isSavedAlbumListError,
    hasMoreSavedAlbumList,
    savedAlbumList,
    savedAlbumListOffset,
  } = useAppSelector((state) => state.album);

  useEffect(() => {
    dispatch(resetAlbumState());
    dispatch(getSavedAlbums({ limit: 20, offset: 0 }));
  }, [dispatch]);

  const handleGetNewReleaseAlbums = () => {
    dispatch(getSavedAlbums({ limit: 20, offset: savedAlbumListOffset }));
  };

  const lastAlbumListItemRef = useLoadMore(
    handleGetNewReleaseAlbums,
    isSavedAlbumListLoading,
    hasMoreSavedAlbumList,
    isSavedAlbumListError
  );

  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };
  return {
    listenerGoToAlbumDetails,
    lastAlbumListItemRef,
    isSavedAlbumListLoading,
    isSavedAlbumListError,
    hasMoreSavedAlbumList,
    savedAlbumList,
    savedAlbumListOffset,
  };
};

export default useAlbumSavedController;
