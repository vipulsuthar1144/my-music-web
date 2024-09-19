import { Box, Grid, Typography } from "@mui/material";
import ItemArtistAlbumsList from "../home/utilityComp/ItemArtistAlbumsList";
import TrackPlayer from "../player/TrackPlayer";
import ItemSongList from "../home/utilityComp/ItemSongList";
import ItemTopResult from "../home/utilityComp/ItemTopResult";
import { ContainerWithoutScrollbar, RootContainer } from "@components/styledComponents";

const Search = () => {
  return (
    <RootContainer>
      <Grid container spacing={{ xs: 0, sm: 2 }} mb={"10px"} p={"10px"} columns={{ xs: 4, sm: 12 }}>
        <Grid item xs={4} md={3}>
          <Typography variant="h3" mb={"10px"}>
            Top Result
          </Typography>
          <ItemTopResult />
        </Grid>
        <Grid item xs={8} md={9}>
          <Typography variant="h3" mb={"10px"}>
            Songs
          </Typography>
          <Grid container spacing={1}>
            {Array.from(Array(4)).map((_, index) => (
              <Grid item xs={12} key={index}>
                <ItemSongList />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h3">Album</Typography>
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={false} />
        ))}
      </ContainerWithoutScrollbar>
      <Typography variant="h3">Playlist</Typography>
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={false} />
        ))}
      </ContainerWithoutScrollbar>
      <Typography variant="h3">Artist</Typography>
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={true} />
        ))}
      </ContainerWithoutScrollbar>
    </RootContainer>
  );
};

export default Search;
