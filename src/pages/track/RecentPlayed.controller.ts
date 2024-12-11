import { useAppDispatch, useAppSelector } from "@/store/store";
import { getRecentPlayedTracks } from "@/store/thunkServices/track.thunksevices";
import { useEffect } from "react";

const useRecentPlayedController = () => {
  const dispatch = useAppDispatch();
  const { isRecentPlayedTrackListError, isRecentPlayedTrackListLoading, recentPlayedTrackList } = useAppSelector((state) => state.track);

  useEffect(() => {
    dispatch(getRecentPlayedTracks({ limit: 50 }));
  }, [dispatch]);

  return {
    isRecentPlayedTrackListError,
    isRecentPlayedTrackListLoading,
    recentPlayedTrackList,
  };
};

export default useRecentPlayedController;
