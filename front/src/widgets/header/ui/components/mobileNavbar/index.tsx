import React from 'react'
import styles from './MobileNavbar.module.scss'
import Accordion from '@/src/shared/ui/accordion'
import Link from 'next/link'


const MobileNavabr = () => {
  return (
    <div className={styles.root} >
      <div className={styles.catalog} >
      <h3 className={styles.title} >Каталог</h3>
          <div className={styles.catalogContent_wrapper} >
        <div className={styles.catalogContent} >
          <div className={styles.accordion} >
              <Accordion title={'Димесизон'}>
              <ul className={styles.accordionContent} >
                <li><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
              </ul>
              </Accordion>
              </div>
                      <div className={styles.accordion} >
              <Accordion title={'Лето'}>
              <ul className={styles.accordionContent} >
                <li><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
              </ul>
              </Accordion>
              </div>
                      <div className={styles.accordion} >
              <Accordion title={'Зима'}>
              <ul className={styles.accordionContent} >
                <li><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
              </ul>
              </Accordion>
              </div>
                      <div className={styles.accordion} >
              <Accordion title={'Модели'}>
              <ul className={styles.accordionContent} >
                <li><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                <li><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
              </ul>
              </Accordion>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.categories} >
        <ul className={styles.categoriesList} >
          <li><Link href={'/catalog/man'} >МУЖСКИЕ</Link></li>
          <li><Link href={'/catalog/woman'} >ЖЕНСКИЕ</Link></li>
          <li><Link href={'/catalog/children'} >ДЕТСКИЕ</Link></li>
          <li><Link href={'/catalog/all'} >РАСПРОДАЖА</Link></li>
        </ul>
      </div>
      <div className={styles.navigation} >
        <ul className={styles.navigationList} >
          <li><Link href={'/catalog/all'} >О магазине</Link></li>
          <li><Link href={'/catalog/all'} >Наш блог</Link></li>
          <li><Link href={'/catalog/all'} >Доставка</Link></li>
          <li><Link href={'/catalog/all'} >Оплата</Link></li>
          <li><Link href={'/catalog/all'} >Контакты</Link></li>
          <li><Link href={'/catalog/all'} >Индивидуальный заказ</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavabr