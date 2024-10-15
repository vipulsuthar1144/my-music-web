import { useAppDispatch, useAppSelector } from "@/store/store";
import { getNewReleaseAlbums } from "@/store/thunkServices/album.thunksevices";
import { getPopularPlaylists, getTop2DailyMixPlaylist } from "@/store/thunkServices/playlist.thunkservices";
import { getRecentPlayedTracks, getTop5TrendingEnglishTracks, getTop5TrendingHindiTracks, getTop5TrendingPunjabiTracks } from "@/store/thunkServices/track.thunksevices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useHomeController = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isRecentPlayedTrackListError, isRecentPlayedTrackListLoading, recentPlayedTrackList } = useAppSelector((state) => state.track);
  const { isNewReleaseAlbumListError, isNewReleaseAlbumListLoading, newReleaseAlbumList } = useAppSelector((state) => state.album);
  const { isPopularPlaylistsError, isPopularPlaylistsLoading, popularPlaylists } = useAppSelector((state) => state.playlist);
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
    isDailyMixListError,
    isDailyMixListLoading,
    dailyMixList,
  } = useAppSelector((state) => state.home);

  useEffect(() => {
    dailyMixList.length == 0 && dispatch(getTop2DailyMixPlaylist());
    handleTrendingTracksAPIcall();
    dispatch(getRecentPlayedTracks({ limit: 10 }));
    popularPlaylists.length == 0 && dispatch(getPopularPlaylists({ limit: 10, offset: 0 }));
    newReleaseAlbumList.length == 0 && dispatch(getNewReleaseAlbums({ limit: 10, offset: 0 }));
  }, [dispatch]);

  const handleTrendingTracksAPIcall = () => {
    try {
      const promises = [];

      if (hindiTrackList.length === 0) {
        promises.push(dispatch(getTop5TrendingHindiTracks()));
      }
      if (punjabiTrackList.length === 0) {
        promises.push(dispatch(getTop5TrendingPunjabiTracks()));
      }
      if (englishTrackList.length === 0) {
        promises.push(dispatch(getTop5TrendingEnglishTracks()));
      }

      if (promises.length > 0) {
        Promise.all(promises)
          .then((results) => {
            console.log("All track lists fetched successfully", results);
          })
          .catch((error) => {
            console.error("Error fetching track lists:", error);
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
    isPopularPlaylistsError,
    isPopularPlaylistsLoading,
    popularPlaylists,
    isHindiTrackListError,
    isHindiTrackListLoading,
    hindiTrackList,
    isEnglishTrackListError,
    isEnglishTrackListLoading,
    englishTrackList,
    isPunjabiTrackListError,
    isPunjabiTrackListLoading,
    punjabiTrackList,
    isDailyMixListError,
    isDailyMixListLoading,
    dailyMixList,
  };
};

export default useHomeController;
