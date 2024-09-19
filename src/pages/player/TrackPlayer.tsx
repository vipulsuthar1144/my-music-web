import { img1 } from "@assets/images";
import {
  StyledCloseIconFilled,
  StyledFavoriteIconOutlined,
  StyledNextIconFilled,
  StyledPauseIconOutlined,
  StyledPreviousIconFilled,
  StyledRepeatIconFilled,
  StyledShuffleIconUnFilled,
} from "@assets/SVG";
import ImageComp from "@components/Image";
import { Box, Slider, sliderClasses, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const TrackPlayer = () => {
  const [isPressed, setIsPressed] = useState(false);
  const classes = useStyle();

  return (
    <Box
      draggable
      component={"div"}
      className={classes.root}
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
        cursor: isPressed ? "grabbing" : "grab",
      }}
    >
      <Box className={classes.crossBtn}>
        <StyledCloseIconFilled />
      </Box>
      <Box className={classes.dragIndigator} />
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
      <Box className={classes.displayFlex}>
        <Box>
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
        <Box className={classes.displayFlex}>
          <Typography variant="body2" color="text.secondary">
            02:00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            03:10
          </Typography>
        </Box>
      </Box>

      <Box width={"110%"} className={classes.displayFlex}>
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

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    width: "350px",
    height: "auto",
    backgroundColor: "rgba(200,200,200,0.15)",
    backdropFilter: "blur(20px)",
    borderRadius: "10px",
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "20px",
    padding: "20px 40px",
  },
  crossBtn: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  dragIndigator: {
    width: 80,
    height: 3,
    backgroundColor: theme.palette.text.secondary,
    borderRadius: "10px",
    opacity: 0.6,
  },
  displayFlex: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
