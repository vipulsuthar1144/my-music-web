import { RootContainer } from "@components/design/styledComponents";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { Box, Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import usePopularPlaylistsController from "./PopularPlaylists.controller";
import FallbackError from "@components/FallbackError";

const PopularPlaylists = () => {
  const { lastPlaylistListItemRef, listenerGoToPlaylistDetails, isPopularPlaylistsError, isPopularPlaylistsLoading, popularPlaylists } = usePopularPlaylistsController();
  const renderPlaylistList = () => {
    if (isPopularPlaylistsError) return <FallbackError type="something_went_wrong" />;
    if (popularPlaylists.length == 0 && !isPopularPlaylistsError && !isPopularPlaylistsLoading) return <FallbackError message=" No Playlist Available" type="data_not_found" />;
    return (
      <>
        <Typography variant="h3">Popular Playlists</Typography>
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
