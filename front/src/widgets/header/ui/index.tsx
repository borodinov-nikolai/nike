import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Svg_search from '@/public/icons/search.svg'
import Svg_auth from '@/public/icons/auth.svg'
import Svg_profile from '@/public/icons/profile.svg'
import Svg_favorites from '@/public/icons/favorites.svg'
import Svg_cart from '@/public/icons/cart.svg'

const Header = () => {
  return (
    <header className={styles.root} >
      <div className={styles.navbar}>
        <div className={styles.navbar_inner + ' container'} >
          <ul className={styles.links} >
            <li className={styles.links_item} ><Link href={"#"}>О магазине</Link></li>
            <li className={styles.links_item} ><Link href={"#"}>Наш блог</Link></li>
            <li className={styles.links_item} ><Link href={"#"}>Доставка</Link></li>
            <li className={styles.links_item} ><Link href={"#"}>Оплата</Link></li>
            <li className={styles.links_item} ><Link href={"#"}>Контакты</Link></li>
            <li className={styles.links_item} ><Link href={"#"}>Индивидуальный заказ</Link></li>
          </ul>
          <Link href={'./authorization'} className={styles.auth}>
         
              <Svg_auth />
              <p className={styles.auth_text} >Вход \ Регистрация</p>
            
          </Link>
        </div>
      </div>

      <div className={styles.menu} >
        <div className={styles.menu_inner + ' container'} >
          <div className={styles.burger} >
            <Image src={'/icons/burger.png'} width={36} height={8} alt='burger icon' />
            <p className={styles.burger_text} >Меню</p>
          </div>
       
            <Link className={styles.logo} href={'/'}>
              <Image src={'/icons/logo.png'} width={59} height={19} alt='logo' />
            </Link>
        
          <ul className={styles.categories} >
            <li>
              <Image src={'/icons/burger.png'} width={36} height={8} alt='burger icon' />
              Каталог</li>
            <li>Мужские</li>
            <li>Женские</li>
            <li>Детские</li>
            <li>Распродажа</li>
          </ul>
          <div className={styles.icons} >
            <div className={[styles.favorites, styles.icon].join(' ')} >
              <Svg_favorites />
            </div>
            <div className={[styles.cart, styles.icon].join(' ')} >
              <Svg_cart />
            </div>

            <div className={[styles.search, styles.icon].join(' ')} >
              <Svg_search />
              </div>

            <div className={[styles.profile, styles.icon].join(' ')} >
              <Svg_profile />
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header