import { Category } from "../../category";
import { ICharacteristic } from "../../characteristic";
import { Color } from "../../color";
import { Image } from "../../image";
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
  images: Image[];
  categories: Category[];
  characteristics: ICharacteristic[];
  sizes: Size[];
  colors: Color[];
  hit: boolean;
  new: boolean;
  discount: boolean;
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
  images?: number[];
  characteristics?: object[];
  categories?: number[];
  sizes?: number[];
  colors?: number[];
  materials?: number[];
  hit?: boolean;
  new?: boolean;
  discount?: boolean;

}

export interface IUpdateProductDto {
  name?: string;
  gender?: string;
  price?: number;
  oldPrice?: number;
  description: string;
  preview?: number;
  images?: number[];
  characteristics?: object[];
  categories?: number[];
  sizes?: number[];
  colors?: number[];
  materials?: number[];
  hit?: boolean;
  new?: boolean;
  discount?: boolean;
}