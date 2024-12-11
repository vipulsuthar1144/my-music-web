import {
  StyledCloseIconFilled,
  StyledFavoriteIcon,
  StyledFavoriteIconOutlined,
  StyledNextIconFilled,
  StyledPauseIconOutlined,
  StyledPlayIconOutlined,
  StyledPreviousIconFilled,
  StyledRepeatIconFilled,
  StyledRepeatOnceIconFilled,
  StyledShuffleIconUnFilled,
} from "@assets/SVG";
import { ImageCompWithLoader } from "@components/design/Image";
import { SingleLineTypo } from "@components/design/styledComponents";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import SliderAutoProgress from "./helper/SliderProgress";
import useTrackPlayerController from "./TrackPlayer.controller";

const TrackPlayer = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isDrag, _] = useState(true);
  const {
    listenerSetShuffleMode,
    listenerSetRepeatMode,
    listenerLikeUnlikeTrack,
    listenerResumePlayback,
    listenerPausePlayback,
    listenerSkipNext,
    listenerSkipPrevious,
    currentPlayingTrack,
  } = useTrackPlayerController();
  // const classes = useStyle();

  return (
    <Draggable
      allowAnyClick={false}
      disabled={!isDrag}
      bounds="parent" // Restrict dragging within the parent
      axis="both" // Can drag along both x and y axes
      // defaultPosition={{ x: 100, y: 100 }} // Set initial position
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onDrag={() => {
        setIsPressed(true);
      }}
      onStop={() => {
        setIsPressed(false);
      }}
    >
      <Box
        component={"div"}
        // className={classes.root}
        sx={{
          cursor: isPressed ? "grabbing" : "grab",
          width: "350px",
          height: "auto",
          backgroundColor: "rgba(200,200,200,0.15)",
          backdropFilter: "blur(20px)",
          borderRadius: "10px",
          position: "absolute",
          // position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 12,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "20px",
          padding: "20px 40px",
        }}
      >
        <Box
          // className={classes.crossBtn}
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
          }}
        >
          <StyledCloseIconFilled />
        </Box>
        <Box
          // className={classes.dragIndigator}
          sx={{
            width: 80,
            height: 3,
            backgroundColor: "text.secondary",
            borderRadius: "10px",
            opacity: 0.6,
          }}
        />
        {/* song image */}
        <ImageCompWithLoader
          img={
            currentPlayingTrack?.item?.album?.images
              ? currentPlayingTrack?.item?.album?.images[0].url
              : ""
          }
          alt={"track"}
          style={{
            width: "150px",
            // minWidth: "50px",
            cursor: "grab",
            aspectRatio: 1,
            borderRadius: "12px",
            boxShadow: "0px 10px 10px 2px rgba(0,0,0,0.2)",
          }}
        />

        {/* song details */}
        <Box
          // className={classes.displayFlex}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component={"div"} sx={{ flex: 1, overflow: "hidden" }}>
            <SingleLineTypo variant="subtitle1" color="text.primary">
              {currentPlayingTrack?.item?.name}
            </SingleLineTypo>
            <SingleLineTypo variant="subtitle2" color="text.secondary">
              {currentPlayingTrack?.item?.artists?.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Box
                    component={"span"}
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                      // isAlbumArr
                      //   ? listenerGoToAlbumDetails(item.id)
                      //   : listenerGoToArtistDetails(item.id);
                    }}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "text.primary",
                      },
                    }}
                  >
                    {/* {subtitleArr.length - 1 == index ? `${item.name}` : `${item.name} • `} */}
                    {item.name}
                  </Box>
                  {currentPlayingTrack?.item?.artists &&
                  currentPlayingTrack?.item?.artists?.length - 1 == index
                    ? ``
                    : ` • `}
                </React.Fragment>
              ))}
            </SingleLineTypo>
          </Box>

          {currentPlayingTrack?.item?.isLiked == true ? (
            <StyledFavoriteIcon
              onClick={listenerLikeUnlikeTrack}
              style={{ minWidth: "24px", color: "error.main" }}
            />
          ) : (
            <StyledFavoriteIconOutlined
              onClick={listenerLikeUnlikeTrack}
              style={{ minWidth: "24px" }}
            />
          )}
        </Box>

        <SliderAutoProgress
          duration={currentPlayingTrack?.item?.duration_ms ?? 0}
          progress={currentPlayingTrack?.progress_ms ?? 0}
          isPlaying={currentPlayingTrack?.is_playing ?? false}
        />

        <Box
          width={"110%"}
          // className={classes.displayFlex}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StyledShuffleIconUnFilled
            iconColor={
              currentPlayingTrack?.shuffle_state
                ? "primary.main"
                : "text.primary"
            }
            onClick={listenerSetShuffleMode}
          />
          <StyledPreviousIconFilled
            disabled={
              currentPlayingTrack?.actions?.disallows?.skipping_prev == true
            }
            onClick={listenerSkipPrevious}
          />

          {currentPlayingTrack?.is_playing == true ? (
            <StyledPauseIconOutlined
              disabled={
                currentPlayingTrack?.actions?.disallows?.pausing == true
              }
              onClick={listenerPausePlayback}
            />
          ) : (
            <StyledPlayIconOutlined
              disabled={
                currentPlayingTrack?.actions?.disallows?.resuming == true
              }
              onClick={listenerResumePlayback}
            />
          )}
          <StyledNextIconFilled
            disabled={
              currentPlayingTrack?.actions?.disallows?.skipping_next == true
            }
            onClick={listenerSkipNext}
          />
          {currentPlayingTrack?.repeat_state == "track" ? (
            <StyledRepeatOnceIconFilled
              onClick={listenerSetRepeatMode}
              iconColor="primary.main"
            />
          ) : (
            <StyledRepeatIconFilled
              onClick={listenerSetRepeatMode}
              iconColor={
                currentPlayingTrack?.repeat_state == "context"
                  ? "primary.main"
                  : "text.primary"
              }
            />
          )}
        </Box>
      </Box>
    </Draggable>
  );
};

export default TrackPlayer;

// const useStyle = makeStyles((theme: Theme) => ({
//   root: {
//     width: "350px",
//     height: "auto",
//     backgroundColor: "rgba(200,200,200,0.15)",
//     backdropFilter: "blur(20px)",
//     borderRadius: "10px",
//     position: "absolute",
//     // position: "fixed",
//     bottom: 20,
//     right: 20,
//     zIndex: 12,
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     gap: "20px",
//     padding: "20px 40px",
//   },
//   crossBtn: {
//     position: "absolute",
//     top: 5,
//     right: 5,
//   },
//   dragIndigator: {
//     width: 80,
//     height: 3,
//     backgroundColor: theme.palette.text.secondary,
//     borderRadius: "10px",
//     opacity: 0.6,
//   },
//   displayFlex: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// }));
