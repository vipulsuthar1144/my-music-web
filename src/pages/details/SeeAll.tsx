import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllCategories } from "@/store/thunkServices/category.thunksevices";
import { colorsArr } from "@/theme/utils/mColors";
import { RootContainer } from "@components/styledComponents";
import { Grid, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import ItemCategoryList from "./ItemCategoryList";
import { getSearchResultAPI } from "@/services/search.services";

const SeeAll = () => {
  const { isLoading, isError, categories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const data = await getSearchResultAPI("arijit singh");
    console.log(data);
  };

  useEffect(() => {
    try {
      fetchData();
      // if (categories.length == 0) {
      //   dispatch(getAllCategories());
      // }
    } catch (error) {
      console.log("failed to get Categories");
    }
  }, []);

  const renderCategories = () => {
    if (isLoading) {
      return (
        <Grid container spacing={2}>
          {Array.from({ length: 20 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton variant="rectangular" animation="wave" sx={{ borderRadius: "8px" }} width={"100%"} height={"200px"} />
            </Grid>
          ))}
        </Grid>
      );
    }
    return (
      <Grid container spacing={2}>
        {categories?.length > 0 &&
          categories.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ItemCategoryList category={item} />
            </Grid>
          ))}
      </Grid>
    );
  };
  return (
    <RootContainer>
      <Typography variant="h2" mb={"20px"}>
        Browse All
      </Typography>
      {renderCategories()}
    </RootContainer>
  );
};

export default SeeAll;
