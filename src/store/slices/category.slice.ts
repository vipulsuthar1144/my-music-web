import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../thunkServices/category.thunksevices";
import { ICategorySlice } from "@/schemas/category.schema";
import { colorsArr } from "@/theme/utils/mColors";
import { getRandomColor } from "@utils/genaralFunctions";

const intialState: ICategorySlice = {
  isCategoriesLoading: false,
  isCategoriesError: false,
  categories: [],
  hasMoreCategoriesData: true,
  categoriesOffset: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isCategoriesLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isCategoriesLoading = false;
        state.categoriesOffset += action.payload.categories?.limit ?? 0;
        state.hasMoreCategoriesData = (action.payload.categories?.total ?? 0) >= state.categoriesOffset;
        state.categories = [...state.categories, ...(action.payload?.categories?.items ?? [])];
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isCategoriesLoading = false;
        state.isCategoriesError = true;
      });
  },
});

export default categorySlice.reducer;
