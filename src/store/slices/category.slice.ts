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
        const items = action.payload?.categories?.items;
        if (items && Array.isArray(items)) {
          state.hasMoreCategoriesData = (action.payload.categories?.total ?? 0) >= (action.payload.categories?.offset ?? 0);
          state.categoriesOffset += action.payload.categories?.limit ?? 0;
          state.categories = [...state.categories, ...items];
        }
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isCategoriesLoading = false;
        state.isCategoriesError = true;
      });
  },
});

export default categorySlice.reducer;
