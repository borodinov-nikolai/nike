'useClient'
import React, { useEffect, useState } from 'react'
import styles from './MobileNavbar.module.scss'
import Accordion from '@/src/shared/ui/accordion'
import Link from 'next/link'
import Drawer from '@/src/shared/ui/drawer'
import { User } from '@/src/entities/user'





const MobileNavabr = ({isAuth}:{isAuth: boolean}) => {
  const [isOpen, setIsOpen] = useState<boolean>()



  useEffect(() => {

    !isOpen && setIsOpen(undefined)
  }, [isOpen])


  const handleClose = () => {
    setIsOpen(false)
  }

  return (

    <Drawer isOpen={isOpen} content={<div className={styles.root} >
      <div className={styles.catalog} >
        <h3 className={styles.title} >Каталог</h3>
        <div className={styles.catalogContent_wrapper} >
          <div className={styles.catalogContent} >
            <div className={styles.accordion} >
              <Accordion title={'Димесизон'}>
                <ul className={styles.accordionContent} >
                  <li onClick={handleClose} ><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion} >
              <Accordion title={'Лето'}>
                <ul className={styles.accordionContent} >
                  <li onClick={handleClose} ><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion} >
              <Accordion title={'Зима'}>
                <ul className={styles.accordionContent} >
                  <li onClick={handleClose} ><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion} >
              <Accordion title={'Модели'}>
                <ul className={styles.accordionContent} >
                  <li onClick={handleClose} ><Link href={'/catalog/all'}><p>Для бега</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Повседневная</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Треккинговая</p></Link></li>
                  <li onClick={handleClose} ><Link href={'/catalog/all'} ><p>Кожаные</p></Link></li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categories} >
        <ul className={styles.categoriesList} >
          <li onClick={handleClose} ><Link href={'/catalog/man'} >МУЖСКИЕ</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/wooman'} >ЖЕНСКИЕ</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/children'} >ДЕТСКИЕ</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/sail'} >РАСПРОДАЖА</Link></li>
        </ul>
      </div>
      <div className={styles.navigation} >
        <ul className={styles.navigationList} >
          <li onClick={handleClose} ><Link href={'/catalog/all'} >О магазине</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/all'} >Наш блог</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/all'} >Доставка</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/all'} >Оплата</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/all'} >Контакты</Link></li>
          <li onClick={handleClose} ><Link href={'/catalog/all'} >Индивидуальный заказ</Link></li>
          <li onClick={handleClose} ><Link href={!isAuth ? '/authorization': '/account'} >{!isAuth ? "Авторизация": 'Личный кабинет'}</Link></li>
        </ul>
      </div>

    </div>} >
      <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="36.0878" y1="1.96484" x2="11.0878" y2="1.96484" stroke="black" strokeWidth="2" />
        <line x1="36.0878" y1="9.96484" x2="0.0877685" y2="9.96484" stroke="black" strokeWidth="2" />
      </svg>

      <p className={styles.burger_text} >Меню</p>
    </Drawer>
  )
}

export default MobileNavabr