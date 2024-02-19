import React, { FC } from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

interface Props {
id: number
name: string
images: string[]
gender: string
colors: string[]
price: number
oldPrice: number | null
}


const ProductCard:FC<Props> = ({id, name, images, gender, colors, price, oldPrice}) => {
  return (
    <div className={styles.root} >
      <Image className={styles.image}  src={images?.[0]} width={440} height={445} alt='product image'/>
       <p className={styles.gender} >{gender}</p>
       <h3 className={styles.name} >{name}</h3>
       <ul className={styles.colors} >
        {colors.map((color, index ) => <li key={index} >{color}</li>)}
       </ul>
       <div className={styles.pricec} >
         <p className={styles.price} >{price} ₽</p>
         {oldPrice && <p className={styles.oldPrice} >{oldPrice} ₽</p>}
       </div>

    </div>
  )
}

export default ProductCard