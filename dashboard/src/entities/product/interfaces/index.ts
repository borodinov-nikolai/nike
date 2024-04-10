import { Category } from "../../category";
import { Color } from "../../color";
import { Material } from "../../material/interfaces";
import { Size } from "../../size";

export interface Product {
  id: number;
  name: string;
  gender: string;
  price: number;
  description: string;
  prewiev: string[];
  images: string[];
  categories: Category[];
  sizes: Size[];
  colors: Color[];
  materials: Material[];
  createdAt: string;
  updatedAt: string;
}
