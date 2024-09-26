import { ICategorySchema } from "@/schemas/category.schema";
import { getAllCategoryAPI } from "@/services/category.services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk<ICategorySchema, void>("GET/allCategories", async () => {
  const result = await getAllCategoryAPI();
  if (result.data) return result.data as ICategorySchema;
  throw new Error("Failed to fetch categories");
});
