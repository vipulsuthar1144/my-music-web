import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { imgCar, imgPlayBtnGreen, imgSpotifyGreenSideBarLogo } from "@assets/images";
import ImageComp from "@components/Image";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { showCustomToast } from "@utils/customToast";
import { globleDisplayFlexStyle, globleEaseInOutTransitionTime, globleTransitionTime } from "@utils/globleStyle";
import { useState } from "react";

const ItemArtistAlbumsList = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      sx={{
        width: "220px",
        maxHeight: "300px",
        overflow: "hidden",
        backgroundColor: "transparent",
        backgroundImage: "none",
        transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
        borderRadius: "8px",
        boxShadow: "none",
        "&:hover": {
          // transform: "scale(1.15)",
          backgroundImage: MGradientsDarkTheme.hoverBgColor,
          // backgroundColor: "secondary.main",
        },
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
            image={imgCar}
            alt="green iguana"
            sx={{
              objectFit: "fill",
              cursor: "pointer",
              aspectRatio: 1,
              // borderRadius: "8px",
              borderRadius: "50%",
            }}
          />

          <ImageComp
            onClick={() => {
              // showCustomToast("Oops! LogOut Failed.", "error");
            }}
            img={imgPlayBtnGreen}
            alt="Spotify"
            style={{
              zIndex: 10,
              width: "60px",
              position: "absolute",
              bottom: isHovered ? 10 : -10,
              right: isHovered ? 10 : -10,
              transition: `opacity ${globleEaseInOutTransitionTime}, transform ${globleEaseInOutTransitionTime},right ${globleEaseInOutTransitionTime},bottom ${globleEaseInOutTransitionTime}`,
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scale(1)" : "scale(0.5)",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Box>
        <CardContent sx={{ padding: 0, m: 0 }}>
          <Typography variant="h6" color="text.primary">
            Arijit Singh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artist
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemArtistAlbumsList;
