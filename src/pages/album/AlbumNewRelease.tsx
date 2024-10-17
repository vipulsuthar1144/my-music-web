import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/design/styledComponents";
import { Box, Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useAlbumNewReleaseController from "./AlbumNewRelease.controller";
import FallbackError from "@components/FallbackError";

const AlbumNewRelease = () => {
  const { listenerGoToAlbumDetails, lastAlbumListItemRef, isNewReleaseAlbumListError, isNewReleaseAlbumListLoading, newReleaseAlbumList } = useAlbumNewReleaseController();
  const renderAlbums = () => {
    if (isNewReleaseAlbumListError) return <FallbackError type="something_went_wrong" />;
    if (newReleaseAlbumList.length == 0 && !isNewReleaseAlbumListError && !isNewReleaseAlbumListLoading) return <FallbackError message="No New Release Albums Available." type="data_not_found" />;

    return (
      <>
        <Typography variant="h3" my={"20px"}>
          Albums
        </Typography>
        <Grid container spacing={1}>
          {newReleaseAlbumList.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.id}${index}`}>
              <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === newReleaseAlbumList.length - 1 ? lastAlbumListItemRef : null}>
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
          {isNewReleaseAlbumListLoading && renderSkeleton()}
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

export default AlbumNewRelease;
