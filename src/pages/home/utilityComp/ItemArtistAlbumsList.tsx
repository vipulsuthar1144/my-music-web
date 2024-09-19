import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { img1, imgCar, imgPlayBtnGreen, imgSpotifyGreenSideBarLogo } from "@assets/images";
import ImageComp from "@components/Image";
import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Theme, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { showCustomToast } from "@utils/customToast";
import { globleDisplayFlexStyle, globleEaseInOutTransitionTime, globleTransitionTime } from "@utils/globleStyle";
import { useState } from "react";

type ItemArtistAlbumsListProps = {
  isArtist?: boolean;
};

const ItemArtistAlbumsList: React.FC<ItemArtistAlbumsListProps> = ({ isArtist = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyle();
  return (
    <Card
      className={classes.root}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <CardActionArea
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        sx={{ height: "100%", ...globleDisplayFlexStyle, justifyContent: "flex-start", alignItems: "flex-start", gap: "10px", padding: "10px" }}
      >
        <Box sx={{ position: "relative", aspectRatio: 1 }}>
          <CardMedia
            component="img"
            image={isArtist ? imgCar : img1}
            alt="green iguana"
            loading="lazy"
            sx={{
              objectFit: "fill",
              cursor: "pointer",
              aspectRatio: 1,
              // borderRadius: "8px",
              borderRadius: isArtist ? "50%" : "8px",
            }}
          />

          <ImageComp
            onClick={() => {
              // showCustomToast("Oops! LogOut Failed.", "error");
            }}
            img={imgPlayBtnGreen}
            alt="Spotify"
            style={{
              width: "40%",
              position: "absolute",
              bottom: isHovered ? 0 : -10,
              right: isHovered ? 0 : -10,
              transition: `opacity ${globleEaseInOutTransitionTime}, transform ${globleEaseInOutTransitionTime},right ${globleEaseInOutTransitionTime},bottom ${globleEaseInOutTransitionTime}`,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scale(1)" : "scale(0.5)",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Box>
        <CardContent sx={{ padding: 0, m: 0, width: "100%" }}>
          <Typography variant="subtitle1" color="text.primary">
            Arijit Singh
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Artist
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemArtistAlbumsList;

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    // width: "100%",
    // width: "150px",
    flexShrink: 0,
    flexBasis: "150px",
    // flexGrow: 1,
    overflow: "hidden",
    boxSizing: "border-box",

    transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
    borderRadius: "8px",
    "&:hover": {
      // transform: "scale(1.15)",
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
      // backgroundColor: "secondary.main",
    },
  },
}));
