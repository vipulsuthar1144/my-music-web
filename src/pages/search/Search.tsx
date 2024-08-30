import { Box, Grid, Typography } from "@mui/material";
import { globleDisplayFlexStyle, globleRemoveScrollbarStyle } from "@utils/globleStyle";
import ItemArtistAlbumsList from "../home/utilityComp/ItemArtistAlbumsList";
import TrackPlayer from "../player/TrackPlayer";
import ItemSongList from "../home/utilityComp/ItemSongList";
import ItemTopResult from "../home/utilityComp/ItemTopResult";

const Search = () => {
  return (
    // <Box component={"div"} sx={{ width: "100%", overflow: "hidden" }}>
    <Grid container spacing={{ xs: 0, sm: 1 }} p={"10px"} columns={{ xs: 4, sm: 12 }}>
      <Grid item xs={4} md={3} sx={{ my: "15px" }}>
        <Typography variant="h3" mb={"10px"}>
          Top Result
        </Typography>
        <ItemTopResult />
      </Grid>
      <Grid item xs={8} md={9} sx={{ my: "15px" }}>
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
      <Grid item xs={4} sm={12} sx={{ my: "15px" }}>
        <Typography variant="h3" mb={"10px"}>
          Albums
        </Typography>
        <Box component={"div"} width={"100%"} sx={{ display: "flex", justifyContent: "space-between", overflow: "auto", ...globleRemoveScrollbarStyle }}>
          {Array.from(Array(10)).map((_, index) => (
            <Box
              key={index}
              sx={{
                minWidth: `150px`,
                // maxWidth: `150px`,
              }}
            >
              <ItemArtistAlbumsList />
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={4} sm={12} sx={{ my: "15px" }}>
        <Typography variant="h3" mb={"10px"}>
          Playlist
        </Typography>
        <Box
          component={"div"}
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "auto",
            ...globleRemoveScrollbarStyle,
          }}
        >
          {Array.from(Array(10)).map((_, index) => (
            <Box
              key={index}
              sx={{
                minWidth: `150px`,
                // maxWidth: `150px`,
              }}
            >
              <ItemArtistAlbumsList />
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={4} sm={12} sx={{ my: "15px" }}>
        <Typography variant="h3" mb={"10px"}>
          Artist
        </Typography>
        <Box
          component={"div"}
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "auto",
            ...globleRemoveScrollbarStyle,
          }}
        >
          {Array.from(Array(10)).map((_, index) => (
            <Box
              key={index}
              sx={{
                minWidth: `150px`,
                // maxWidth: `150px`,
              }}
            >
              <ItemArtistAlbumsList isArtist={true} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default Search;
