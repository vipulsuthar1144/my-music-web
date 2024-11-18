import { ICategory } from "@/schemas/category.schema";
import { imgDefaultSong } from "@assets/images";
import { RootContainer } from "@components/design/styledComponents";
import ItemCategoryList from "@components/ItemCategoryList";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyPlaylist = () => {
  const navigate = useNavigate();
  const savedItems: ICategory[] = [
    {
      id: "/saved/tracks",
      name: "Saved Tracks",
      icons: [{ url: imgDefaultSong }],
    },
    {
      id: "/user/me/saved-albums",
      name: "Saved Albums",
      icons: [{ url: imgDefaultSong }],
    },
  ];
  return (
    <RootContainer style={{ gap: "20px" }}>
      <Typography variant="h2">My Playlist</Typography>
      <Grid container spacing={2} padding={"0 10px"}>
        {savedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <ItemCategoryList
              key={index}
              onClick={() => item.id && navigate(item.id)}
              category={item}
            />
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
};

export default MyPlaylist;
