import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { resetSeeAllDataList } from "@/store/slices/search.slice";
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
      handleGetSeeAllDataBySearchQuery();
    }
    return () => {
      dispatch(resetSeeAllDataList());
    };
  }, [searchQuery, searchType]);

  const handleGetSeeAllDataBySearchQuery = () => {
    dispatch(getSeeAllDataBySearchQuery({ searchQuery: searchQuery ?? "", type: searchType ?? "", offset: seeAllDataListOffset }));
  };
  const lastArtistListItemRef = useLoadMore(handleGetSeeAllDataBySearchQuery, isSeeAllDataListLoading, hasMoreSeeAllDataList, isSeeAllDataListError);

  return {
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
