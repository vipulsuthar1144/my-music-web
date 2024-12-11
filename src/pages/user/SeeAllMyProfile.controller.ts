import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getMyProfileFollowedArtists, getMyProfileTopArtists, getMyProfileTopTracks } from "@/store/thunkServices/user.thunksevices";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSeeAllMyProfileController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isMyProfileTopTrackListError,
    isMyProfileTopTrackListLoading,
    myProfileTopTrackList,
    hasMoreMyProfileTopTrackList,
    myProfileTopTrackListOffset,
    isFollowedArtistListError,
    isFollowedArtistListLoading,
    followedArtistList,
    isMyProfileTopArtistListError,
    isMyProfileTopArtistListLoading,
    myProfileTopArtistList,
    hasMoreMyProfileTopArtistList,
    myProfileTopArtistListOffset,
  } = useAppSelector((state) => state.user);
  const isTopTracksRoute = (): boolean => {
    return location.pathname.includes("top-tracks");
  };
  const isTopArtistRoute = (): boolean => {
    return location.pathname.includes("top-artists");
  };
  const isFollowedArtistRoute = (): boolean => {
    return location.pathname.includes("following");
  };
  useEffect(() => {
    if (isTopTracksRoute()) {
      handleGetMyProfileTopTracks();
    } else if (isTopArtistRoute()) {
      handleGetMyProfileTopArtists();
    } else if (isFollowedArtistRoute()) {
      handleGetMyProfileFollowedArtists();
    }
  }, [dispatch]);

  const handleGetMyProfileTopTracks = () => {
    dispatch(getMyProfileTopTracks({ limit: 20, offset: myProfileTopTrackListOffset }));
  };
  const handleGetMyProfileTopArtists = () => {
    dispatch(getMyProfileTopArtists({ limit: 20, offset: myProfileTopArtistListOffset }));
  };
  const handleGetMyProfileFollowedArtists = () => {
    dispatch(getMyProfileFollowedArtists({ limit: 50 }));
  };
  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };
  const lastTopTrackListItemRef = useLoadMore(handleGetMyProfileTopTracks, isMyProfileTopTrackListLoading, hasMoreMyProfileTopTrackList, isMyProfileTopTrackListError);
  const lastTopArtistListItemRef = useLoadMore(handleGetMyProfileTopArtists, isMyProfileTopArtistListLoading, hasMoreMyProfileTopArtistList, isMyProfileTopArtistListError);

  return {
    listenerGoToArtistDetails,
    lastTopTrackListItemRef,
    lastTopArtistListItemRef,
    isTopTracksRoute,
    isTopArtistRoute,
    isFollowedArtistRoute,
    isMyProfileTopTrackListError,
    isMyProfileTopTrackListLoading,
    myProfileTopTrackList,
    hasMoreMyProfileTopTrackList,
    myProfileTopTrackListOffset,
    isFollowedArtistListError,
    isFollowedArtistListLoading,
    followedArtistList,
    isMyProfileTopArtistListError,
    isMyProfileTopArtistListLoading,
    myProfileTopArtistList,
    hasMoreMyProfileTopArtistList,
    myProfileTopArtistListOffset,
  };
};
export default useSeeAllMyProfileController;
