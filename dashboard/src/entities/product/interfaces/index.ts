import { Category } from "../../category";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    categories: Category[]
    createdAt: string;
    updatedAt: string;
  }
  