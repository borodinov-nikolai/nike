'use client'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import React, { useEffect } from 'react'
import { setCartItems } from '../store/cartSlice'

export const CartSaveAndLoad = () => {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.cart)

  useEffect(() => {
    const savedItems = localStorage.getItem('cart')
    if (savedItems) {
      const parasedItems = JSON.parse(savedItems)
      dispatch(setCartItems(parasedItems))
    }
  }, [])

  
  useEffect(() => {
    if (items.length > 0) {

      const storageItems = JSON.stringify(items)
      localStorage.setItem('cart', storageItems)
    } else localStorage.removeItem('cart')

  }, [items])

  return (
    <>
    </>
  )
}
