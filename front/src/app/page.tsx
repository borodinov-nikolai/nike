import styles from './HomePage.module.scss'
import { Advantages } from '../entities/advantages';
import { NewProductsSlider } from '../widgets/newProductsSlider';
import { BestSellingSlider } from '../widgets/bestSellingSlider';
import { HeatOfTheSeason } from '../entities/hitOfTheSeason';
import { Carousel } from '../entities/carousel';
import ArticlesSlider from '../widgets/articlesSlider/ui';
import { DiscountsSlider } from '../widgets/discountsSlider';
import { NewCollections } from '../entities/newCollections';


export default  async function Home() {


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
        
    </main>
  );
}
