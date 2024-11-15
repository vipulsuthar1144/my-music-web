import { IArtistSchema } from "@/schemas/artist.schema";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { imgDefaultArtist, imgDefaultSong, imgPlay } from "@assets/images";
import ImageComp, { ImageCompWithLoader } from "@components/design/Image";
import { TwoLineTypo } from "@components/design/styledComponents";
import { Box, Card, CardActionArea, CardContent, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { globleEaseInOutTransitionTime } from "@/theme/utils/globalTransitions";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsSmallScreen } from "@utils/constants";

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
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  const navigate = useNavigate();
  const listenerGoToArtistDetails = (artistId?: string) => {
    artistId && navigate(`/artist/${artistId}`);
  };
  return (
    <Card
      className={classes.root}
      sx={{
        flexShrink: 0,
        flexBasis: isSmallScreen ? "160px" : "200px",
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
            img={imgPlay}
            alt="Spotify"
            style={{
              width: "45px",
              aspectRatio: 1,
              position: "absolute",
              bottom: isHovered ? 10 : -20,
              right: 10,
              transition: `opacity ${globleEaseInOutTransitionTime}, transform ${globleEaseInOutTransitionTime},bottom ${globleEaseInOutTransitionTime}`,
              opacity: isHovered ? 1 : 0,
              // "&:hover": {
              //   transform: "scale(1.1)",
              // },
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
              <React.Fragment key={item.id}>
                {` • `}
                <Box
                  component={"span"}
                  onMouseDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.stopPropagation();
                    listenerGoToArtistDetails(item.id);
                  }}
                  sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline", color: "text.primary" } }}
                >
                  {item.name}
                </Box>
              </React.Fragment>
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
    // width: "100%",
    height: "auto",
    overflow: "hidden",
    boxSizing: "border-box",
    transition: `transform ${globleEaseInOutTransitionTime},backgroundColor ${globleEaseInOutTransitionTime}`,
    "&:hover": {
      backgroundImage: MGradientsDarkTheme.hoverBgColor,
    },
  },
});
