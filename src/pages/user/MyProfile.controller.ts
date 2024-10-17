import { useAppDispatch, useAppSelector } from "@/store/store";
import { getMyProfile, getMyProfileFollowedArtists, getMyProfileTopArtists, getMyProfileTopTracks } from "@/store/thunkServices/user.thunksevices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useMyProfileController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    isMyProfileLoading,
    isMyProfileError,
    myProfileData,
    bgColor,
    isMyProfileTopArtistListError,
    isMyProfileTopArtistListLoading,
    myProfileTopArtistList,
    isMyProfileTopTrackListError,
    isMyProfileTopTrackListLoading,
    myProfileTopTrackList,
    isFollowedArtistListError,
    isFollowedArtistListLoading,
    followedArtistList,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!myProfileData) {
      dispatch(getMyProfile())
        .unwrap()
        .then(() => {
          dispatch(getMyProfileTopArtists({ limit: 10, offset: 0 }));
          dispatch(getMyProfileTopTracks({ limit: 10, offset: 0 }));
          dispatch(getMyProfileFollowedArtists({ limit: 10 }));
        });
    }
  }, [dispatch]);

  const listenerSeeAllTopTracks = () => {
    navigate(`/user/me/top-tracks`);
  };
  const listenerSeeAllTopArtists = () => {
    navigate(`/user/me/top-artists`);
  };
  const listenerSeeAllFollowedArtists = () => {
    navigate(`/user/me/following`);
  };
  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };

  return {
    listenerSeeAllTopTracks,
    listenerSeeAllTopArtists,
    listenerSeeAllFollowedArtists,
    listenerGoToArtistDetails,
    isMyProfileLoading,
    isMyProfileError,
    myProfileData,
    bgColor,
    isMyProfileTopArtistListError,
    isMyProfileTopArtistListLoading,
    myProfileTopArtistList,
    isMyProfileTopTrackListError,
    isMyProfileTopTrackListLoading,
    myProfileTopTrackList,
    isFollowedArtistListError,
    isFollowedArtistListLoading,
    followedArtistList,
  };
};

export default useMyProfileController;
