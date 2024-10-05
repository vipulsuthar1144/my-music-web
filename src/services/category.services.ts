import { apiInstance } from "@/config/axios.config";

export const getAllCategoryAPI = async (offset: number, signal: AbortSignal) => {
  return await apiInstance.get(`browse/categories?limit=20&offset=${offset}`, {
    signal: signal,
  });
};
