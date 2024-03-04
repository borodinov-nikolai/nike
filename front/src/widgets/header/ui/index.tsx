'use client'
import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Svg_search from '@/public/icons/search.svg'
import Svg_auth from '@/public/icons/auth.svg'
import Svg_profile from '@/public/icons/profile.svg'
import Svg_favorites from '@/public/icons/favorites.svg'
import Svg_cart from '@/public/icons/cart.svg'
import { useGetUserQuery } from '@/src/entities/user'
import MobileNavabr from './components/mobileNavbar'
import Drawer from '@/src/shared/ui/drawer'
import DropdownMenu from './components/dropdownMenu'








const Header = () => {
 

const {data: userData, isSuccess} = useGetUserQuery()



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
          <Link href={isSuccess? './account' : './authorization'} className={styles.auth}>
            {isSuccess && userData?.login}
              <Svg_auth />
                {isSuccess && <p className={styles.auth_text} > Личный кабинет</p>}
              {!isSuccess && <p className={styles.auth_text} >Вход \ Регистрация</p>}
            
          </Link>
        </div>
      </div>

      <div className={styles.menu} >
        <div className={styles.menu_inner + ' container'} >
            <div className={styles.burger} >
          <Drawer content={<MobileNavabr/>} >
          <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="36.0878" y1="1.96484" x2="11.0878" y2="1.96484" stroke="black" stroke-width="2"/>
<line x1="36.0878" y1="9.96484" x2="0.0877685" y2="9.96484" stroke="black" stroke-width="2"/>
</svg>

              <p className={styles.burger_text} >Меню</p>
          </Drawer>
            </div>
       
            <Link className={styles.logo} href={'/'}>
              <Image src={'/icons/logo.png'} width={59} height={19} alt='logo' />
            </Link>
        
          <ul className={styles.categories} >
            <li className={styles.catalog} >
            <Link className={styles.catalogLink}  href={'/catalog'} >
              <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="36.0878" y1="1.96484" x2="11.0878" y2="1.96484" stroke="black" stroke-width="2"/>
              <line x1="36.0878" y1="9.96484" x2="0.0877685" y2="9.96484" stroke="black" stroke-width="2"/>
              </svg>
                <p>Каталог</p>
            </Link>
              <div className={styles.dropdownMenu} ><DropdownMenu/></div>
              </li>
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