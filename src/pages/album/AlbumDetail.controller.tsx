import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAlbumById, getAlbumTracks } from "@/store/thunkServices/album.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useAlbumDetailController = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const dispatch = useAppDispatch();
  const { isAlbumDataError, isAlbumDataLoading, albumData, bgColor, isTrackListError, isTrackListLoading, trackList, trackListOffset, hasMoreTrackList } = useAppSelector((state) => state.album);

  useEffect(() => {
    if (albumId) {
      dispatch(getAlbumById({ albumId: albumId }))
        .unwrap()
        .then(() => {
          dispatch(getAlbumTracks({ albumId: albumId, offset: 0 }));
        });
    }
  }, [dispatch, albumId]);

  const handleGetAlbumTracks = () => {
    albumId && dispatch(getAlbumTracks({ albumId: albumId, offset: trackListOffset }));
  };
  const lastTrackListItemRef = useLoadMore(handleGetAlbumTracks, isTrackListLoading, hasMoreTrackList, isTrackListError);

  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };

  return {
    listenerGoToArtistDetails,
    lastTrackListItemRef,
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
