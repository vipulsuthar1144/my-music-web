import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetAlbumState } from "@/store/slices/album.slice";
import { toggleDialogImagePreview } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  getAlbumById,
  getAlbumTracks,
} from "@/store/thunkServices/album.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useAlbumDetailController = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const dispatch = useAppDispatch();
  const {
    isAlbumDataError,
    isAlbumDataLoading,
    albumData,
    bgColor,
    isTrackListError,
    isTrackListLoading,
    trackList,
    trackListOffset,
    hasMoreTrackList,
  } = useAppSelector((state) => state.album);

  useEffect(() => {
    if (albumId) {
      dispatch(resetAlbumState());
      dispatch(getAlbumById({ albumId: albumId }))
        .unwrap()
        .then(() => {
          dispatch(getAlbumTracks({ albumId: albumId, offset: 0 }));
        });
    }
  }, [dispatch, albumId]);

  const handleGetAlbumTracks = () => {
    albumId &&
      dispatch(getAlbumTracks({ albumId: albumId, offset: trackListOffset }));
  };
  const lastTrackListItemRef = useLoadMore(
    handleGetAlbumTracks,
    isTrackListLoading,
    hasMoreTrackList,
    isTrackListError
  );

  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };

  const listenerOpenDialogImagePreview = () => {
    dispatch(toggleDialogImagePreview(true));
  };

  return {
    listenerGoToArtistDetails,
    lastTrackListItemRef,
    listenerOpenDialogImagePreview,
    isAlbumDataError,
    isAlbumDataLoading,
    albumData,
    bgColor,
    isTrackListError,
    isTrackListLoading,
    trackList,
    trackListOffset,
    hasMoreTrackList,
  };
};

export default useAlbumDetailController;
