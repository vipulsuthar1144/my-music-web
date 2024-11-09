import { TitleSeeAll } from "@components/design/Image";
import ItemCategoryListSkeleton from "@components/skeletons/ItemCategoryList.skeleton";
import SearchPageSkeleton from "@components/skeletons/SearchPage.skeleton";
import { ContainerWithoutScrollbar, RootContainer } from "@components/design/styledComponents";
import { Box, Grid, Typography } from "@mui/material";
import useSearchController from "./Search.controller";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import ItemCategoryList from "../../components/ItemCategoryList";
import ItemSongList from "../../components/ItemSongList";
import FallbackError from "@components/FallbackError";

const Search = () => {
  const {
    listenerGoToAlbumDetails,
    listenerGoToPlaylistDetails,
    listenerGoToCategoryDetails,
    lastCategoryItemRef,
    listenerSeeAllTracks,
    listenerSeeAllArtists,
    listenerSeeAllAlbums,
    listenerSeeAllPlaylists,
    listenerGoToArtistDetails,
    searchQuery,
    isSearchDataLoading,
    isSearchDataError,
    searchData,
    isCategoriesLoading,
    isCategoriesError,
    categories,
  } = useSearchController();

  const renderCategoriesData = () => {
    if (searchQuery != "") return;
    if (isCategoriesError) return <FallbackError type="something_went_wrong" />;
    if (categories.length == 0 && !isCategoriesError && !isCategoriesLoading) return <FallbackError message="No Category Available." type="data_not_found" />;
    return (
      <>
        <Typography variant="h1" my={"20px"}>
          Browse All
        </Typography>
        <Grid container spacing={2}>
          {categories.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Box key={item.id} component={"div"} ref={index === categories.length - 1 ? lastCategoryItemRef : null}>
                <ItemCategoryList onClick={() => listenerGoToCategoryDetails(item.id)} category={item} />
              </Box>
            </Grid>
          ))}

          {isCategoriesLoading &&
            Array.from({ length: 20 }, (_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ItemCategoryListSkeleton key={index} />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };
  const renderSearchResultData = () => {
    if (isSearchDataLoading) return <SearchPageSkeleton />;
    if (isSearchDataError) return <FallbackError type="something_went_wrong" />;
    if (searchQuery == "" || !searchData) return;
    if (searchData?.tracks?.items?.length == 0 && searchData?.artists?.items?.length == 0 && searchData?.albums?.items?.length == 0 && searchData?.playlists?.items?.length == 0)
      return <FallbackError message=" No Search Result Found" type="data_not_found" />;
    return (
      <>
        {renderTracksData()}
        {renderArtistsData()}
        {renderAlbumsData()}
        {renderPlaylistData()}
      </>
    );
  };
  const renderTracksData = () => {
    if (searchData?.tracks?.items?.length == 0) return;
    return (
      <>
        <TitleSeeAll title="Songs" isSeeAllBtnVisible={searchData?.tracks?.items?.length == 10} onSeeAllClick={listenerSeeAllTracks} />
        <Grid container spacing={1} padding={"10px"} mb={"10px"}>
          {searchData?.tracks?.items?.map((track, _) => (
            <Grid item xs={12} lg={6} key={track.id}>
              <ItemSongList key={track.id} img={track?.album?.images && track?.album?.images[0]?.url} title={track?.name} subtitleArr={track.artists} trackDuration={track.duration_ms} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  const renderArtistsData = () => {
    if (searchData?.artists?.items?.length == 0) return;
    return (
      <>
        <TitleSeeAll title="Artist" isSeeAllBtnVisible={searchData?.artists?.items?.length == 10} onSeeAllClick={listenerSeeAllArtists} />
        <ContainerWithoutScrollbar>
          {searchData?.artists?.items?.map((item, _) => (
            <ItemArtistAlbumsList
              key={item.id}
              subtitle={item.type}
              title={item.name}
              img={(item.images && item?.images[0]?.url) || ""}
              onClick={() => {
                listenerGoToArtistDetails(item.id);
              }}
              isArtist={true}
            />
          ))}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  const renderAlbumsData = () => {
    if (searchData?.albums?.items?.length == 0) return;
    return (
      <>
        <TitleSeeAll title="Album" isSeeAllBtnVisible={searchData?.albums?.items?.length == 10} onSeeAllClick={listenerSeeAllAlbums} />
        <ContainerWithoutScrollbar>
          {searchData?.albums?.items?.map((item, _) => (
            <ItemArtistAlbumsList
              onClick={() => listenerGoToAlbumDetails(item.id)}
              key={item.id}
              subtitleArr={item.artists}
              subtitle={item.release_date?.slice(0, 4)}
              title={item.name}
              img={(item.images && item?.images[0]?.url) || ""}
            />
          ))}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  const renderPlaylistData = () => {
    if (searchData?.playlists?.items?.length == 0) return;
    return (
      <>
        <TitleSeeAll title="Playlist" isSeeAllBtnVisible={searchData?.playlists?.items?.length == 10} onSeeAllClick={listenerSeeAllPlaylists} />
        <ContainerWithoutScrollbar>
          {searchData?.playlists?.items?.map((item, _) => (
            <ItemArtistAlbumsList
              key={item.id}
              onClick={() => listenerGoToPlaylistDetails(item.id)}
              subtitle={`By ${item.owner?.display_name}`}
              title={item.name}
              img={(item.images && item?.images[0]?.url) || ""}
            />
          ))}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  return (
    <>
      <RootContainer style={{ padding: "10px 0px" }}>
        {renderCategoriesData()}
        {renderSearchResultData()}
      </RootContainer>
    </>
  );
};

export default Search;
