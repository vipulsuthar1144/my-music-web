import { TitleSeeAll } from "@components/Image";
import { ContainerWithoutScrollbar, RootContainer } from "@components/styledComponents";
import { Box, CircularProgress, Grid, Skeleton, Typography } from "@mui/material";
import ItemCategoryList from "./utilityComp/ItemCategoryList";
import ItemArtistAlbumsList from "../home/utilityComp/ItemArtistAlbumsList";
import ItemSongList from "../home/utilityComp/ItemSongList";
import useSearch from "./Search.hook";

const Search = () => {
  const { lastCategoryItemRef, searchQuery, isSearchDataLoading, searchData, isCategoriesLoading, categories } = useSearch();

  const renderCategoriesData = () => {
    if (searchQuery != "") return;
    if (categories.length == 0 && !isCategoriesLoading) {
      return (
        <Typography variant="h3" my={"20px"}>
          No Category Found
        </Typography>
      );
    }
    return (
      <>
        <Typography variant="h1" my={"20px"}>
          Browse All
        </Typography>
        <Grid container spacing={2}>
          {categories.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Box component={"div"} ref={index === categories.length - 1 ? lastCategoryItemRef : null}>
                <ItemCategoryList category={item} />
              </Box>
            </Grid>
          ))}

          {isCategoriesLoading &&
            Array.from({ length: 20 }, (_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton variant="rectangular" animation="wave" sx={{ borderRadius: "8px" }} width={"100%"} height={"200px"} />
              </Grid>
            ))}
        </Grid>
      </>
    );
  };

  const renderSearchResultData = () => {
    if (searchQuery == "") return;
    if (isSearchDataLoading) {
      return <CircularProgress size={30} thickness={5} sx={{ color: "loader.main", alignSelf: "center", margin: "0 auto" }} />;
      // return <Skeleton variant="rectangular" animation="wave" sx={{ borderRadius: "8px" }} width={"100%"} height={"200px"} />;
    }
    if (searchData == null) return;
    return (
      <>
        <TitleSeeAll title="Songs" />
        <Grid container spacing={1} mb={"10px"}>
          {searchData?.tracks?.items?.map((item, _) => (
            <Grid item xs={12} lg={6}>
              <ItemSongList track={item} key={item.id} />
            </Grid>
          ))}
        </Grid>
        <TitleSeeAll title="Artist" />
        <ContainerWithoutScrollbar>
          {searchData?.artists?.items?.map((item, _) => (
            <ItemArtistAlbumsList key={item.id} type={item.type} title={item.name} img={(item.images && item?.images[0]?.url) || ""} isArtist={true} />
          ))}
        </ContainerWithoutScrollbar>
        <TitleSeeAll title="Album" />
        <ContainerWithoutScrollbar>
          {searchData?.albums?.items?.map((item, _) => (
            <ItemArtistAlbumsList key={item.id} type={item.type} title={item.name} img={(item.images && item?.images[0]?.url) || ""} />
          ))}
        </ContainerWithoutScrollbar>
        <TitleSeeAll title="Playlist" />
        <ContainerWithoutScrollbar>
          {searchData?.playlists?.items?.map((item, _) => (
            <ItemArtistAlbumsList key={item.id} type={item.type} title={item.name} img={(item.images && item?.images[0]?.url) || ""} />
          ))}
        </ContainerWithoutScrollbar>
      </>
    );
  };

  return (
    <>
      <RootContainer>
        {renderCategoriesData()}
        {renderSearchResultData()}
      </RootContainer>
    </>
  );
};

export default Search;
