import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAlbumsOfArtist } from "@/store/thunkServices/artist.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useArtistAlbumsController = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { artistId } = useParams();
  const { artistAlbumsListOffset, isArtistAlbumsListLoading, isArtistAlbumsListError, artistAlbumsList, hasMoreArtistAlbumsList } = useAppSelector((state) => state.artist);

  useEffect(() => {
    if (artistId) dispatch(getAlbumsOfArtist({ artistId: artistId, offset: 0, limit: 20 }));
  }, [dispatch, artistId]);

  const handleGetAlbumsOfArtist = () => {
    artistId && dispatch(getAlbumsOfArtist({ artistId: artistId, offset: artistAlbumsListOffset, limit: 20 }));
  };

  const lastAlbumListItemRef = useLoadMore(handleGetAlbumsOfArtist, isArtistAlbumsListLoading, hasMoreArtistAlbumsList, isArtistAlbumsListError);

  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };

  return {
    lastAlbumListItemRef,
    handleGetAlbumsOfArtist,
    listenerGoToAlbumDetails,
    artistAlbumsListOffset,
    isArtistAlbumsListLoading,
    isArtistAlbumsListError,
    artistAlbumsList,
    hasMoreArtistAlbumsList,
  };
};

export default useArtistAlbumsController;
