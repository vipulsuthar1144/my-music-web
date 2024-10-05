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
  title?: string;
  type?: string;
  img?: string;
  onClick?: () => void;
};

const ItemArtistAlbumsList: React.FC<ItemArtistAlbumsListProps> = ({ title, type, img, isArtist = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyle();
  return (
    <Card
      className={classes.root}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
        borderRadius: "8px",
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
            // image={isArtist ? imgCar : img1}
            image={img}
            alt={isArtist ? "artist" : "album"}
            sx={{
              objectFit: "cover",
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
              bottom: isHovered ? 0 : -20,
              right: 0,
              transition: `opacity ${globleEaseInOutTransitionTime}, transform ${globleEaseInOutTransitionTime},bottom ${globleEaseInOutTransitionTime}`,
              opacity: isHovered ? 1 : 0,
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>
        <CardContent sx={{ padding: 0, m: 0, width: "100%" }}>
          <SingleLineTypo variant="subtitle1" color="text.primary">
            {title}
          </SingleLineTypo>
          <SingleLineTypo variant="subtitle2" color="text.secondary">
            {type}
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
    flexBasis: "180px",
    overflow: "hidden",
    boxSizing: "border-box",
    transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
    "&:hover": {
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
  },
});
