import { Category } from "../../category";
import { Size } from "../../size";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categories: Category[];
  sizes: Size[];
  createdAt: string;
  updatedAt: string;
}
