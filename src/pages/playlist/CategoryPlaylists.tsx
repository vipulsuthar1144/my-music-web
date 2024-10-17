import { RootContainer } from "@components/design/styledComponents";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { Box, Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useCategoryPlaylistsController from "./CategoryPlaylists.controller";
import FallbackError from "@components/FallbackError";

const CategoryPlaylists = () => {
  const { lastPlaylistListItemRef, listenerGoToPlaylistDetails, isCategoryPlaylistsError, isCategoryPlaylistsLoading, categoryPlaylists, categoryTitle } = useCategoryPlaylistsController();
  const renderPlaylistList = () => {
    if (isCategoryPlaylistsError) return <FallbackError type="something_went_wrong" />;
    if (categoryPlaylists.length == 0 && !isCategoryPlaylistsError && !isCategoryPlaylistsLoading) return <FallbackError message="Playlist not found" type="data_not_found" />;

    return (
      <>
        <Typography variant="h3" my={"20px"}>
          {categoryTitle}
        </Typography>
        <Grid container spacing={1}>
          {categoryPlaylists.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.id}${index}`}>
              <Box component={"div"} sx={{ width: "100%" }} ref={index === categoryPlaylists.length - 1 ? lastPlaylistListItemRef : null}>
                <ItemArtistAlbumsList
                  onClick={() => listenerGoToPlaylistDetails(item.id)}
                  subtitle={`By ${item.owner?.display_name}`}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isCategoryPlaylistsLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };
  const renderSkeleton = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
        <ItemArtistAlbumListSkeleton isArtist={false} key={index} />
      </Grid>
    ));
  };
  return <RootContainer>{renderPlaylistList()}</RootContainer>;
};

export default CategoryPlaylists;
