import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../thunkServices/category.thunksevices";
import { ICategorySlice } from "@/schemas/category.schema";
import { colorsArr } from "@/theme/utils/mColors";

const intialState: ICategorySlice = {
  isLoading: false,
  isError: false,
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        const items = action.payload?.categories?.items;
        if (items && Array.isArray(items)) {
          items?.forEach((items) => {
            items.bgColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
          });
          state.categories = [...state.categories, ...items];
        }
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default categorySlice.reducer;
