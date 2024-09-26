import { apiInstance } from "@/config/axios.config";
import { ICategorySchema } from "@/schemas/category.schema";

export const getAllCategoryAPI = async () => {
  return await apiInstance.get(`browse/categories?limit=50&offset=0`);
};
