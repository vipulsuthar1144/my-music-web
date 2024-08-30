import ItemArtistAlbumsList from "@/pages/home/utilityComp/ItemArtistAlbumsList";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import ItemSongList from "./utilityComp/ItemSongList";
import { globleRemoveScrollbarStyle } from "@utils/globleStyle";

const Home: React.FC = () => {
  return (
    <Box component={"div"} sx={{ flex: 1 }}>
      <Grid container spacing={{ xs: 1 }} p={"10px"} columns={{ xs: 4, sm: 12 }}>
        <Grid item sx={{ my: "15px" }} xs={4} sm={12}>
          <Grid container>
            <Grid item sx={{ backgroundColor: "red" }}>
              <Typography variant="h3" mb={"10px"}>
                Tranding Songs
              </Typography>
            </Grid>

            <Grid item sx={{ backgroundColor: "blue" }} xs={10}>
              <Typography variant="h3" mb={"10px"}>
                Tranding Songs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ my: "15px" }}>
          <Typography variant="h3" mb={"10px"}>
            Trending Artists
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
        <Grid item sx={{ my: "15px" }}>
          <Typography variant="h3" mb={"10px"}>
            Recommended for you
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
      </Grid>
    </Box>
  );
};

export default Home;
