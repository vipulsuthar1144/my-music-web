import { resetArtistState } from "@/store/slices/artist.slice";
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
    if (artistId) {
      dispatch(resetArtistState());
      dispatch(getRelatedArtists({ artistId }));
    }
  }, [dispatch, artistId]);

  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };

  return {
    isRelatedArtistListError,
    isRelatedArtistListLoading,
    relatedArtistList,
    listenerGoToArtistDetails,
  };
};

export default useRelatedArtistController;
