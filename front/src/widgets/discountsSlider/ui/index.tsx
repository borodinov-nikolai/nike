import React from 'react'
import styles from './DiscountsSlider.module.scss'
import { LongSlider } from '@/src/entities/longSlider'
import { DiscountProductCard } from '@/src/entities/discountProductCard'



const products = [
    {
        id: 1,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_1.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "w",
        price: 7899,
        oldPrice: 11699
      },
      {
        id: 2,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_2.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "m",
        price: 7899,
        oldPrice: 5999
      },
    {
        id: 1,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_1.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "w",
        price: 7899,
        oldPrice: 11699
      },
      {
        id: 2,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_2.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "m",
        price: 7899,
        oldPrice: 5999
      },
    {
        id: 1,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_1.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "w",
        price: 7899,
        oldPrice: 11699
      },
      {
        id: 2,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_2.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "m",
        price: 7899,
        oldPrice: 5999
      },
    {
        id: 1,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_1.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "w",
        price: 7899,
        oldPrice: 11699
      },
      {
        id: 2,
        name: 'Nike Air VaporMax 2023 Flyknit',
        image: '/images/discount_product_img_2.png',
        colors: ['gray', 'black', 'red', 'white'],
        gender: "m",
        price: 7899,
        oldPrice: 5999
      },
]

const cards = products.map(({id, name, image, colors, gender, price, oldPrice})=> {
    return <DiscountProductCard key={id} id={id} name={name} image={image} colors={colors} gender={gender} price={price} oldPrice={oldPrice}  />
})

const DiscountsSlider = () => {
  return (
    <div>
        <LongSlider cards={cards} title={'ТОВАРЫ СО СКИДКОЙ'} />
    </div>
  )
}

export default DiscountsSlider