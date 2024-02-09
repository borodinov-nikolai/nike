import React from 'react'
import styles from './MobileNavbar.module.scss'
import Svg_AccauntProfile from '../../assets/icons/accaunt_profile.svg'
import Svg_AccauntOrders from '../../assets/icons/accaunt_orders.svg'
import Svg_AccauntAdress from '../../assets/icons/accaunt_adress.svg'
import Svg_AccauntPassword from '../../assets/icons/accaunt_password.svg'
import Svg_AccauntFavorites from '../../assets/icons/accaunt_favorites.svg'
import Svg_AccauntExit from '../../assets/icons/accaunt_exit.svg'

const MobileNavbar = () => {
  return (
    <nav className={styles.root} >
      <ul className={styles.list} >
        <li className={styles.item} >
          <Svg_AccauntProfile/>
          <p>РЕДАКТИРОВАТЬ ПРОФИЛЬ</p>
          </li>
        <li className={styles.item} >
          <Svg_AccauntOrders/>
          <p>МОИ ЗАКАЗЫ</p></li>
        <li className={styles.item} >
          <Svg_AccauntAdress/>
          <p>МОЙ АДРЕС</p>
          </li>
        <li className={styles.item} >
          <Svg_AccauntPassword/>
          <p>СМЕНИТЬ ПАРОЛЬ</p>
          </li>
        <li className={styles.item} >
          <Svg_AccauntFavorites/>
          <p>ИЗБРАННЫЕ ТОВАРЫ</p>
          </li>
        <li className={styles.item} >
          <Svg_AccauntExit/>
          <p>ВЫЙТИ ИЗ АККАУНТА</p>
          </li>
      
      </ul>
    </nav>
  )
}

export default MobileNavbar