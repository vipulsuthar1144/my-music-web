import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { emptySearchData } from "@/store/slices/search.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllCategories } from "@/store/thunkServices/category.thunksevices";
import { getSearchResult } from "@/store/thunkServices/search.thunksevices";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useSearchController = () => {
  const { isSearchDataLoading, searchData } = useAppSelector((state) => state.search);
  const { isCategoriesLoading, isCategoriesError, categories, hasMoreCategoriesData, categoriesOffset } = useAppSelector((state) => state.category);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0 && searchQuery == "") {
      handleGetCategories();
    }
    const timeout = setTimeout(() => {
      handleSearchResult();
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const handleSearchResult = () => {
    searchQuery == "" ? dispatch(emptySearchData()) : dispatch(getSearchResult(searchQuery));
  };
  const handleGetCategories = () => {
    dispatch(getAllCategories({ offset: categoriesOffset }));
  };
  const lastCategoryItemRef = useLoadMore(handleGetCategories, isCategoriesLoading, hasMoreCategoriesData);

  const listenerSeeAllTracks = () => {
    navigate(`/search/tracks/${searchQuery}`);
  };
  const listenerSeeAllArtists = () => {
    navigate(`/search/artists/${searchQuery}`);
  };
  const listenerSeeAllAlbums = () => {
    navigate(`/search/albums/${searchQuery}`);
  };
  const listenerSeeAllPlaylists = () => {
    navigate(`/search/plalists/${searchQuery}`);
  };

  return {
    lastCategoryItemRef,
    listenerSeeAllTracks,
    listenerSeeAllArtists,
    listenerSeeAllAlbums,
    listenerSeeAllPlaylists,
    searchQuery,
    isSearchDataLoading,
    searchData,
    isCategoriesLoading,
    isCategoriesError,
    categories,
    hasMoreCategoriesData,
    categoriesOffset,
  };
};

export default useSearchController;
