import { RootContainer } from "@components/styledComponents";
import { Grid } from "@mui/material";
import ItemArtistAlbumsList from "../home/utilityComp/ItemArtistAlbumsList";

const SeeAll = () => {
  return (
    <RootContainer>
      <Grid container spacing={2}>
        {Array.from({ length: 20 }, (_, index) => (
          <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}>
            <ItemArtistAlbumsList isArtist={false} />
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
};

export default SeeAll;
