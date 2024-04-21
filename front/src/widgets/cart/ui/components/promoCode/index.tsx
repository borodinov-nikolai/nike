'use client'
import React from 'react'
import styles from './PromoCode.module.scss'
import { useAppSelector } from '@/src/shared/store/hooks'
import Button from '@/src/shared/ui/button'


const PromoCode = () => {
  const {totalPrice} = useAppSelector((state)=> state.cart)
  return (
    <div className={styles.root} >
        <h3 className={styles.title} >Итого</h3>
        <div className={styles.priceHolder} >
          <div  className={styles.priceTitle} >Сумма</div>
          <div className={styles.separator} ></div>
          <div className={styles.price} >{totalPrice} ₽</div>
        </div>
        <div className={styles.promoCodeForm} >
          <div className={styles.inputHolder} >
            <input placeholder='Промокод' className={styles.input} type="text" />
          </div>
          <button className={styles.applyCodeBtn} >Применить промокод</button>
        </div>
        <div className={styles.buyBtn} ><Button>Оформить заказ</Button> </div>
    </div>
  )
}

export default PromoCode