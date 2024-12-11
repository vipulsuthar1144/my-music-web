import { IImage } from "./artist.schema";
import { IPagination } from "./search.schema";

export interface ICategorySchema {
  categories?: IPagination<ICategory>;
}

export interface ICategory {
  href?: string;
  id?: string;
  icons?: IImage[];
  name?: string;
}

export interface ICategorySlice {
  isCategoriesLoading: boolean;
  categories: ICategory[];
  isCategoriesError: boolean;
  hasMoreCategoriesData: boolean;
  categoriesOffset: number;
}
