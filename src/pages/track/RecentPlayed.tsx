import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { RootContainer } from "@components/design/styledComponents";
import { Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useRecentPlayedController from "./RecentPlayed.controller";
import FallbackError from "@components/FallbackError";

const RecentPlayed = () => {
  const { isRecentPlayedTrackListError, isRecentPlayedTrackListLoading, recentPlayedTrackList } = useRecentPlayedController();

  const renderRecentPlayedTracks = () => {
    if (isRecentPlayedTrackListError) return <FallbackError type="something_went_wrong" />;
    if (recentPlayedTrackList.length == 0 && !isRecentPlayedTrackListError && !isRecentPlayedTrackListLoading) return <FallbackError message="No Recent Played Tracks Found" type="data_not_found" />;

    return (
      <>
        <Typography variant="h3">Recent Played Tracks</Typography>
        <Grid container spacing={1}>
          {recentPlayedTrackList.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={`${item.track?.id}${index}`}>
              <ItemArtistAlbumsList
                // onClick={() => listenerGoToArtistDetails(item.id)}
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
