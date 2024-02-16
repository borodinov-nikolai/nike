'use client'
import React, { useEffect, useState } from 'react'
import styles from './Account.module.scss'
import MobileNavbar from './navbar'
import { ProfileRedactor } from '@/src/features/accountContent/profileRedactor'
import { OrdersHistory } from '@/src/features/accountContent/ordersHistory'
import { useGetUserQuery } from '@/src/entities/user'



const Account = () => {
  const {data:user} = useGetUserQuery()
  
  const [currentContent, setCurrentContent] = useState<string>();

useEffect(()=> {
  const savedValue = localStorage.getItem('accountNavbarValue');
  if(savedValue) {
    setCurrentContent(savedValue)
  } else {
    setCurrentContent('profile')
  }

},[])
   
 
  return (
    <div className={styles.root} >
      <div className={"container"} >
        <h1  className={styles.title} >Личный кабинет</h1>
        <div className={styles.mainWrapper }>
          <div className={styles.navbarWrapper} >
            <h2 className={styles.navbarTitle} >Добро пожаловать, {user?.login}</h2>
            <div className={styles.navbar} ><MobileNavbar current={currentContent} setContent={setCurrentContent} /></div>
          </div>
          <div className={styles.content} >
            {currentContent === 'profile' && <ProfileRedactor/> }
            {currentContent === 'orders' &&  <OrdersHistory/>}
          </div>
        </div>
      </div>
    </div>
  )
 
  
}

export default Account