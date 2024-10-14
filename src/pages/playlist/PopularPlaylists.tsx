import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/styledComponents";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ItemArtistAlbumsList from "../search/utilityComp/ItemArtistAlbumsList";
import usePopularPlaylistsController from "./PopularPlaylists.controller";

const PopularPlaylists = () => {
  const { lastPlaylistListItemRef, listenerGoToPlaylistDetails, isPopularPlaylistsError, isPopularPlaylistsLoading, hasMorePopularPlaylists, popularPlaylists, popularPlaylistsOffset } =
    usePopularPlaylistsController();
  const renderPlaylistList = () => {
    if (isPopularPlaylistsError)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Error Occurred
        </Typography>
      );
    if (popularPlaylists.length == 0 && !isPopularPlaylistsError && !isPopularPlaylistsLoading)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Playlist Not Found
        </Typography>
      );
    return (
      <>
        <Typography variant="h3" my={"20px"}>
          Popular Playlists
        </Typography>
        <Grid container spacing={1}>
          {popularPlaylists.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.id}${index}`}>
              <Box component={"div"} sx={{ width: "100%" }} ref={index === popularPlaylists.length - 1 ? lastPlaylistListItemRef : null}>
                <ItemArtistAlbumsList
                  onClick={() => listenerGoToPlaylistDetails(item.id)}
                  subtitle={`By ${item.owner?.display_name}`}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isPopularPlaylistsLoading && renderSkeleton()}
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

export default PopularPlaylists;
