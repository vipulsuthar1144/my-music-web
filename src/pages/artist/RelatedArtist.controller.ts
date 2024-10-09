import { useAppDispatch, useAppSelector } from "@/store/store";
import { getRelatedArtists } from "@/store/thunkServices/artist.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useRelatedArtistController = () => {
  const dispatch = useAppDispatch();
  const { isRelatedArtistListError, isRelatedArtistListLoading, relatedArtistList } = useAppSelector((state) => state.artist);
  const { artistId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    artistId && dispatch(getRelatedArtists({ artistId }));
  }, [dispatch, artistId]);

  const listenerArtistDetails = (id: string) => {
    navigate(`/artist/${id}`);
  };

  return {
    isRelatedArtistListError,
    isRelatedArtistListLoading,
    relatedArtistList,
    listenerArtistDetails,
  };
};

export default useRelatedArtistController;
