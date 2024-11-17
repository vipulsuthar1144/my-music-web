import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import { imgDefaultSong } from "@assets/images";
import AppLoader from "@components/AppLoader";
import { ImageCompWithLoader } from "@components/design/Image";
import { RootContainer } from "@components/design/styledComponents";
import FallbackError from "@components/FallbackError";
import ItemPlaylistTrackListSkeleton from "@components/skeletons/ItemPlaylistTrackLIst.skeleton";
import ItemSongListSkeleton from "@components/skeletons/ItemSongLIst.skeleton";
import { Box, Grid, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useIsSmallScreen } from "@utils/constants";
import { formatDate, getFollowers } from "@utils/genaralFunctions";
import ItemPlaylistTrackList from "../../components/ItemPlaylistTrackList";
import ItemSongList from "../../components/ItemSongList";
import usePlaylistDetailsController from "./PlaylistDetails.controller";
import DialogImagePreview from "@components/dialog/DialogImagePreview";

const PlaylistDetails = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  const {
    listenerGoToAlbumDetails,
    listenerGoToUserProfile,
    lastTrackListItemRef,
    listenerOpenDialogImagePreview,
    isPlaylistDataError,
    isPlaylistDataLoading,
    playlistData,
    bgColor,
    isPlaylistTrackListLoading,
    isPlaylistTrackListError,
    playlistTrackList,
  } = usePlaylistDetailsController();

  const renderPlaylistProfile = () => {
    if (isPlaylistDataLoading) return <AppLoader />;
    if (isPlaylistDataError)
      return <FallbackError type="something_went_wrong" />;
    if (!playlistData)
      return (
        <FallbackError message="Playlist Not Found" type="data_not_found" />
      );
    return (
      <>
        <Box
          className={classes.details}
          sx={{ backgroundColor: `${bgColor}`, zIndex: 1 }}
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
              (playlistData.images && playlistData?.images[0]?.url) || ""
            }
          />
          <ImageCompWithLoader
            img={(playlistData.images && playlistData?.images[0]?.url) || ""}
            alt={"album"}
            onClick={listenerOpenDialogImagePreview}
            errorImage={imgDefaultSong}
            style={{
              // flex: "0 0 200px",
              width: "250px",
              aspectRatio: 1,
              borderRadius: "12px",
              boxShadow: "0px 10px 10px 2px rgba(10,10,10,0.5)",
              transition: `transform ${globleEaseInOutTransitionTime}`,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Box sx={{ flex: "1 1 auto" }}>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {playlistData.type}
            </Typography>
            <Typography
              variant="h1"
              style={{
                fontSize: "clamp(2rem,1rem + 4vw, 4rem)",
                fontWeight: "bolder",
              }}
              mb={"15px"}
            >
              {playlistData?.name}
            </Typography>
            <Typography variant="subtitle1" mb={"5px"}>
              {playlistData?.description?.includes("href")
                ? ""
                : playlistData?.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              <Box
                component={"span"}
                onClick={() => {
                  listenerGoToUserProfile(playlistData.owner?.id);
                }}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "text.primary",
                  },
                }}
              >
                {`${playlistData.owner?.display_name}`}
              </Box>
              {` • ${playlistData.tracks?.total} songs • ${getFollowers(
                playlistData.followers?.total ?? 0,
                "saves"
              )}`}
            </Typography>
          </Box>
        </Box>
        {renderPlaylistTracks()}
      </>
    );
  };

  const renderPlaylistTracks = () => {
    if (
      (playlistTrackList.length == 0 &&
        !isPlaylistTrackListLoading &&
        !isPlaylistTrackListError) ||
      isPlaylistTrackListError
    )
      return;
    return (
      <>
        <Grid
          container
          spacing={1}
          mt={"20px"}
          mb={"10px"}
          paddingX={"10px"}
          sx={{ zIndex: 1 }}
        >
          {playlistTrackList?.map((item, index) => (
            <Grid item xs={12} key={`${item?.track?.id}${index}`}>
              <Box
                component={"div"}
                sx={{ width: "100%" }}
                ref={
                  index === playlistTrackList.length - 1
                    ? lastTrackListItemRef
                    : null
                }
              >
                {isSmallScreen ? (
                  <ItemSongList
                    img={
                      item?.track?.album?.images &&
                      item?.track?.album?.images[0]?.url
                    }
                    title={item?.track?.name}
                    track_no={index + 1}
                    subtitleArr={item?.track?.artists}
                    trackDuration={item?.track?.duration_ms}
                  />
                ) : (
                  <ItemPlaylistTrackList
                    img={
                      item?.track?.album?.images &&
                      item?.track?.album?.images[0]?.url
                    }
                    title={item?.track?.name}
                    track_no={index + 1}
                    albumName={item?.track?.album?.name}
                    onAlbumClick={() =>
                      listenerGoToAlbumDetails(item?.track?.album?.id)
                    }
                    dateAdded={formatDate(item.added_at ?? "")}
                    subtitleArr={item?.track?.artists}
                    trackDuration={item?.track?.duration_ms}
                  />
                )}
              </Box>
            </Grid>
          ))}
          {isPlaylistTrackListLoading && renderSkeleton()}
        </Grid>
      </>
    );
  };

  const renderSkeleton = () => {
    return Array.from({ length: 10 }, (_, index) => (
      <Grid item xs={12} key={index}>
        {isSmallScreen ? (
          <ItemSongListSkeleton haveIndex key={index} />
        ) : (
          <ItemPlaylistTrackListSkeleton key={index} />
        )}
      </Grid>
    ));
  };

  return (
    <RootContainer style={{ padding: 0 }}>
      {renderPlaylistProfile()}
    </RootContainer>
  );
};

export default PlaylistDetails;

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
