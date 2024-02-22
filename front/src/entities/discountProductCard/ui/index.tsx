import React, { FC } from 'react'
import styles from './DiscountProductCard.module.scss'
import Image from 'next/image'

interface Props {
id: number
name: string
image: string
gender: string
colors: string[]
price: number
oldPrice: number | null
}


const DiscountProductCard:FC<Props> = ({id, name, image, gender, colors, price, oldPrice}) => {
  return (
    <div className={styles.root} >
      <Image className={styles.image}  src={image} quality={100} width={440} height={445} alt='product image'/>
       <div className={styles.description} >
         <p className={styles.gender} >{gender === 'm'? 'МУЖСКИЕ': 'ЖЕНСКИЕ'}</p>
         <h3 className={styles.name} >{name}</h3>
         <ul className={styles.colors} >Цвета: 
          {colors.map((color, index ) => <li className={styles.color} style={{backgroundColor: color}} key={index} ></li>)}
         </ul>
         <div className={styles.prices} >
           <p className={styles.price} >{price} ₽</p>
           {oldPrice && <p className={styles.oldPrice} >{oldPrice} ₽</p>}
         </div>
       </div>

    </div>
  )
}

export default DiscountProductCard