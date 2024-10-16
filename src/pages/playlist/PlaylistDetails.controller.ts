import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetPlaylistState } from "@/store/slices/playlist.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getPlaylistById, getPlaylistTracks } from "@/store/thunkServices/playlist.thunkservices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const usePlaylistDetailsController = () => {
  const navigate = useNavigate();
  const { playlistId } = useParams();
  const dispatch = useAppDispatch();
  const {
    isPlaylistDataError,
    isPlaylistDataLoading,
    bgColor,
    playlistData,
    isPlaylistTrackListError,
    isPlaylistTrackListLoading,
    playlistTrackList,
    hasMorePlaylistTrackList,
    playlistTrackListOffset,
  } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    if (playlistId) {
      dispatch(resetPlaylistState());
      dispatch(getPlaylistById({ playlistId: playlistId }))
        .unwrap()
        .then(() => {
          dispatch(getPlaylistTracks({ playlistId: playlistId, offset: 0 }));
        });
    }
  }, [dispatch, playlistId]);

  const handleGetPlaylistTracks = () => {
    playlistId && dispatch(getPlaylistTracks({ playlistId: playlistId, offset: playlistTrackListOffset }));
  };
  const lastTrackListItemRef = useLoadMore(handleGetPlaylistTracks, isPlaylistTrackListLoading, hasMorePlaylistTrackList, isPlaylistTrackListError);

  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };
  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };
  const listenerGoToUserProfile = (userId?: string) => {
    userId && navigate(`/user/${userId}`);
  };

  return {
    listenerGoToArtistDetails,
    listenerGoToAlbumDetails,
    listenerGoToUserProfile,
    lastTrackListItemRef,
    isPlaylistDataError,
    isPlaylistDataLoading,
    playlistData,
    bgColor,
    isPlaylistTrackListError,
    isPlaylistTrackListLoading,
    playlistTrackList,
    hasMorePlaylistTrackList,
    playlistTrackListOffset,
  };
};

export default usePlaylistDetailsController;
