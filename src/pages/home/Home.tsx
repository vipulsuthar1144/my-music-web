import ItemArtistAlbumsList from "@/pages/home/utilityComp/ItemArtistAlbumsList";
import { Box, Theme, Typography } from "@mui/material";
import ItemSongList from "./utilityComp/ItemSongList";
import { makeStyles } from "@mui/styles";
import { ContainerWithoutScrollbar, RootContainer } from "@components/styledComponents";
import { useNavigate } from "react-router-dom";
import { TitleSeeAll } from "@components/Image";

const Home: React.FC = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <RootContainer>
      <TitleSeeAll title="Play Recently" />
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList
            key={index}
            onClick={() => {
              navigate("details");
            }}
            isArtist={false}
          />
        ))}
      </ContainerWithoutScrollbar>
      <Typography variant="h3"> Tranding Songs </Typography>
      <ContainerWithoutScrollbar sx={{ scrollSnapType: "x mandatory" }} gap={"10px"}>
        <Box className={classes.trendingContainer}>
          <Typography variant="h4" my={"10px"}>
            Hindi
          </Typography>
          {/* <TitleSeeAll varient="h4" title="Hindi" style={{ paddingTop: "10px" }} /> */}
          {Array.from(Array(5)).map((_, index) => (
            <ItemSongList key={index} />
          ))}
        </Box>
        <Box className={classes.trendingContainer}>
          <Typography variant="h4" my={"10px"}>
            Punjabi
          </Typography>
          {Array.from(Array(5)).map((_, index) => (
            <ItemSongList key={index} />
          ))}
        </Box>
        <Box className={classes.trendingContainer}>
          <Typography variant="h4" my={"10px"}>
            English
          </Typography>
          {Array.from(Array(5)).map((_, index) => (
            <ItemSongList key={index} />
          ))}
        </Box>
      </ContainerWithoutScrollbar>
      <TitleSeeAll title="Trending Artists" />
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={true} />
        ))}
      </ContainerWithoutScrollbar>
      <TitleSeeAll title="Recommended for you" />
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={false} />
        ))}
      </ContainerWithoutScrollbar>
    </RootContainer>
  );
};

export default Home;

const useStyle = makeStyles((theme: Theme) => ({
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  trendingContainer: {
    flex: 1,
    minWidth: "330px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "10px",
    scrollSnapAlign: "start",
  },
}));
