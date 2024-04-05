import React from 'react'
import styles from './BestSellingSlider.module.scss';
import { ProductCard } from '@/src/entities/productCard';
import { Slider } from '@/src/entities/slider';

const products = [
    {
      id: 1,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_4.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "w",
      price: 7899,
      oldPrice: 11699
    },
    {
      id: 2,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_5.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "m",
      price: 7899,
      oldPrice: 5999
    },
    {
      id: 3,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_6.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "w",
      price: 6389,
      oldPrice: null
    },
    {
      id: 4,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_4.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "w",
      price: 7899,
      oldPrice: 11699
    },
    {
      id: 5,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_5.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "m",
      price: 7899,
      oldPrice: 5999
    },
    {
      id: 6,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_6.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "w",
      price: 6389,
      oldPrice: null
    },
    {
      id: 7,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_4.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
      gender: "w",
      price: 7899,
      oldPrice: 11699
    },
    {
      id: 8,
      name: 'Nike Air VaporMax 2023 Flyknit',
      images: ['/images/product_img_5.png'],
      colors: [{id: 1, name: 'Серый', value: 'gray'},{id: 2, name: 'Черный', value: 'black'}, {id: 3, name: 'Красный', value: 'red'}, {id: 4, name: 'Белый', value: 'white'}],
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
  }).reverse()
const BestSellingSlider = () => {
    return (
        <div className={styles.root} >
          <div className='container' >
    
            <Slider title={'САМЫЕ ПРОДАВАЕМЫЕ'} productCards={productCards} />
    
          </div>
        </div>
      )
}

export default BestSellingSlider