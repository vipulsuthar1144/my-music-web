import { IArtistSchema } from "@/schemas/artist.schema";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { img1, imgCar, imgDefaultArtist, imgDefaultSong, imgPlayBtnGreen } from "@assets/images";
import ImageComp, { ImageCompWithLoader } from "@components/Image";
import { SingleLineTypo, TwoLineTypo } from "@components/styledComponents";
import { Box, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type ItemArtistAlbumsListProps = {
  isArtist?: boolean;
  title?: string;
  subtitle?: string;
  subtitleArr?: IArtistSchema[];
  img?: string;
  onClick?: () => void;
};

const ItemArtistAlbumsList: React.FC<ItemArtistAlbumsListProps> = ({ title, subtitleArr, subtitle, img, isArtist = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyle();
  const navigate = useNavigate();
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
        <Box sx={{ position: "relative", aspectRatio: 1, width: "100%" }}>
          <ImageCompWithLoader
            img={img}
            alt={isArtist ? "artist" : "album"}
            errorImage={isArtist ? imgDefaultArtist : imgDefaultSong}
            style={{
              width: "100%",
              aspectRatio: 1,
              borderRadius: isArtist ? "50%" : "8px",
              boxShadow: "0px 10px 10px 2px rgba(0,0,0,0.2)",
            }}
          />
          <ImageComp
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
          <TwoLineTypo variant="subtitle1" color="text.primary" sx={{ textTransform: "capitalize" }}>
            {title}
          </TwoLineTypo>
          <TwoLineTypo variant="subtitle2" color="text.secondary" sx={{ textTransform: "capitalize" }}>
            {subtitle}
            {subtitleArr?.map((item) => (
              <Box
                component={"span"}
                onMouseDown={(event) => event.stopPropagation()}
                key={item.id}
                onClick={() => navigate(`/artist/${item.id}`)}
                sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline", color: "text.primary" } }}
              >
                {`, ${item.name}`}
              </Box>
            ))}
          </TwoLineTypo>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemArtistAlbumsList;

const useStyle = makeStyles({
  root: {
    flexShrink: 0,
    flexBasis: "200px",
    overflow: "hidden",
    boxSizing: "border-box",
    transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
    "&:hover": {
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
  },
});
