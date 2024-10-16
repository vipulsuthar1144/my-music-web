import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/design/styledComponents";
import { Box, Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useArtistAlbumsController from "./ArtistAlbums.controller";

const ArtistAlbums = () => {
  const { lastAlbumListItemRef, isArtistAlbumsListLoading, isArtistAlbumsListError, artistAlbumsList, listenerGoToAlbumDetails } = useArtistAlbumsController();

  const renderAlbums = () => {
    if (isArtistAlbumsListError)
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Error Occurred while fetching albums. Please try again later.
        </Typography>
      );

    return (
      <>
        <Typography variant="h3" my={"20px"}>
          Albums
        </Typography>
        <Grid container spacing={1}>
          {artistAlbumsList.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.id}${index}`}>
              <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === artistAlbumsList.length - 1 ? lastAlbumListItemRef : null}>
                <ItemArtistAlbumsList
                  key={item.id}
                  onClick={() => listenerGoToAlbumDetails(item.id)}
                  subtitleArr={item.artists}
                  subtitle={item.release_date?.slice(0, 4)}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isArtistAlbumsListLoading && renderSkeleton()}
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
  return <RootContainer>{renderAlbums()}</RootContainer>;
};

export default ArtistAlbums;
