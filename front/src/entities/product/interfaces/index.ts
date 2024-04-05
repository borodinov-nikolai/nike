import { Color } from "../../productColor"
import { Material } from "../../productMaterial"
import { Size } from "../../productSize"




export interface Product {
    id: number
    name: string
    gender: string
    price: number
    image: string
    colors: Color[]
    sizes: Size[]
    materials: Material[]
    createdAt: string
    updatedAt: string
  }