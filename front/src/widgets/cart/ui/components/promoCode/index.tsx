'use client'
import React from 'react'
import styles from './PromoCode.module.scss'
import { useAppSelector } from '@/src/shared/store/hooks'


const PromoCode = () => {
  const {totalPrice} = useAppSelector((state)=> state.cart)
  return (
    <div>Итого: {totalPrice}</div>
  )
}

export default PromoCode