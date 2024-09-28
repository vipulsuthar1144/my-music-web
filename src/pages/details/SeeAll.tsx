import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { getAllCategories } from "@/store/thunkServices/category.thunksevices";
import { colorsArr } from "@/theme/utils/mColors";
import { RootContainer } from "@components/styledComponents";
import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import ItemCategoryList from "./ItemCategoryList";
import { getSearchResultAPI } from "@/services/search.services";
import { Console, log } from "console";
import { getSearchResult } from "@/store/thunkServices/search.thunksevices";
import { useSelector } from "react-redux";

const SeeAll = () => {
  const { isLoading, isError, categories } = useAppSelector((state) => state.category);
  const { searchText } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchdata();
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  const fetchdata = async () => {
    // console.log(searchText);
    if (searchText.length > 0) {
      dispatch(getSearchResult(searchText));
    }
  };

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
          categories.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ItemCategoryList category={item} />
            </Grid>
          ))}
      </Grid>
    );
  };
  return (
    <RootContainer>
      <Typography variant="h1" my={"20px"}>
        Browse All
      </Typography>
      <Button onClick={fetchdata}>fetch data</Button>
      {renderCategories()}
    </RootContainer>
  );
};

export default SeeAll;
