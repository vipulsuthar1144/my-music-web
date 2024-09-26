import { apiInstance } from "@/config/axios.config";
import { ICategorySchema } from "@/schemas/category.schema";

export const getSearchResultAPI = async (q: string) => {
  const type = ["artist", "album", "playlist", "track"];
  return await apiInstance.get(`search?q=${q}&type=${type.join(",")}`);
};
