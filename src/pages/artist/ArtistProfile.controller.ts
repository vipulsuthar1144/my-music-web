import { resetArtistState } from "@/store/slices/artist.slice";
import { toggleDialogImagePreview } from "@/store/slices/globleLoader.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  followUnfollowArtist,
  getAlbumsOfArtist,
  getArtistById,
  getRelatedArtists,
  getTopTracksOfArtist,
} from "@/store/thunkServices/artist.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useArtistProfileController = () => {
  const navigate = useNavigate();
  const { artistId } = useParams();
  const {
    isArtistDataLoading,
    isArtistDataError,
    artistData,
    bgColor,
    artistTopTrackList,
    isArtistTopTracksListLoading,
    isArtistTopTracksListError,
    relatedArtistList,
    isRelatedArtistListLoading,
    isRelatedArtistListError,
    isArtistAlbumsListError,
    isArtistAlbumsListLoading,
    artistAlbumsList,
    isfollowUnfollowArtistLoading,
  } = useAppSelector((state) => state.artist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (artistId) {
      dispatch(resetArtistState());
      dispatch(getArtistById({ artistId: artistId }))
        .unwrap()
        .then(async () => {
          try {
            await Promise.all([
              dispatch(getTopTracksOfArtist({ artistId: artistId })),
              dispatch(
                getAlbumsOfArtist({ artistId: artistId, offset: 0, limit: 10 })
              ),
              dispatch(getRelatedArtists({ artistId: artistId })),
            ]);
          } catch {}
        });
    }
  }, [dispatch, artistId]);

  const handleFollowUnfollowArtistAPICall = () => {
    dispatch(
      followUnfollowArtist({
        isFollowed: artistData?.isFollowed ?? false,
        artistId: artistId ?? "",
      })
    );
  };

  const listenerSeeAllTopTracks = () => {
    navigate(`/search/track/${artistData?.name}`);
  };
  const listenerSeeAllRelatedArtist = () => {
    navigate(`/artist/${artistId}/related-artists`);
  };
  const listenerSeeAllAlbums = () => {
    navigate(`/artist/${artistId}/albums`);
  };
  const listenerGoToArtistDetails = (artistId?: string) => {
    navigate(`/artist/${artistId}`);
  };
  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };
  const listenerOpenDialogImagePreview = () => {
    dispatch(toggleDialogImagePreview(true));
  };

  return {
    listenerSeeAllTopTracks,
    listenerGoToArtistDetails,
    listenerGoToAlbumDetails,
    listenerSeeAllRelatedArtist,
    handleFollowUnfollowArtistAPICall,
    listenerOpenDialogImagePreview,
    listenerSeeAllAlbums,
    isArtistDataLoading,
    isArtistDataError,
    artistData,
    bgColor,
    artistId,
    artistTopTrackList,
    isArtistTopTracksListLoading,
    isArtistTopTracksListError,
    relatedArtistList,
    isRelatedArtistListLoading,
    isRelatedArtistListError,
    isArtistAlbumsListError,
    isArtistAlbumsListLoading,
    artistAlbumsList,
    isfollowUnfollowArtistLoading,
  };
};

export default useArtistProfileController;
