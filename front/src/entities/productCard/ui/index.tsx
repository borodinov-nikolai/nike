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
   
        
          <div className={styles.imageHolder} >
              <Image className={styles.image} src={images?.[0]} width={440} height={440} alt='product image'/>
          </div>
      
      
       <div className={styles.description} >
         <p className={styles.gender} >{gender === 'm'? 'мужские': 'женские'}</p>
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

export default ProductCard