import { Category } from "../../category";
import { Color } from "../../color";
import { Size } from "../../size";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categories: Category[];
  sizes: Size[];
  colors: Color[];
  createdAt: string;
  updatedAt: string;
}
