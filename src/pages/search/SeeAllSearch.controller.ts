import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetSearchState } from "@/store/slices/search.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getSeeAllDataBySearchQuery } from "@/store/thunkServices/search.thunksevices";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useSeeAllSearchController = () => {
  const { isSeeAllDataListLoading, seeAllDataList, isSeeAllDataListError, hasMoreSeeAllDataList, seeAllDataListOffset } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const { searchQuery, searchType } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!["track", "artist", "playlist", "album"].includes(searchType ?? "")) {
      navigate("/", { replace: true });
    } else {
      dispatch(resetSearchState());
      dispatch(getSeeAllDataBySearchQuery({ searchQuery: searchQuery ?? "", type: searchType ?? "", offset: 0 }));
    }
  }, [dispatch, searchQuery, searchType]);

  const handleGetSeeAllDataBySearchQuery = () => {
    dispatch(getSeeAllDataBySearchQuery({ searchQuery: searchQuery ?? "", type: searchType ?? "", offset: seeAllDataListOffset }));
  };
  const lastArtistListItemRef = useLoadMore(handleGetSeeAllDataBySearchQuery, isSeeAllDataListLoading, hasMoreSeeAllDataList, isSeeAllDataListError);

  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };
  const listenerGoToAlbumDetails = (albumId?: string) => {
    albumId && navigate(`/album/${albumId}`);
  };
  const listenerGoToPlaylistDetails = (playlistId?: string) => {
    playlistId && navigate(`/playlist/${playlistId}`);
  };

  return {
    listenerGoToAlbumDetails,
    listenerGoToArtistDetails,
    listenerGoToPlaylistDetails,
    isSeeAllDataListLoading,
    seeAllDataList,
    isSeeAllDataListError,
    hasMoreSeeAllDataList,
    seeAllDataListOffset,
    searchQuery,
    searchType,
    lastArtistListItemRef,
  };
};
export default useSeeAllSearchController;
