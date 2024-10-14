import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/styledComponents";
import { Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../search/utilityComp/ItemArtistAlbumsList";
import useRecentPlayedController from "./RecentPlayed.controller";

const RecentPlayed = () => {
  const { isRecentPlayedTrackListError, isRecentPlayedTrackListLoading, recentPlayedTrackList } = useRecentPlayedController();

  const renderRecentPlayedTracks = () => {
    if (isRecentPlayedTrackListError) {
      return (
        <Typography variant="h3" sx={{ alignSelf: "center", margin: "auto" }}>
          Error Occurred while fetching Recent Played Tracks. Please try again later.
        </Typography>
      );
    }
    return (
      <>
        <Typography variant="h3" sx={{ margin: "10px" }}>
          Recent Played Tracks
        </Typography>
        <Grid container spacing={1}>
          {recentPlayedTrackList.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.track?.id}${index}`}>
              <ItemArtistAlbumsList
                // onClick={() => listenerGoToAlbumDetails(item.id)}
                subtitleArr={item.track?.artists}
                subtitle={"--"}
                title={item.track?.name}
                img={(item.track?.album?.images && item.track?.album?.images[0]?.url) || ""}
              />
            </Grid>
          ))}
          {isRecentPlayedTrackListLoading && renderSkeleton()}
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
  return <RootContainer>{renderRecentPlayedTracks()}</RootContainer>;
};

export default RecentPlayed;
