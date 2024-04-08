import { Color } from "../../productColor"
import { Material } from "../../productMaterial"
import { Size } from "../../productSize"




export interface Product {
    id: number
    name: string
    gender: string
    price: number
    images: string[]
    colors: Color[]
    sizes: Size[]
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