import { ICategorySchema } from "@/schemas/category.schema";
import { getAllCategoryAPI } from "@/services/category.services";
import getAsyncThunk from "../getAsyncThunk";

export const getAllCategories = getAsyncThunk<ICategorySchema, { offset: number }>("GET/allCategories", async ({ offset }, signal) => {
  const result = await getAllCategoryAPI(offset, signal);
  if (result.data) return result.data;
  return result;
});
