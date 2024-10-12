import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/styledComponents";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ItemArtistAlbumsList from "../search/utilityComp/ItemArtistAlbumsList";
import useCategoryPlaylistsController from "./CategoryPlaylists.controller";

const CategoryPlaylists = () => {
  const {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    isCategoryPlaylistsError,
    isCategoryPlaylistsLoading,
    categoryPlaylists,
    categoryTitle,
    categoryPlaylistsOffset,
    hasMoreCategoryPlaylists,
  } = useCategoryPlaylistsController();
  const renderPlaylistList = () => {
    if (isCategoryPlaylistsError)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Error Occurred
        </Typography>
      );
    if (categoryPlaylists.length == 0 && categoryPlaylistsOffset != 0 && !isCategoryPlaylistsLoading)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Playlist Not Found
        </Typography>
      );
    return (
      <>
        <Typography variant="h3" my={"20px"}>
          {categoryTitle}
        </Typography>
        <Grid container spacing={1}>
          {categoryPlaylists.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={item.id}>
              <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === categoryPlaylists.length - 1 ? lastPlaylistListItemRef : null}>
                <ItemArtistAlbumsList
                  key={item.id}
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
