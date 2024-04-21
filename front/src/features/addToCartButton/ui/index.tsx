'use client'
import React, { FC, useEffect } from 'react'
import Button from '@/src/shared/ui/button'
import { IoBagOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { addCartItem } from '@/src/entities/cart/store/cartSlice'

interface IProps {
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


export const AddToCartButton: FC<IProps> = ({product}) => {
  const dispatch = useAppDispatch()

 

  const handleAddItem = ()=> {
    if(product.size && product.color) {
         dispatch(addCartItem(product))
    }
  }

  return (
    <Button onClick={handleAddItem} icon={<IoBagOutline />} >Добавить в корзину</Button>
  )
}
