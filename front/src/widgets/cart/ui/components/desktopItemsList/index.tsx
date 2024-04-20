'use client'
import React from 'react'
import styles from './DesktopItemsList.module.scss'
import { useAppSelector } from '@/src/shared/store/hooks'
import Image from 'next/image'
import { imageUrl } from '@/src/entities/image'
import Counter from '@/src/shared/ui/counter'

const ItemsList = () => {
  const { items } = useAppSelector((state) => state.cart)

  return (
    <div className={styles.root} >
      <table className={styles.table} >
        <thead>
          <tr className={styles.tableRow}>
            <th  className={styles.firstHeader} scope='col'><div >ТОВАР</div></th>
            <th scope='col'><div>ЦЕНА</div></th>
            <th scope='col'><div>КОЛЛИЧЕСТВО</div></th>
            <th scope='col'><div>СУММА</div></th>
            <th scope='col'><div></div></th>
          </tr>
        </thead>
        <tbody>
          {items?.map(({ id, name, price, color, count, image }) =>
            <tr className={styles.tableRow} key={id} >
              <td className={styles.firstCell} >
                <div className={styles.productInfo}>
                  <Image src={imageUrl + image} width={90} height={90} alt="cart preview" />
                  <div className={styles.itemDescription} ><div className={styles.itemName} >{name}</div>
                    <div className={styles.itemParametrs} >
                      <div className={styles.itemColor} ><span>Цвет: </span><div style={{ background: color }} className={styles.color} ></div></div>
                      <div className={styles.itemSize} ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td><div className={styles.price} >{price} ₽</div></td>
              <td><div className={styles.counter} ><Counter /></div></td>
              <td><div>8000 ₽</div></td>
              <td><div>r</div></td>
            </tr>)}
        </tbody>
      </table>

    </div>
  )
}

export default ItemsList