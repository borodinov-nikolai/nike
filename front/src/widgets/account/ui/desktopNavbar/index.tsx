'use client'
import React from 'react'
import styles from './DesktopNavbar.module.scss'
import Svg_AccauntProfile from '../../assets/icons/accaunt_profile.svg'
import Svg_AccauntOrders from '../../assets/icons/accaunt_orders.svg'
import Svg_AccauntAdress from '../../assets/icons/accaunt_adress.svg'
import Svg_AccauntPassword from '../../assets/icons/accaunt_password.svg'
import Svg_AccauntFavorites from '../../assets/icons/accaunt_favorites.svg'
import Svg_AccauntExit from '../../assets/icons/accaunt_exit.svg'
import { useSignOutMutation} from '../../api'


const navbarItmsList = [
  {
    id: 1,
    icon: <Svg_AccauntProfile />,
    title: "РЕДАКТИРОВАТЬ ПРОФИЛЬ"
  },
  {
    id: 2,
    icon: <Svg_AccauntOrders />,
    title: "МОИ ЗАКАЗЫ"
  },
  {
    id: 3,
    icon: <Svg_AccauntAdress />,
    title: "МОЙ АДРЕС"
  },
  {
    id: 4,
    icon: <Svg_AccauntPassword />,
    title: "СМЕНИТЬ ПАРОЛЬ"
  },
  {
    id: 5,
    icon: <Svg_AccauntFavorites />,
    title: "ИЗБРАННЫЕ ТОВАРЫ"
  },
  {
    id: 6,
    icon: <Svg_AccauntExit />,
    title: "ВЫЙТИ ИЗ АККАУНТА"
  },

]

const DesktopNavbar = () => {
  const [signOut] = useSignOutMutation()



  const handleSignout = async () => {
    signOut()
    localStorage.removeItem('jwt')
    console.log('click')
    window.location.href = '/'
  }

  return (
    <nav className={styles.root} >
      <ul className={styles.list}>
        {navbarItmsList.map(({ id, icon, title }) => {

          
          return (title === "ВЫЙТИ ИЗ АККАУНТА" ? <li onClick={() => handleSignout()} key={id} className={styles.item} >
            {icon}
            <p>{title}</p>
          </li>
            :
            <li key={id} className={styles.item} >
              {icon}
              <p>{title}</p>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default DesktopNavbar