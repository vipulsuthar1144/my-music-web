import useLoadMore from "@/config/hooks/useLoadMore.hooks";
import { emptySearchData, resetSearchState } from "@/store/slices/search.slice";
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
    }, 800);
    return () => {
      return clearTimeout(timeout);
      // dispatch(emptySearchData());
    };
  }, [dispatch, searchQuery]);

  useEffect(() => {
    return () => {
      dispatch(resetSearchState());
    };
  }, []);

  const handleSearchResult = () => {
    searchQuery == "" ? dispatch(emptySearchData()) : dispatch(getSearchResult(searchQuery));
  };
  const handleGetCategories = () => {
    dispatch(getAllCategories({ offset: categoriesOffset }));
  };
  const lastCategoryItemRef = useLoadMore(handleGetCategories, isCategoriesLoading, hasMoreCategoriesData, isCategoriesError);

  const listenerSeeAllTracks = () => {
    navigate(`/search/track/${searchQuery}`);
  };
  const listenerSeeAllArtists = () => {
    navigate(`/search/artist/${searchQuery}`);
  };
  const listenerSeeAllAlbums = () => {
    navigate(`/search/album/${searchQuery}`);
  };
  const listenerSeeAllPlaylists = () => {
    navigate(`/search/playlist/${searchQuery}`);
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
  const listenerGoToCategoryDetails = (categoryId?: string) => {
    categoryId && navigate(`/category/${categoryId}/playlists`);
  };

  return {
    listenerGoToAlbumDetails,
    listenerGoToCategoryDetails,
    listenerGoToArtistDetails,
    listenerGoToPlaylistDetails,
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
