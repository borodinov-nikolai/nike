'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './Description.module.scss'
import { Product } from '@/src/entities/product'
import Button from '@/src/shared/ui/button'
import Counter from '@/src/shared/ui/counter'
import { IoBagOutline } from "react-icons/io5";
import { AddToCartButton } from '@/src/features/addToCartButton'

interface IProps {
  product: Product
}

const allSizes = ['36', '36,5', '37', '37,5', '38', '38,5', '39', '39,5', '40','40,5', '41', '41,5', '42', '42,5', '43', '43,5', '44,5']

const DescriptionInfo: FC<IProps> = ({ product }) => {
  const { id, name, colors, sizes, price, oldPrice, description } = product
  const [showDescription, setShowDescription] = useState<boolean>(false)
  const [activeSize, setActiveSize] = useState<string>()
  const [activeColor, setActiveColor] = useState<string>()
  const [count, setCount] = useState<number>(1)
  const availableSizes = sizes.map(({value})=> value)

  useEffect(()=> {
   setActiveSize(sizes[0].value)
   setActiveColor(colors[0].value)
    }, [sizes, colors])

  return (
    <div className={styles.root} >
      <h2 className={styles.name} >{name}</h2>
      <div className={styles.description} >
        <div style={{ height: showDescription ? 'max-content' : '100px' }} className={styles.descriptionText} >{description}</div>
        <p onClick={() => setShowDescription((prev) => !prev)} className={styles.descriptionShowMore} >Полное описание</p>
      </div>

      <div className={styles.colors} >
        <span>Цвета:</span>
        <ul className={styles.colorsList} >
          {colors?.map(({ id, value }) => <li onClick={()=> setActiveColor(value)} key={id} className={[styles.color, activeColor === value && styles.color__active].filter(Boolean).join(' ') } style={{ background: value }} ></li>)}
        </ul>
      </div>

      <div className={styles.sizes} >
        <div className={styles.sizesHeader} >
          <h3>Размер (EU):</h3>
          <p>Размерная таблица</p>
        </div>
        <ul className={styles.sizesList} >
           {allSizes.map((size)=> availableSizes.includes(size) ? <li onClick={()=> setActiveSize(size)} className={[styles.size, activeSize === size && styles.size__active].filter(Boolean).join(' ')} key={size} >{size}</li>: <li className={[styles.size, styles.size__disabled].join(' ')} key={size} >{size}</li> )}
        </ul>
      </div>

      <div className={styles.footer} >
        <div className={styles.prices} >
          {oldPrice && <div className={styles.oldPrice}>{oldPrice}₽</div>}
          <div className={styles.price} >{price}₽</div>
        </div>
        <div className={styles.counter} >
              <Counter onChange={(value)=> setCount(value)} />
        </div>
        <div className={styles.toCartBtn} ><AddToCartButton product={{id, name, size: activeSize, color:activeColor, price, count}} /></div>
      </div>
    </div>
  )
}

export default DescriptionInfo