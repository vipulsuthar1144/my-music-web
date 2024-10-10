import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAlbumsOfArtist, getArtistById, getRelatedArtists, getTopTracksOfArtist } from "@/store/thunkServices/artist.thunksevices";
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
  } = useAppSelector((state) => state.artist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (artistId) {
      dispatch(getArtistById({ artistId: artistId }))
        .unwrap()
        .then(async () => {
          try {
            await Promise.all([
              dispatch(getTopTracksOfArtist({ artistId: artistId })),
              dispatch(getRelatedArtists({ artistId: artistId })),
              dispatch(getAlbumsOfArtist({ artistId: artistId, offset: 0, limit: 10 })),
            ]);
          } catch {}
        });
    }
  }, [dispatch, artistId]);

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

  return {
    listenerSeeAllTopTracks,
    listenerGoToArtistDetails,
    listenerGoToAlbumDetails,
    listenerSeeAllRelatedArtist,
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
  };
};

export default useArtistProfileController;
