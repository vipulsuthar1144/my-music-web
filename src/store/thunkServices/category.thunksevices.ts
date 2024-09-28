import { ICategorySchema } from "@/schemas/category.schema";
import { getAllCategoryAPI } from "@/services/category.services";
import getAsyncThunk from "../getAsyncThunk";

export const getAllCategories = getAsyncThunk<ICategorySchema, void>("GET/allCategories", async (_, signal) => {
  const result = await getAllCategoryAPI(_, signal);
  if (result.data) return result.data;
  return result.data;
});
