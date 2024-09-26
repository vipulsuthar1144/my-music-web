import { IImage } from "./artist.schema";
import { IBaseSearch } from "./search.schema";

export interface ICategorySchema {
  categories?: IBaseSearch<ICategory>;
}

export interface ICategory {
  href?: string;
  id?: string;
  icons?: IImage[];
  name?: string;
  bgColor?: string;
}

export interface ICategorySlice {
  isLoading: boolean;
  categories: ICategory[];
  isError: boolean;
}
