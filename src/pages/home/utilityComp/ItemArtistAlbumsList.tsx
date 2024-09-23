import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { img1, imgCar, imgPlayBtnGreen } from "@assets/images";
import ImageComp from "@components/Image";
import { SingleLineTypo } from "@components/styledComponents";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";
import { useState } from "react";

type ItemArtistAlbumsListProps = {
  isArtist?: boolean;
  onClick?: () => void;
};

const ItemArtistAlbumsList: React.FC<ItemArtistAlbumsListProps> = ({ isArtist = false, onClick }) => {
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
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "10px", padding: "10px" }}
      >
        <Box sx={{ position: "relative", aspectRatio: 1 }}>
          <CardMedia
            component="img"
            image={isArtist ? imgCar : img1}
            alt={isArtist ? "artist" : "album"}
            sx={{
              objectFit: "fill",
              cursor: "pointer",
              aspectRatio: 1,
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
              width: "60px",
              aspectRatio: 1.06,
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
          <SingleLineTypo variant="subtitle1" color="text.primary">
            Arijit Singh Arijit Singh
          </SingleLineTypo>
          <SingleLineTypo variant="subtitle2" color="text.secondary">
            Artist
          </SingleLineTypo>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemArtistAlbumsList;

const useStyle = makeStyles({
  root: {
    flexShrink: 0,
    flexBasis: "150px",
    overflow: "hidden",
    boxSizing: "border-box",
    transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
    borderRadius: "8px",
    "&:hover": {
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
  },
});
