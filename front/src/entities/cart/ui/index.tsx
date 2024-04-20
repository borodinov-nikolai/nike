'use client'
import { useAppDispatch} from '@/src/shared/store/hooks'
import React, { useEffect } from 'react'
import { setCartItems } from '../store/cartSlice'

export const LoadCart = () => {
    const dispatch = useAppDispatch()


useEffect(()=> {
    const savedItems = localStorage.getItem('cart')
   if(savedItems) {
    const parasedItems = JSON.parse(savedItems)
    dispatch(setCartItems(parasedItems))
   }
})

  return (
    <>
    </>
  )
}
