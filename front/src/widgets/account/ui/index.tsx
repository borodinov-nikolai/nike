'use client'
import React, { useEffect, useState } from 'react'
import styles from './Account.module.scss'
import MobileNavbar from './navbar'
import { ProfileRedactor } from '@/src/features/profileRedactor'
import { OrdersHistory } from '@/src/features/ordersHistory'
import { useGetUserQuery } from '@/src/entities/user'
import { SignOut } from '@/src/features/signOut'



const Account = () => {
  const {data:user} = useGetUserQuery()
  
  const [currentContent, setCurrentContent] = useState<string>();

useEffect(()=> {
  const savedValue = sessionStorage.getItem('accountNavbarValue');
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
            {currentContent === 'signOut' &&  <SignOut/>}
          </div>
        </div>
      </div>
    </div>
  )
 
  
}

export default Account