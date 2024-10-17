import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import ItemSongListSkeleton from "@components/skeletons/ItemSongLIst.skeleton";
import { RootContainer } from "@components/design/styledComponents";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import ItemSongList from "../../components/ItemSongList";
import useSeeAllMyProfileController from "./SeeAllMyProfile.controller";
import FallbackError from "@components/FallbackError";

const SeeAllMyProfile = () => {
  const {
    listenerGoToArtistDetails,
    lastTopTrackListItemRef,
    lastTopArtistListItemRef,
    isTopTracksRoute,
    isTopArtistRoute,
    isFollowedArtistRoute,
    isMyProfileTopTrackListLoading,
    isMyProfileTopTrackListError,
    myProfileTopTrackList,
    isFollowedArtistListError,
    isFollowedArtistListLoading,
    followedArtistList,
    isMyProfileTopArtistListLoading,
    isMyProfileTopArtistListError,
    myProfileTopArtistList,
  } = useSeeAllMyProfileController();
  const renderData = () => {
    if (isTopTracksRoute()) {
      return renderTopTrackList();
    } else if (isTopArtistRoute()) {
      return renderTopArtistList();
    } else if (isFollowedArtistRoute()) {
      return renderFollowedArtistsList();
    }
  };
  const renderTopArtistList = () => {
    if (isMyProfileTopArtistListError) return <FallbackError type="something_went_wrong" />;
    if (myProfileTopArtistList.length == 0 && !isMyProfileTopArtistListError && !isMyProfileTopArtistListLoading) return <FallbackError type="data_not_found" />;
    return (
      <>
        <Typography variant="h3" my={"10px"}>
          Top artists this month
        </Typography>
        <Grid container spacing={1}>
          {myProfileTopArtistList.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={item.id}>
              <Box key={item.id} component={"div"} sx={{ width: "100%" }} ref={index === myProfileTopArtistList.length - 1 ? lastTopArtistListItemRef : null}>
                <ItemArtistAlbumsList
                  onClick={() => listenerGoToArtistDetails(item.id)}
                  key={item.id}
                  subtitle={item.type}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                  isArtist={true}
                />
              </Box>
            </Grid>
          ))}
          {isMyProfileTopArtistListLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };
  const renderTopTrackList = () => {
    if (isMyProfileTopTrackListError) return <FallbackError type="something_went_wrong" />;
    if (myProfileTopTrackList.length == 0 && !isMyProfileTopTrackListError && !isMyProfileTopTrackListLoading) return <FallbackError type="data_not_found" />;
    return (
      <>
        <Typography variant="h3" my={"10px"}>
          Top tracks this month
        </Typography>
        <Grid container spacing={1}>
          {myProfileTopTrackList.map((track, index) => (
            <Grid item xs={12} lg={6} key={track.id}>
              <Box key={track.id} component={"div"} sx={{ width: "100%" }} ref={index === myProfileTopTrackList.length - 1 ? lastTopTrackListItemRef : null}>
                <ItemSongList key={track.id} img={track?.album?.images && track?.album?.images[0]?.url} title={track?.name} subtitleArr={track.artists} trackDuration={track.duration_ms} />
              </Box>
            </Grid>
          ))}
          {isMyProfileTopTrackListLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };
  const renderFollowedArtistsList = () => {
    if (isFollowedArtistListLoading) return renderSkeleton();
    if (isFollowedArtistListError) return <FallbackError type="something_went_wrong" />;
    if (followedArtistList.length == 0 && !isFollowedArtistListError && !isFollowedArtistListLoading) return <FallbackError type="data_not_found" />;
    return (
      <>
        <Typography variant="h3" my={"10px"}>
          Followed Artists
        </Typography>
        <Grid container spacing={1}>
          {followedArtistList.map((item, _) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5}>
              <ItemArtistAlbumsList
                onClick={() => listenerGoToArtistDetails(item.id)}
                key={item.id}
                subtitle={item.type}
                title={item.name}
                img={(item.images && item?.images[0]?.url) || ""}
                isArtist={true}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  const renderSkeleton = () => {
    if (isTopTracksRoute()) {
      return Array.from({ length: 20 }, (_, index) => (
        <Grid item xs={12} lg={6} key={index}>
          <ItemSongListSkeleton key={index} />
        </Grid>
      ));
    } else if (isTopArtistRoute()) {
      return Array.from({ length: 20 }, (_, index) => (
        <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
          <ItemArtistAlbumListSkeleton isArtist={true} key={index} />
        </Grid>
      ));
    } else if (isFollowedArtistRoute()) {
      return (
        <>
          <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px` }} />
          <Grid container spacing={1}>
            {Array.from({ length: 20 }, (_, index) => (
              <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
                <ItemArtistAlbumListSkeleton isArtist={true} key={index} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
  };
  return <RootContainer>{renderData()}</RootContainer>;
};

export default SeeAllMyProfile;
