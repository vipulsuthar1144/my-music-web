import { ICategorySlice } from "@/schemas/category.schema";
import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../thunkServices/category.thunksevices";

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
        let offset = action.payload.categories?.offset ?? 0;
        let limit = action.payload.categories?.limit ?? 0;
        let total = action.payload.categories?.total ?? 0;

        state.isCategoriesLoading = false;
        state.categoriesOffset = offset + limit;
        state.hasMoreCategoriesData = total > offset + limit;

        if (offset == 0) {
          state.categories = [...(action.payload?.categories?.items ?? [])];
        } else {
          state.categories = [...state.categories, ...(action.payload?.categories?.items ?? [])];
        }
        if (offset >= 80) {
          state.hasMoreCategoriesData = false;
        }
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isCategoriesLoading = false;
        state.isCategoriesError = true;
      });
  },
});

export default categorySlice.reducer;
