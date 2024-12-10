import { useAppDispatch, useAppSelector } from "@/store/store";
import { getNewReleaseAlbums } from "@/store/thunkServices/album.thunksevices";
import {
  getRecentPlayedTracks,
  getTop5TrendingEnglishTracks,
  getTop5TrendingHindiTracks,
  getTop5TrendingPunjabiTracks,
} from "@/store/thunkServices/track.thunksevices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useHomeController = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    isRecentPlayedTrackListError,
    isRecentPlayedTrackListLoading,
    recentPlayedTrackList,
  } = useAppSelector((state) => state.track);
  const {
    isNewReleaseAlbumListError,
    isNewReleaseAlbumListLoading,
    newReleaseAlbumList,
  } = useAppSelector((state) => state.album);

  const {
    isHindiTrackListError,
    isHindiTrackListLoading,
    hindiTrackList,
    isEnglishTrackListError,
    isEnglishTrackListLoading,
    englishTrackList,
    isPunjabiTrackListError,
    isPunjabiTrackListLoading,
    punjabiTrackList,
  } = useAppSelector((state) => state.home);

  useEffect(() => {
    handleAPIcall();
  }, [dispatch]);

  const handleAPIcall = () => {
    try {
      const promises = [];

      hindiTrackList.length === 0 &&
        promises.push(dispatch(getTop5TrendingHindiTracks()));
      punjabiTrackList.length === 0 &&
        promises.push(dispatch(getTop5TrendingPunjabiTracks()));
      englishTrackList.length === 0 &&
        promises.push(dispatch(getTop5TrendingEnglishTracks()));
      newReleaseAlbumList.length == 0 &&
        promises.push(dispatch(getNewReleaseAlbums({ limit: 10, offset: 0 })));
      promises.push(dispatch(getRecentPlayedTracks({ limit: 50 })));

      if (promises.length > 0) {
        Promise.all(promises)
          .then((results) => {
            console.log("Home API's fatch successfully", results);
          })
          .catch((error) => {
            console.error("Error Home API's fatch successfully:", error);
          });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };

  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };

  const listenerGoToPlaylistDetails = (playlistId?: string) => {
    playlistId && navigate(`/playlist/${playlistId}`);
  };

  const listenerSeeAllNewRelease = () => {
    navigate(`/album/new-release`);
  };

  const listenerSeeAllPopularPlaylist = () => {
    navigate(`/playlist/popular`);
  };

  return {
    listenerGoToArtistDetails,
    listenerGoToAlbumDetails,
    listenerGoToPlaylistDetails,
    listenerSeeAllNewRelease,
    listenerSeeAllPopularPlaylist,
    isRecentPlayedTrackListError,
    isRecentPlayedTrackListLoading,
    recentPlayedTrackList,
    isNewReleaseAlbumListError,
    isNewReleaseAlbumListLoading,
    newReleaseAlbumList,
    isHindiTrackListError,
    isHindiTrackListLoading,
    hindiTrackList,
    isEnglishTrackListError,
    isEnglishTrackListLoading,
    englishTrackList,
    isPunjabiTrackListError,
    isPunjabiTrackListLoading,
    punjabiTrackList,
  };
};

export default useHomeController;
