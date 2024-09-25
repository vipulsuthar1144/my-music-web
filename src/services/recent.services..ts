import { apiInstance } from "@/config/axios.config";
import { IAritstSchema } from "@/schemas/artist.schema";

export const getRecentPlayedAPI = async (limit: number = 10) => {
  const { data } = await apiInstance.get(`me/player/recently-played?limit=${limit}`);
  return data;
};
