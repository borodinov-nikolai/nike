import React from 'react'
import styles from './HomePage.module.scss'
import { Carousel } from '@/src/entities/carousel'
import { NewProductsSlider } from '@/src/widgets/newProductsSlider'
import { BestSellingSlider } from '@/src/widgets/bestSellingSlider'
import ArticlesSlider from '@/src/widgets/articlesSlider/ui'
import { DiscountsSlider } from '@/src/widgets/discountsSlider'
import { HeatOfTheSeason } from '@/src/entities/hitOfTheSeason'
import { NewCollections } from '@/src/entities/newCollections'
import AboutStore from './components/aboutStore'
import Advantages from './components/advantages'




const HomePage = () => {
  return (
    <main className={styles.root} >
          <section className={styles.carousel} ><Carousel/></section>
        <section className={styles.advantages} ><Advantages/></section>
        <section className={styles.newProductsSlider} ><NewProductsSlider/></section>
        <section className={styles.bestSellingSlider} ><BestSellingSlider/></section>
        <section className={styles.heatOfTheSeason} ><HeatOfTheSeason/></section>
        <section className={styles.articlesSlider} ><ArticlesSlider/></section>
        <section className={styles.discountsSlider} ><DiscountsSlider/></section>
        <section className={styles.newCollections} ><NewCollections/></section>
        <section className={styles.aboutStore} ><AboutStore/></section>
    </main>
  )
}

export default HomePage