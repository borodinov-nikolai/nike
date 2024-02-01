import Link from 'next/link';
import styles from './Home.module.scss'
import '@/shared/styles/global.scss'
import Button from '@/shared/ui/button';


export default function Home() {

  return (
    <main className={styles.root} >
        <Link className={styles.test}  href={'/test'}><Button>тест</Button></Link>
    </main>
  );
}
