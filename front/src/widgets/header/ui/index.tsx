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
            <li className={styles.links_item} ><Link href={"/about"}>О магазине</Link></li>
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
                <MobileNavabr isAuth={isSuccess} />
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
            <Link className={[styles.favorites, styles.icon].join(' ')} href={"/favorites"} >
                <GrFavorite/>
            </Link>
            </Badge>
            
             
             
              <Badge  color='rgba(255, 105, 21, 1)'count={totalCount} >
            <Link className={[styles.cart, styles.icon].join(' ')} href={'/cart'} >

            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
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