import React from 'react'
import styles from './Navbar.module.scss'
import Svg_AccauntProfile from '../../assets/icons/accaunt_profile.svg'
import Svg_AccauntOrders from '../../assets/icons/accaunt_orders.svg'
import Svg_AccauntAddress from '../../assets/icons/accaunt_adress.svg'
import Svg_AccauntPassword from '../../assets/icons/accaunt_password.svg'
import Svg_AccauntFavorites from '../../assets/icons/accaunt_favorites.svg'
import Svg_AccauntExit from '../../assets/icons/accaunt_exit.svg'



const navbarItmsList = [
  {
    id: 1,
    icon: <Svg_AccauntProfile />,
    title: "РЕДАКТИРОВАТЬ ПРОФИЛЬ",
    value: 'profile'
  },
  {
    id: 2,
    icon: <Svg_AccauntOrders />,
    title: "МОИ ЗАКАЗЫ",
    value: 'orders'
  },
  {
    id: 3,
    icon: <Svg_AccauntAddress />,
    title: "МОЙ АДРЕС",
    value: 'address'
  },
  {
    id: 4,
    icon: <Svg_AccauntPassword />,
    title: "СМЕНИТЬ ПАРОЛЬ",
    value: 'password'
  },
  {
    id: 5,
    icon: <Svg_AccauntFavorites />,
    title: "ИЗБРАННЫЕ ТОВАРЫ",
    value: 'favorites'
  },
  {
    id: 6,
    icon: <Svg_AccauntExit />,
    title: "ВЫЙТИ ИЗ АККАУНТА",
    value: 'signOut'
  },
]


const Navbar = ({setContent, current}:{setContent: React.Dispatch<React.SetStateAction<string | undefined>>, current: string | undefined}) => {


  const handleChange = (value: string)=> {
    setContent(value);
    localStorage.setItem('accountNavbarValue', value)
  }

  return (
    <nav className={styles.root} >
      <ul className={styles.list} >
        {navbarItmsList.map(({id, icon, title, value})=> {
            return <li onClick={()=>handleChange(value)} key={id} className={ [styles.item, current === value && styles.active ].filter(Boolean).join(' ')} >
            {icon}
            <p className={styles.text} >{title}</p>
            </li>
        })}
      
      
      </ul>
    </nav>
  )
}

export default Navbar