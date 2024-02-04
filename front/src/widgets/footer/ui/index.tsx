import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Accordion from '@/src/shared/ui/accordion'


const Footer = () => {

  return (
    <footer className={styles.root} >
      <div className={[styles.inner, ' container'].join(" ")} >
        <div className={styles.blocks} >
          <div className={styles.startBlock} >
            <div className={styles.logo} >
              <Image className={styles.logo_logoImg} src={'/images/footer_logo.png'} width={90} height={31} quality={100}  alt='footer logo' />
              <div> 
               <Image className={styles.logo_swooshImg} src={'/images/swoosh.png'} width={114} height={18} quality={100}  alt='swoosh image' />
            <Image className={styles.logo_storeImg} src={'/images/store.png'} width={84} height={18} quality={100}  alt='store image' />
             </div>
              </div>
              <ul className={styles.socials} >
                  <li><Link href={'#'} ><Image src={'/icons/inst.png'} width={20} height={20} alt='socials icon' /> </Link></li>
                  <li><Link href={'#'} ><Image src={'/icons/vk.png'} width={23} height={12} alt='socials icon' /> </Link></li>
                  <li><Link href={'#'} ><Image src={'/icons/twit.png'} width={18} height={15} alt='socials icon' /> </Link></li>
              </ul>
              <p className={styles.social_info} >Instagram является запрещенной соц.сетью в РФ</p>
            
          </div>
          <div className={styles.centerBlock} >
            
            <div className={styles.accordion} >
              <Accordion title='ИНФОРМАЦИЯ  '>
                <ul className={styles.linksList} >
                  <li><Link href={'#'}>О магазине</Link></li>
                  <li><Link href={'#'}>Наш блог</Link></li>
                  <li><Link href={'#'}>Доставка</Link></li>
                  <li><Link href={'#'}>Оплата</Link></li>
                  <li><Link href={'#'}>Контакты</Link></li>
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion}>
              <Accordion title='ТОВАРЫ'>
                <ul className={styles.linksList} >
                  <li>Каталог</li>
                  <li>Мужские</li>
                  <li>Женские</li>
                  <li>Детские</li>
                  <li>Распродажа</li>
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion}>
              <Accordion title='МАГАЗИН'>
                <ul className={styles.linksList} >
                  <li>Личный кабинет</li>
                  <li>Избранное</li>
                  <li>Корзина</li>
                </ul>
              </Accordion>
            </div>
          </div>
          <div className={styles.endBlock} >
            <h2 className={styles.endBlock_title} >ПOДПИСКА НА НОВОСТИ</h2>
            <p className={styles.endBlock_description} >Подпишитесь на новости и скидки</p>
            <div className={styles.subscribe} >
              <form className={styles.subcibe_form}>
                <input placeholder='Email' type="text" />
                <p>Подписаться</p>
              </form>
              <p>Согласен с <Link href={'#'} >политикой конфиденциальности</Link></p>
            </div>
          </div>
        </div>
      </div>
         <div className={styles.politics} >
          <div className={styles.politics_inner + ' container'}>
          <p className={styles.politics_right} >© 2023 - Swoosh Store - Интернет-магазин ориганальных кроссовок</p>
          <Link href={'#'} className={styles.politics_confident} >Политика конфиденциальности</Link>
           <div className={styles.politics_author} >
            <p>Разработка сайта:</p>
            <p>Бородинов Николай</p>
           </div>
          </div>
         </div>
    </footer>
  )
}

export default Footer