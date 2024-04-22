'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import Svg_auth from '@/public/icons/auth.svg'
import { LuUser } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { useGetUserQuery } from '@/src/entities/user'
import MobileNavabr from './components/mobileNavbar'
import Drawer from '@/src/shared/ui/drawer'
import DropdownMenu from './components/dropdownMenu'
import { usePathname } from 'next/navigation'
import { Badge } from 'antd'
import { useAppSelector } from '@/src/shared/store/hooks'








const Header = () => {
 
const pathname = usePathname()
const [showDropdown, setShowDropdown] = useState<boolean>(false)
const {data: userData, isSuccess} = useGetUserQuery()
const dropdownMenu = useRef<HTMLDivElement>(null)
const {totalCount} = useAppSelector((state)=> state.cart)


useEffect(()=> {

  if(showDropdown && dropdownMenu.current) {
    dropdownMenu.current.style.height = '436px'
  }
  if(!showDropdown && dropdownMenu.current) {
    dropdownMenu.current.style.height = '0px'
  }
}, [showDropdown])



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
          <Link href={isSuccess? '/account' : '/authorization'} className={styles.auth}>
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
                <MobileNavabr/>
            </div>
       
            <Link className={styles.logo} href={'/'}>
              <Image src={'/icons/logo.png'} width={59} height={19} alt='logo' />
            </Link>
        
          <ul className={styles.categories} >
            <li onMouseEnter={()=>setShowDropdown(true)} onMouseLeave={()=>setShowDropdown(false)} className={styles.catalog} >
              <div className={styles.catalogMenu} >
                <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="36.0878" y1="1.96484" x2="11.0878" y2="1.96484" stroke="black" strokeWidth="2"/>
                <line x1="36.0878" y1="9.96484" x2="0.0877685" y2="9.96484" stroke="black" strokeWidth="2"/>
                </svg>
                  <p>Каталог</p>
              </div>         
              <div  ref={dropdownMenu} className={styles.dropdownMenu} ><DropdownMenu setShow={setShowDropdown}/></div>
              </li>
              <li>
            <Link className={styles.categoriesLink} href={pathname === '/catalog/man'? "#" : '/catalog/man'}>
                Мужские
            </Link>
                </li>
            <li>
            <Link passHref={true} className={styles.categoriesLink} href={pathname === '/catalog/wooman'? "#" : '/catalog/wooman'}>
              Женские
            </Link>
              </li>
            <li>
            <Link className={styles.categoriesLink} href={pathname === '/catalog/children'? "#" : '/catalog/children'}>
                Детские
            </Link>
            </li>
            <li>
            <Link className={styles.categoriesLink} href={pathname === '/catalog/sale'? "#" : '/catalog/sale'}>
                Распродажа
            </Link>
            </li>
          </ul>
          <div className={styles.icons} >
            
            <Badge color='rgba(255, 105, 21, 1)'  >
            <Link className={[styles.favorites, styles.icon].join(' ')} href={"#"} >
                <GrFavorite/>
            </Link>
            </Badge>
            
             
             
              <Badge  color='rgba(255, 105, 21, 1)'count={totalCount} >
            <Link className={[styles.cart, styles.icon].join(' ')} href={'/cart'} >

                <IoBagOutline />
            </Link>
              </Badge>
             

              
            <Link className={[styles.search, styles.icon].join(' ')} href={'#'} >
                <FiSearch />
            </Link>
                

            <Link  className={[styles.profile, styles.icon].join(' ')} href={'#'} >
             
                <LuUser />
             
            </Link>
          </div>
        </div>
      </div>


 
    </header>
  )
}

export default Header