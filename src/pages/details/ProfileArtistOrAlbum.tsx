import { img1 } from "@assets/images";
import ImageComp, { TitleSeeAll } from "@components/Image";
import { ContainerWithoutScrollbar, RootContainer } from "@components/styledComponents";
import { Box, Theme, Typography } from "@mui/material";
import { globleEaseInOutTransitionTime } from "@utils/globleStyle";
import ItemSongList from "../search/utilityComp/ItemSongList";
import ItemArtistAlbumsList from "../search/utilityComp/ItemArtistAlbumsList";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const ProfileArtistOrAlbum = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <RootContainer>
      <Box className={classes.details}>
        <ImageComp
          img={img1}
          alt={"album"}
          style={{
            flex: "0 0 200px",
            width: "200px",
            aspectRatio: 1,
            cursor: "pointer",
            borderRadius: "5px",
            boxShadow: "0px 10px 10px 5px rgba(0,0,0,0.4)",
            transition: `transform ${globleEaseInOutTransitionTime}`,
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography variant="h6" mb={"15px"}>
            Arijit Singh
          </Typography>
          <Typography variant="h1" style={{ fontSize: "clamp(2rem,0.5rem + 3vw, 3rem)", fontWeight: "900" }} mb={"15px"}>
            Arijit Singh Arijit singh
          </Typography>
          <Typography variant="h6" mb={"2px"}>
            Arijit Singh
          </Typography>
        </Box>
      </Box>
      <TitleSeeAll title="Popular" style={{ marginTop: "10px" }} onSeeAllClick={() => navigate("/section")} />
      <Box mx={"20px"}>
        {Array.from(Array(10)).map((_, __) => (
          <ItemSongList />
        ))}
      </Box>
      <TitleSeeAll title="More By ----" style={{ marginTop: "10px" }} />
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={false} />
        ))}
      </ContainerWithoutScrollbar>
      <TitleSeeAll title="Fans Also Like" />
      <ContainerWithoutScrollbar>
        {Array.from(Array(15)).map((_, index) => (
          <ItemArtistAlbumsList key={index} isArtist={true} />
        ))}
      </ContainerWithoutScrollbar>
    </RootContainer>
  );
};

export default ProfileArtistOrAlbum;

const useStyles = makeStyles((theme: Theme) => ({
  details: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "8px",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    gap: "30px",
    alignItems: "flex-end",
  },
}));
