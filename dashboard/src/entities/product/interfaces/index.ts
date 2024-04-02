import { Category } from "../../category";
import { Color } from "../../color";
import { Material } from "../../material/interfaces";
import { Size } from "../../size";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categories: Category[];
  sizes: Size[];
  colors: Color[];
  materials: Material[];
  createdAt: string;
  updatedAt: string;
}
