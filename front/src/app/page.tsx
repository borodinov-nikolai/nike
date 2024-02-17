import Link from 'next/link';
import styles from './HomePage.module.scss'
import Button from '@/src/shared/ui/button/index';
import { Carousel } from '../features/homePage/carousel';
import { Advantages } from '../features/homePage/advantages';


export default  async function Home() {


  return (
    <div className={styles.root} >
        <div className={styles.carousel} ><Carousel/></div>
        <div className={styles.advantages} ><Advantages/></div>
    </div>
  );
}
