import { Box, Grid, Skeleton } from "@mui/material";
import ItemSongListSkeleton from "./ItemSongLIst.skeleton";
import { ContainerWithoutScrollbar } from "@components/styledComponents";
import ItemArtistAlbumListSkeleton from "./ItemArtistAlbumsList.skeleton";

const SearchPageSkeleton = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px` }} />
      <Grid container spacing={1} mb={"10px"}>
        {Array.from({ length: 10 }, (_, index) => (
          <Grid item xs={12} lg={6} key={index}>
            <ItemSongListSkeleton key={index} />
          </Grid>
        ))}
      </Grid>
      <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, marginBottom: "10px" }} />
      <ContainerWithoutScrollbar sx={{ gap: "10px" }}>
        {Array.from({ length: 10 }, (_, index) => (
          // <Box width={"200px"}>
          <ItemArtistAlbumListSkeleton isArtist={true} key={index} />
          // </Box>
        ))}
      </ContainerWithoutScrollbar>
      <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, marginBottom: "10px" }} />
      <ContainerWithoutScrollbar sx={{ gap: "10px" }}>
        {Array.from({ length: 10 }, (_, index) => (
          <ItemArtistAlbumListSkeleton isArtist={false} key={index} />
        ))}
      </ContainerWithoutScrollbar>
      <Skeleton variant="text" animation="wave" sx={{ width: "20%", height: `50px`, marginBottom: "10px" }} />
      <ContainerWithoutScrollbar sx={{ gap: "10px" }}>
        {Array.from({ length: 10 }, (_, index) => (
          <ItemArtistAlbumListSkeleton isArtist={false} key={index} />
        ))}
      </ContainerWithoutScrollbar>
    </Box>
  );
};

export default SearchPageSkeleton;
