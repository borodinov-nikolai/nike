'use client'
import React, { FC } from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { Color } from '../../productColor'
import { useRouter } from 'next/navigation'
import { AddToCartButton } from '@/src/features/addToCartButton'
import { Size } from '../../productSize'
import { imageUrl } from '../../image'
import { useAppSelector } from '@/src/shared/store/hooks'

interface Props {
id: number
name: string
image: string
gender: string
colors: Color[]
price: number
oldPrice: number | null
sizes: Size[]
}


const ProductCard:FC<Props> = ({id, name, image, gender, colors, price, oldPrice, sizes}) => {
  const {items} = useAppSelector((state)=> state.cart)
const router = useRouter()
  return (
    <div onClick={()=>router.push(`/product/${id}`)} className={styles.root} >
   
        
          <div className={styles.imageHolder} >
              <Image className={styles.image} src={imageUrl + image} width={440} height={440} alt='product image'/>
          </div>
      
       <div className={styles.description} >
         <p className={styles.gender} >{gender}</p>
         <h3 className={styles.name} >{name}</h3>
         <ul className={styles.colors} >Цвета: 
          {colors?.map(({id, value}) => <li className={styles.color} style={{backgroundColor: value}} key={id} ></li>)}
         </ul>
         <div className={styles.prices} >
           <p className={styles.price} >{price} ₽</p>
           {oldPrice && <p className={styles.oldPrice} >{oldPrice} ₽</p>}
         </div>
         <AddToCartButton product={{id, name, size: sizes[0]?.value, color: colors[0]?.value, image, count: 1, price} } > <button className={styles.toCartBtn} >
          {!items?.find((item)=> item.id === id) ?  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z" stroke="#211D19" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>:
<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z" stroke="#FF6915" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18L11 20L16 15" stroke="#FF6915" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}
</button></AddToCartButton>
       </div>

    </div>
  )
}

export default ProductCard