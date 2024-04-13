import { Category } from "../../category";
import { Color } from "../../color";
import { Material } from "../../material/interfaces";
import { Size } from "../../size";

export interface IProduct {
  id: number;
  name: string;
  gender: string;
  price: number;
  oldPrice?: number;
  description: string;
  prewiev: string;
  images: string[];
  categories: Category[];
  sizes: Size[];
  colors: Color[];
  preview: Preview,
  materials: Material[];
  createdAt: string;
  updatedAt: string;
}

type Preview = {
  id: number,
  name: string,
  createdAt: Date,
  updatedAt: Date
}

export interface ICreateProductDto {
  name: string;
  gender: string;
  price: number;
  oldPrice?: number;
  description: string;
  preview?: number;
  images?: string[];
  categories?: number[];
  sizes?: number[];
  colors?: number[];
  materials?: number[];
}

export interface IUpdateProductDto {
  name?: string;
  gender?: string;
  price?: number;
  oldPrice?: number;
  description: string;
  preview?: number;
  images?: string[];
  categories?: number[];
  sizes?: number[];
  colors?: number[];
  materials?: number[];
}