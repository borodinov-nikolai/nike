import { IImage } from "../../image"
import { Color } from "../../productColor"
import { Material } from "../../productMaterial"
import { Size } from "../../productSize"




export interface Product {
    id: number
    name: string
    gender: string
    price: number
    oldPrice: number
    images: IImage[]
    colors: Color[]
    sizes: Size[]
    preview: IImage
    description: string
    categories: Category[]
    materials: Material[]
    createdAt: string
    updatedAt: string
  }

  export interface Category {
    id: number
    name: string
    value: string
  }

  