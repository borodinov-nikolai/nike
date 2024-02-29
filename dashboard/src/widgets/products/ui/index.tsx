import React from 'react'
import styles from './Products.module.scss'
import { ProductsList } from '../../../features/productsList'
import { AddProduct } from '../../../features/addProduct'


const Products = () => {
  return (
    <div className={styles.root}>
      <div className={styles.addProduct} ><AddProduct/></div>
      <div className={styles.productsList} ><ProductsList/></div>
    </div>
  )
}

export default Products