import ItemArtistAlbumsList from "@/pages/home/utilityComp/ItemArtistAlbumsList";
import { Box, Theme, Typography } from "@mui/material";
import ItemSongList from "./utilityComp/ItemSongList";
import { makeStyles } from "@mui/styles";
import { ContainerWithoutScrollbar, RootContainer } from "@components/styledComponents";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <RootContainer>
      <Typography variant="h3">Play Recentaly</Typography>
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList
            key={index}
            onClick={() => {
              navigate("search");
            }}
            isArtist={false}
          />
        ))}
      </ContainerWithoutScrollbar>
      <Typography variant="h3"> Tranding Songs </Typography>
      <ContainerWithoutScrollbar sx={{ scrollSnapType: "x mandatory" }} gap={"10px"}>
        <Box className={classes.trendingContainer}>
          <Typography variant="h4" mb={"10px"}>
            Hindi
          </Typography>
          {Array.from(Array(5)).map((_, index) => (
            <ItemSongList key={index} />
          ))}
        </Box>
        <Box className={classes.trendingContainer}>
          <Typography variant="h4" mb={"10px"}>
            Punjabi
          </Typography>
          {Array.from(Array(5)).map((_, index) => (
            <ItemSongList key={index} />
          ))}
        </Box>
        <Box className={classes.trendingContainer}>
          <Typography variant="h4" mb={"10px"}>
            English
          </Typography>
          {Array.from(Array(5)).map((_, index) => (
            <ItemSongList key={index} />
          ))}
        </Box>
      </ContainerWithoutScrollbar>
      <Typography variant="h3">Trending Artists</Typography>
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={true} />
        ))}
      </ContainerWithoutScrollbar>
      <Typography variant="h3">Recommended for you</Typography>
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
