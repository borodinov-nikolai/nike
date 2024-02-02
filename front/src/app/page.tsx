import Link from 'next/link';
import styles from './HomePage.module.scss'
import Button from '@/src/shared/ui/button/index';


export default function Home() {

  return (
    <main className={styles.root} >
        <Link className={styles.test}  href={'/test'}><Button>тест</Button></Link>

    </main>
  );
}
