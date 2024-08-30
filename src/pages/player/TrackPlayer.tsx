import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { img1, imgCar, imgPlayBtnGreen, imgSpotifyGreenSideBarLogo } from "@assets/images";
import {
  StyledCloseIconFilled,
  StyledFavoriteIconOutlined,
  StyledNextIconFilled,
  StyledPauseIconOutlined,
  StyledPlayIconOutlined,
  StyledPreviousIconFilled,
  StyledRepeatIconFilled,
  StyledRepeatOnceIconFilled,
  StyledShuffleIconUnFilled,
} from "@assets/SVG";
import ImageComp from "@components/Image";
import { PauseCircleOutlineRounded, PlayCircleOutlineRounded, ShuffleRounded } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Slider, sliderClasses, Tooltip, Typography } from "@mui/material";
import { showCustomToast } from "@utils/customToast";
import { globleDisplayFlexStyle, globleEaseInOutTransitionTime, globleTransitionTime } from "@utils/globleStyle";
import { useState } from "react";

const TrackPlayer = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Box
      draggable
      component={"div"}
      onMouseDown={() => {
        setIsPressed(true);
      }}
      onMouseUp={() => {
        setIsPressed(false);
      }}
      onMouseLeave={() => {
        setIsPressed(false);
      }}
      sx={{
        width: "350px",
        height: "auto",
        // maxHeight: "400px",
        backgroundColor: "rgba(200,200,200,0.15)",
        // backgroundColor: "rgba(12,11,26,0.4)",
        // backgroundColor: "secondary.main",
        backdropFilter: "blur(20px)",
        borderRadius: "10px",
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 10,
        ...globleDisplayFlexStyle,
        justifyContent: "flex-start",
        gap: "20px",
        padding: "20px 40px",
        cursor: isPressed ? "grabbing" : "grab",
      }}
    >
      {/* cross icon */}
      <Box
        component={"div"}
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
        }}
      >
        <StyledCloseIconFilled />
      </Box>
      {/* drag indicator */}
      <Box
        component={"div"}
        sx={{
          width: 80,
          height: 3,
          backgroundColor: "text.secondary",
          borderRadius: "10px",
          opacity: 0.6,
        }}
      />
      {/* song image */}
      <ImageComp
        img={img1}
        alt="green iguana"
        style={{
          width: 150,
          height: 150,
          aspectRatio: 1,
          borderRadius: "10px",
        }}
      />

      {/* song details */}
      <Box component={"div"} sx={{ width: "100%", ...globleDisplayFlexStyle, flexDirection: "row", justifyContent: "space-between" }}>
        <Box component={"div"}>
          <Typography variant="subtitle1" color="text.primary">
            Piya Aye Na
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Aashique 2
          </Typography>
        </Box>

        <StyledFavoriteIconOutlined />
      </Box>
      <Box component={"div"} width={"100%"}>
        <Slider
          sx={{
            color: "success.main",
            padding: "5px 0px",

            [`& .${sliderClasses.rail}`]: {
              backgroundColor: "text.secondary",
            },
          }}
        />
        <Box component={"div"} sx={{ width: "100%", ...globleDisplayFlexStyle, flexDirection: "row", justifyContent: "space-between" }}>
          <Typography variant="body2" color="text.secondary">
            02:00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            03:10
          </Typography>
        </Box>
      </Box>

      <Box component={"div"} sx={{ width: "110%", ...globleDisplayFlexStyle, flexDirection: "row", justifyContent: "space-between", gap: "0px" }}>
        <StyledShuffleIconUnFilled />
        <StyledPreviousIconFilled />
        {/* <StyledPlayIconOutlined color="success" /> */}
        <StyledPauseIconOutlined />
        <StyledNextIconFilled />
        <StyledRepeatIconFilled />
        {/* <StyledRepeatOnceIconFilled /> */}
      </Box>
    </Box>
  );
};

export default TrackPlayer;
