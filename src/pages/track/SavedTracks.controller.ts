import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getSavedTracks } from "@/store/thunkServices/track.thunksevices";
import { useEffect } from "react";

const useSavedTracksController = () => {
  const dispatch = useAppDispatch();
  const {
    isSavedTracksListError,
    isSavedTracksListLoading,
    hasMoreTracksAlbumList,
    savedTracksList,
    savedTracksListOffset,
  } = useAppSelector((state) => state.track);

  useEffect(() => {
    dispatch(getSavedTracks({ offset: 0, limit: 20 }));
  }, [dispatch]);

  const handleGetSavedTracks = () => {
    dispatch(getSavedTracks({ limit: 20, offset: savedTracksListOffset }));
  };

  const lastTrackListItemRef = useLoadMore(
    handleGetSavedTracks,
    isSavedTracksListLoading,
    hasMoreTracksAlbumList,
    isSavedTracksListError
  );

  return {
    lastTrackListItemRef,
    isSavedTracksListError,
    isSavedTracksListLoading,
    hasMoreTracksAlbumList,
    savedTracksList,
    savedTracksListOffset,
  };
};

export default useSavedTracksController;
