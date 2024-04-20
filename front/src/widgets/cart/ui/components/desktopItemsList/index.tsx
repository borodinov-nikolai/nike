'use client'
import React, { useEffect, useState } from 'react'
import styles from './DesktopItemsList.module.scss'
import { useAppSelector } from '@/src/shared/store/hooks'
import Image from 'next/image'
import { imageUrl } from '@/src/entities/image'
import Counter from '@/src/shared/ui/counter'
import { ICartItem } from '@/src/entities/cart'
import qs from 'qs'

const ItemsList = () => {
  const { items } = useAppSelector((state) => state.cart)

  return (
    <div className={styles.root} >
      <table>
        <thead>
          <tr  className={styles.tableRow}>
            <th scope='col'>ТОВАР</th>
            <th scope='col'>ЦЕНА</th>
            <th scope='col'>КОЛЛИЧЕСТВО</th>
            <th scope='col'>СУММА</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {items?.map(({ id, name, price, color, count, image }) =>
            <tr className={styles.tableRow} key={id} >
              <td className={styles.tableCell} >
                <div> <Image src={imageUrl + image} width={90} height={90} alt="cart preview" />
                  <div><div className={styles.itemName} >{name}</div>
                    <div className={styles.itemParametrs} >
                      <div className={styles.itemColor} ></div>
                      <div className={styles.itemSize} ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td>{price}</td>
              <td> <Counter /> </td>
              <td>8000</td>
              <td>r</td>
            </tr>)}
        </tbody>
      </table>

    </div>
  )
}

export default ItemsList