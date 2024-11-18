import { RootContainer } from "@components/design/styledComponents";
import FallbackError from "@components/FallbackError";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { Box, Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useAlbumSavedController from "./AlbumSaved.controller";

const AlbumSaved = () => {
  const {
    listenerGoToAlbumDetails,
    lastAlbumListItemRef,
    isSavedAlbumListLoading,
    isSavedAlbumListError,
    savedAlbumList,
  } = useAlbumSavedController();
  const renderAlbums = () => {
    if (isSavedAlbumListError)
      return <FallbackError type="something_went_wrong" />;
    if (
      savedAlbumList.length == 0 &&
      !isSavedAlbumListError &&
      !isSavedAlbumListLoading
    )
      return (
        <FallbackError message="No Saved Albums Found." type="data_not_found" />
      );

    return (
      <>
        <Typography variant="h3">Saved Albums</Typography>
        <Grid container spacing={1}>
          {savedAlbumList.map((item, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={1.5}
              key={`${item.album.id}${index}`}
            >
              <Box
                key={item.album.id}
                component={"div"}
                sx={{ width: "100%" }}
                ref={
                  index === savedAlbumList.length - 1
                    ? lastAlbumListItemRef
                    : null
                }
              >
                <ItemArtistAlbumsList
                  key={item.album.id}
                  onClick={() => listenerGoToAlbumDetails(item.album.id)}
                  subtitleArr={item.album.artists}
                  subtitle={item.album.release_date?.slice(0, 4)}
                  title={item.album.name}
                  img={(item.album.images && item.album?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isSavedAlbumListLoading && renderSkeleton()}
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

export default AlbumSaved;
