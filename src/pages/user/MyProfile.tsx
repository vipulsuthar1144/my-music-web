import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import { imgDefaultArtist } from "@assets/images";
import AppLoader from "@components/AppLoader";
import { ImageCompWithLoader, TitleSeeAll } from "@components/design/Image";
import { ContainerWithoutScrollbar, RootContainer } from "@components/design/styledComponents";
import FallbackError from "@components/FallbackError";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import ItemSongListSkeleton from "@components/skeletons/ItemSongLIst.skeleton";
import { Box, Grid, Skeleton, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getFollowers } from "@utils/genaralFunctions";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import ItemSongList from "../../components/ItemSongList";
import useMyProfileController from "./MyProfile.controller";

const MyProfile = () => {
  const classes = useStyles();
  console.log("MY Profile Page");

  const {
    listenerSeeAllTopTracks,
    listenerSeeAllTopArtists,
    listenerSeeAllFollowedArtists,
    listenerGoToArtistDetails,
    isMyProfileLoading,
    isMyProfileError,
    myProfileData,
    bgColor,
    isMyProfileTopArtistListError,
    isMyProfileTopArtistListLoading,
    myProfileTopArtistList,
    isMyProfileTopTrackListError,
    isMyProfileTopTrackListLoading,
    myProfileTopTrackList,
    isFollowedArtistListError,
    isFollowedArtistListLoading,
    followedArtistList,
  } = useMyProfileController();

  const renderUserProfile = () => {
    if (isMyProfileLoading) return <AppLoader />;
    if (isMyProfileError) return <FallbackError type="something_went_wrong" />;
    if (!myProfileData && !isMyProfileError && !isMyProfileLoading) return <FallbackError message="Profile Not Found" type="data_not_found" />;
    return (
      <>
        <Box className={classes.details} sx={{ backgroundColor: `${bgColor}`, zIndex: 1 }}>
          <Box sx={{ width: "100%", background: `linear-gradient(to bottom, ${bgColor}b0  10%, ${bgColor}05  )`, position: "absolute", height: "100%", left: 0, bottom: "-100%", zIndex: -1 }} />
          <ImageCompWithLoader
            img={(myProfileData?.images && myProfileData?.images[0]?.url) || ""}
            alt={"user"}
            errorImage={imgDefaultArtist}
            style={{
              // flex: "0 0 200px",
              width: "250px",
              aspectRatio: 1,
              borderRadius: "50%",
              boxShadow: "0px 10px 10px 2px rgba(10,10,10,0.5)",
              transition: `transform ${globleEaseInOutTransitionTime}`,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Box sx={{ flex: "1 1 auto" }}>
            <Typography variant="h6" sx={{ textTransform: "capitalize", verticalAlign: "center" }}>
              Profile
            </Typography>
            <Typography variant="h1" style={{ fontSize: "clamp(2rem,1rem + 4vw, 4rem)", fontWeight: "bolder" }} mb={"15px"}>
              {myProfileData?.display_name}
            </Typography>
            <Typography variant="h6" mb={"2px"}>
              {`${myProfileData?.email}  ${getFollowers(myProfileData?.followers?.total ?? 0)}`}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: "10px", zIndex: 1 }}>
          {renderTopArtistList()}
          {renderTopTracks()}
          {renderFollowedArtistList()}
        </Box>
      </>
    );
  };
  const renderTopArtistList = () => {
    if (isMyProfileTopArtistListLoading) return renderSkeletons(true);
    if ((myProfileTopArtistList.length == 0 && !isMyProfileTopArtistListLoading && !isMyProfileTopArtistListError) || isMyProfileTopArtistListError) return;
    return (
      <>
        <TitleSeeAll
          title={`Top artists this month`}
          isSeeAllBtnVisible={myProfileTopArtistList.length == 10}
          onSeeAllClick={listenerSeeAllTopArtists}
          style={{ width: "100%", marginTop: "0px", padding: "10px 0", zIndex: 1 }}
        />
        <ContainerWithoutScrollbar>
          {myProfileTopArtistList?.map(
            (item, index) =>
              index < 10 && (
                <ItemArtistAlbumsList
                  key={item.id}
                  subtitle={item.type}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                  onClick={() => listenerGoToArtistDetails(item.id)}
                  isArtist={true}
                />
              )
          )}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  const renderTopTracks = () => {
    if (isMyProfileTopTrackListLoading) return renderSkeletons();
    if ((myProfileTopTrackList.length == 0 && !isMyProfileTopTrackListLoading && !isMyProfileTopTrackListError) || isMyProfileTopTrackListError) return;
    return (
      <>
        <TitleSeeAll
          title="Top tracks this month"
          isSeeAllBtnVisible={myProfileTopTrackList.length == 10}
          onSeeAllClick={listenerSeeAllTopTracks}
          style={{ width: "100%", marginTop: "20px", padding: "10px 0", zIndex: 1 }}
        />
        <Grid container spacing={1} mb={"10px"} paddingX={"10px"} sx={{ zIndex: 1 }}>
          {myProfileTopTrackList.map(
            (track, index) =>
              index < 10 && (
                <Grid item xs={12} lg={6} key={track.id}>
                  <ItemSongList
                    key={track.id}
                    img={track?.album?.images && track?.album?.images[0]?.url}
                    title={track?.name}
                    subtitle={``}
                    subtitleArr={track?.artists}
                    isAlbumArr={false}
                    trackDuration={track.duration_ms}
                  />
                </Grid>
              )
          )}
        </Grid>
      </>
    );
  };
  const renderFollowedArtistList = () => {
    if (isFollowedArtistListLoading) return renderSkeletons(true);
    if ((followedArtistList.length == 0 && !isFollowedArtistListLoading && !isFollowedArtistListError) || isFollowedArtistListError) return;
    return (
      <>
        <TitleSeeAll
          title={`Your Following`}
          isSeeAllBtnVisible={followedArtistList.length == 10}
          onSeeAllClick={listenerSeeAllFollowedArtists}
          style={{ width: "100%", marginTop: "0px", padding: " 20px 0 10px 0", zIndex: 1 }}
        />
        <ContainerWithoutScrollbar>
          {followedArtistList?.map(
            (item, index) =>
              index < 10 && (
                <ItemArtistAlbumsList
                  key={item.id}
                  subtitle={item.type}
                  title={item.name}
                  img={(item.images && item?.images[0]?.url) || ""}
                  onClick={() => listenerGoToArtistDetails(item.id)}
                  isArtist={true}
                />
              )
          )}
        </ContainerWithoutScrollbar>
      </>
    );
  };
  const renderSkeletons = (isArtist: boolean = false) => {
    if (!isArtist) {
      return (
        <>
          <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, margin: "10px 0 0 10px", zIndex: 1 }} />
          <Grid container spacing={1} mb={"10px"} paddingX={"10px"} sx={{ zIndex: 1 }}>
            {Array.from({ length: 10 }, (_, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <ItemSongListSkeleton key={index} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }

    return (
      <Box sx={{ width: "100%" }}>
        <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, marginBottom: "10px" }} />
        <ContainerWithoutScrollbar sx={{ gap: "10px" }}>
          {Array.from({ length: 10 }, (_, index) => (
            <ItemArtistAlbumListSkeleton isArtist={true} key={index} />
          ))}
        </ContainerWithoutScrollbar>
      </Box>
    );
  };
  return <RootContainer style={{ padding: 0 }}>{renderUserProfile()}</RootContainer>;
};

export default MyProfile;

const useStyles = makeStyles((_: Theme) => ({
  details: {
    borderRadius: "12px 12px 0 0",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    // flex: 1,
    gap: "30px",
    alignItems: "flex-end",
  },
}));
