import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import { imgDefaultArtist, imgVerifiedTick } from "@assets/images";
import AppLoader from "@components/AppLoader";
import ImageComp, { ImageCompWithLoader } from "@components/design/Image";
import { RootContainer } from "@components/design/styledComponents";
import FallbackError from "@components/FallbackError";
import ItemArtistAlbumListSkeleton from "@components/skeletons/ItemArtistAlbumsList.skeleton";
import { Box, Grid, Typography } from "@mui/material";
import { getFollowers } from "@utils/genaralFunctions";
import ItemArtistAlbumsList from "../../components/ItemArtistAlbumsList";
import useUserProfileController from "./UserProfile.controller";
import DialogImagePreview from "@components/dialog/DialogImagePreview";

const UserProfile = () => {
  // const classes = useStyles();
  const {
    lastPlaylistListItemRef,
    listenerGoToPlaylistDetails,
    listenerOpenDialogImagePreview,
    // handleFollowUnfollowUserAPICall,
    // isfollowUnfollowUserLoading,
    isUserProfileError,
    isUserProfileLoading,
    userProfileData,
    bgColor,
    isUserPlaylistsError,
    isUserPlaylistsLoading,
    userPlaylists,
  } = useUserProfileController();

  const renderUserProfile = () => {
    if (isUserProfileLoading) return <AppLoader />;
    if (isUserProfileError)
      return <FallbackError type="something_went_wrong" />;
    if (!userProfileData && !isUserProfileError && !isUserProfileLoading)
      return <FallbackError message="User Not Found" type="data_not_found" />;

    return (
      <>
        <Box
          // className={classes.details}
          sx={{
            backgroundColor: `${bgColor}`,
            zIndex: 1,
            borderRadius: "12px 12px 0 0",
            padding: "30px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            // flex: 1,
            gap: "30px",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              background: `linear-gradient(to bottom, ${bgColor}b0  10%, ${bgColor}05  )`,
              position: "absolute",
              height: "100%",
              left: 0,
              bottom: "-100%",
              zIndex: -1,
            }}
          />
          <DialogImagePreview
            previewImageUrl={
              (userProfileData?.images && userProfileData?.images[1]?.url) || ""
            }
            isArtist
          />
          <ImageCompWithLoader
            img={userProfileData?.images && userProfileData?.images[1]?.url}
            alt={"user"}
            onClick={listenerOpenDialogImagePreview}
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
            <Box
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                gap: "3px",
                marginBottom: "10px",
              }}
            >
              {(userProfileData?.followers?.total ?? 0) > 1000 && (
                <ImageComp
                  img={imgVerifiedTick}
                  alt="Spotify"
                  style={{
                    width: "25px",
                    aspectRatio: 1,
                  }}
                />
              )}
              <Typography
                variant="h6"
                sx={{ textTransform: "capitalize", verticalAlign: "center" }}
              >
                Profile
              </Typography>
            </Box>

            <Typography
              variant="h1"
              style={{
                fontSize: "clamp(2rem,1rem + 4vw, 4rem)",
                fontWeight: "bolder",
              }}
              mb={"15px"}
            >
              {userProfileData?.display_name}
            </Typography>
            <Typography variant="h6" mb={"15px"}>
              {getFollowers(
                userProfileData?.followers?.total ?? 0,
                "followers"
              )}
            </Typography>
            {/* <LoaderButton
              // startIcon={<Download />}
              label={userProfileData?.isFollowed ? "Following" : "Follow"}
              loading={isfollowUnfollowUserLoading}
              variant={"outlined"}
              color={"primary"}
              style={{
                padding: "5px 18px",
                fontSize: "13px",
                borderRadius: "20px",
                borderColor: "text.primary",
                color: "text.primary",
                "&:hover": {
                  borderColor: "text.primary",
                  color: "text.primary",
                },
              }}
              onClick={handleFollowUnfollowUserAPICall}
            /> */}
          </Box>
        </Box>
        {renderPlaylistList()}
      </>
    );
  };
  const renderPlaylistList = () => {
    if (
      (userPlaylists.length == 0 &&
        !isUserPlaylistsError &&
        !isUserPlaylistsLoading) ||
      isUserPlaylistsError
    )
      return;
    return (
      <>
        <Typography
          variant="h3"
          sx={{ zIndex: 1, margin: "20px 0px 0px 10px" }}
        >
          Public Playlist
        </Typography>
        <Grid container spacing={1} px={"10px"} sx={{ zIndex: 1 }}>
          {userPlaylists?.map((item, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={1.5}
              key={`${item?.id}${index}`}
            >
              <Box
                component={"div"}
                sx={{ width: "100%" }}
                ref={
                  index === userPlaylists.length - 1
                    ? lastPlaylistListItemRef
                    : null
                }
              >
                <ItemArtistAlbumsList
                  onClick={() => listenerGoToPlaylistDetails(item?.id)}
                  subtitle={`${item?.description}`}
                  title={item?.name}
                  img={(item?.images && item?.images[0]?.url) || ""}
                />
              </Box>
            </Grid>
          ))}
          {isUserPlaylistsLoading && renderSkeleton()}
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
  return (
    <RootContainer style={{ padding: 0 }}>{renderUserProfile()}</RootContainer>
  );
};

export default UserProfile;

// const useStyles = makeStyles((_: Theme) => ({
//   details: {
//     borderRadius: "12px 12px 0 0",
//     padding: "30px",
//     display: "flex",
//     flexWrap: "wrap",
//     position: "relative",
//     // flex: 1,
//     gap: "30px",
//     alignItems: "flex-end",
//   },
// }));
