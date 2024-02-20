import React from 'react'
import styles from './NewProductsSlider.module.scss'




import { Slider } from '@/src/entities/slider';
import { ProductCard } from '@/src/entities/productCard';

const products = [
  {
    id: 1,
    name: 'Nike Air VaporMax 2023 Flyknit 1',
    images: ['/images/product_img_1.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "w",
    price: 7899,
    oldPrice: 11699
  },
  {
    id: 2,
    name: 'Nike Air VaporMax 2023 Flyknit 2',
    images: ['/images/product_img_2.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "m",
    price: 7899,
    oldPrice: 5999
  },
  {
    id: 3,
    name: 'Nike Air VaporMax 2023 Flyknit 3',
    images: ['/images/product_img_3.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "w",
    price: 6389,
    oldPrice: null
  },
  {
    id: 4,
    name: 'Nike Air VaporMax 2023 Flyknit 4',
    images: ['/images/product_img_1.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "w",
    price: 7899,
    oldPrice: 11699
  },
  {
    id: 5,
    name: 'Nike Air VaporMax 2023 Flyknit 5',
    images: ['/images/product_img_2.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "m",
    price: 7899,
    oldPrice: 5999
  },
  {
    id: 5,
    name: 'Nike Air VaporMax 2023 Flyknit 5',
    images: ['/images/product_img_2.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "m",
    price: 7899,
    oldPrice: 5999
  },
  {
    id: 5,
    name: 'Nike Air VaporMax 2023 Flyknit 5',
    images: ['/images/product_img_2.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "m",
    price: 7899,
    oldPrice: 5999
  },
  {
    id: 5,
    name: 'Nike Air VaporMax 2023 Flyknit 5',
    images: ['/images/product_img_2.png'],
    colors: ['gray', 'black', 'red', 'white'],
    gender: "m",
    price: 7899,
    oldPrice: 5999
  },

]

const productCards = products.map(({ id, name, images, colors, price, oldPrice, gender }) => {
  return <ProductCard
    key={id}
    id={id}
    name={name}
    images={images}
    colors={colors}
    gender={gender}
    price={price}
    oldPrice={oldPrice}
  />
})

const NewProductsSlider = () => {
  return (
    <div className={styles.root} >
      <div className='container' >

        <Slider title={'ПОСЛЕДНИЕ ПОСТУПЛЕНИЯ'} productCards={productCards} />

      </div>
    </div>
  )
}

export default NewProductsSlider