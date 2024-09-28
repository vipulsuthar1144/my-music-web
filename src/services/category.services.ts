import { apiInstance } from "@/config/axios.config";

export const getAllCategoryAPI = async <T = void>(_: T, signal: AbortSignal) => {
  return await apiInstance.get(`browse/categories?limit=1&offset=0`, {
    signal: signal,
  });
};
