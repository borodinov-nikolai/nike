'use client'
import React from 'react'
import styles from './MobileItemList.module.scss'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import Image from 'next/image'
import { imageUrl } from '@/src/entities/image'
import Counter from '@/src/shared/ui/counter'
import { IoTrashOutline } from 'react-icons/io5'
import { deleteCartItem, setCartItemCount } from '@/src/entities/cart/store/cartSlice'


const MobileItemList = ({}) => {
  const dispatch = useAppDispatch();
  const {items} = useAppSelector((state)=> state.cart)

  return (
    <div className={styles.root} >
     {items.length > 0 && <ul className={styles.itemList} >
           {items?.map(({id, name, price, image, size, color, count}, index)=> <li className={styles.item} key={index} >
                      <div className={styles.itemTop} >
                        <Image src={imageUrl + image} width={65} height={65} alt='cart item preview'/>
                        <div className={styles.itemInfo} >
                          <h3 className={styles.itemName} >{name}</h3>
                          <div className={styles.itemParameters} >
                        <div className={styles.ItemColor} >
                          <span>Цвет: </span>
                          <div style={{background: color}} className={styles.color} ></div>
                        </div>
                        <div className={styles.itemSize} >
                          <span>Размер: </span>
                          <div className={styles.size} >{size}</div>
                        </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.itemBottom} >
                        <div className={styles.ItemCounter} >
                          <Counter value={count} onChange={(count)=> dispatch(setCartItemCount({id, size: size!, color: color!, count}))}  />
                        </div>
                        <div className={styles.itemPrice} >{price} ₽</div>
                        <div onClick={()=> dispatch(deleteCartItem({id, size: size!, color:color!}))} className={styles.itemDeleteBtn}><IoTrashOutline/></div>
                      </div>
           </li> )}
      </ul>}
    </div>
  )
}

export default MobileItemList