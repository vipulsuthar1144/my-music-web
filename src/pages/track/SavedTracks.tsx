import { RootContainer } from "@components/design/styledComponents";
import FallbackError from "@components/FallbackError";
import ItemSongList from "@components/ItemSongList";
import ItemSongListSkeleton from "@components/skeletons/ItemSongLIst.skeleton";
import { Box, Grid, Typography } from "@mui/material";
import useSavedTracksController from "./SavedTracks.controller";

const SavedTracks = () => {
  const {
    lastTrackListItemRef,
    isSavedTracksListError,
    isSavedTracksListLoading,
    savedTracksList,
  } = useSavedTracksController();

  const renderRecentPlayedTracks = () => {
    if (isSavedTracksListError)
      return <FallbackError type="something_went_wrong" />;
    if (
      savedTracksList.length == 0 &&
      !isSavedTracksListError &&
      !isSavedTracksListLoading
    )
      return (
        <FallbackError message="No Liked Tracks Found" type="data_not_found" />
      );

    return (
      <>
        <Typography variant="h3">Liked Songs</Typography>
        <Grid container spacing={1}>
          {savedTracksList.map((item, index) => (
            <Grid item xs={12} lg={6} key={`${item.track?.id}${index}`}>
              <Box
                key={item.track.id}
                component={"div"}
                sx={{ width: "100%" }}
                ref={
                  index === savedTracksList.length - 1
                    ? lastTrackListItemRef
                    : null
                }
              >
                <ItemSongList
                  img={
                    item.track?.album?.images &&
                    item.track?.album?.images[0]?.url
                  }
                  title={item.track?.name}
                  subtitleArr={item.track.artists}
                  trackDuration={item.track.duration_ms}
                />
              </Box>
            </Grid>
          ))}
          {isSavedTracksListLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };

  const renderSkeleton = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <Grid item xs={12} lg={6} key={index}>
        <ItemSongListSkeleton key={index} />
      </Grid>
    ));
  };
  return <RootContainer>{renderRecentPlayedTracks()}</RootContainer>;
};

export default SavedTracks;
