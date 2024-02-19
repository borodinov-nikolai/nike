import styles from './HomePage.module.scss'
import { Carousel } from '../features/carousel';
import { Advantages } from '../entities/advantages';
import { NewProductsSlider } from '../widgets/newProductsSlider';


export default  async function Home() {


  return (
    <main className={styles.root} >
        <section className={styles.carousel} ><Carousel/></section>
        <section className={styles.advantages} ><Advantages/></section>
        <section className={styles.newProductsSlider} ><NewProductsSlider/></section>
    </main>
  );
}
