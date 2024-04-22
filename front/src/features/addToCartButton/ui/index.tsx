'use client'
import React, { FC, ReactNode} from 'react'
import { useAppDispatch} from '@/src/shared/store/hooks'
import { addCartItem } from '@/src/entities/cart/store/cartSlice'

interface IProps {
  children: ReactNode,
    product: {
        id: number
        name: string,
        price: number,
        size: string | undefined,
        color: string | undefined,
        count: number
        image: string
    }

}


export const AddToCartButton: FC<IProps> = ({children, product}) => {
  const dispatch = useAppDispatch()

 

  const handleAddItem = ()=> {
    if(product.size && product.color) {
         dispatch(addCartItem(product))
    }
  }

  return (
    <div onClick={handleAddItem}>{children}</div>
  )
}
