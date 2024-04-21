'use client'
import React from 'react'
import styles from './DesktopItemsList.module.scss'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import Image from 'next/image'
import { imageUrl } from '@/src/entities/image'
import Counter from '@/src/shared/ui/counter'
import { IoTrashOutline } from 'react-icons/io5'
import { deleteCartItem, setCartItemCount } from '@/src/entities/cart/store/cartSlice'

const ItemsList = () => {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.cart)
  return (
    <div className={styles.root} >
      {items.length > 0 && <table className={styles.table} >
        <thead>
          <tr className={styles.tableRow}>
            <th scope='col'><div>ТОВАР</div></th>
            <th scope='col'><div>ЦЕНА</div></th>
            <th scope='col'><div>КОЛЛИЧЕСТВО</div></th>
            <th scope='col'><div>СУММА</div></th>
            <th scope='col'><div></div></th>
          </tr>
        </thead>
        <tbody>
          {items?.map(({ id, name, price, color, count, image, size }) =>
            <tr className={styles.tableRow} key={id} >
              <td className={styles.productInfoCell} >
                <div className={styles.productInfo}>
                  <Image src={imageUrl + image} width={90} height={90} alt="cart preview" />
                  <div className={styles.itemDescription} ><div className={styles.itemName} >{name}</div>
                    <div className={styles.itemParametrs} >
                      <div className={styles.itemColor} ><span>Цвет: </span><div style={{ background: color }} className={styles.color} ></div></div>
                      <div className={styles.itemSize} ><span>Размер: </span><div>{size}</div></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className={styles.priceCell} ><div>{price} ₽</div></td>
              <td className={styles.counterCell} ><div><Counter onChange={(value)=> dispatch(setCartItemCount({id, count:value})) } value={count} /></div></td>
              <td className={styles.totalCell} ><div>{price * count} ₽</div></td>
              <td className={styles.deleteBtnCell} ><div onClick={()=> dispatch(deleteCartItem(id))} ><IoTrashOutline/></div></td>
            </tr>)}
        </tbody>
      </table>}

    </div>
  )
}

export default ItemsList