import { ICategory } from "@/schemas/category.schema";
import { imgDefaultLikedSong, imgDefaultSong } from "@assets/images";
import { RootContainer } from "@components/design/styledComponents";
import ItemCategoryList from "@components/ItemCategoryList";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyLibrary = () => {
  const navigate = useNavigate();
  const savedItems: ICategory[] = [
    {
      id: "/collection/tracks",
      name: "Liked Songs",
      icons: [{ url: imgDefaultLikedSong }],
    },
    {
      id: "/collection/albums",
      name: "Saved Albums",
      icons: [{ url: imgDefaultSong }],
    },
  ];
  return (
    <RootContainer style={{ gap: "20px" }}>
      <Typography variant="h3">Your Library</Typography>
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

export default MyLibrary;
