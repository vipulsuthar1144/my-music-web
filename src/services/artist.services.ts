import { apiInstance } from "@/config/axios.config";
import { IAritstSchema } from "@/schemas/artist.schema";

export const getArtistByIdAPI = async (id: string = "5wJ1H6ud777odtZl5gG507") => {
  const { data } = await apiInstance.get(`artists/${id}`);
  return data as IAritstSchema;
};
