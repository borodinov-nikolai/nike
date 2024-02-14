'use client'
import React, { useState } from 'react'
import styles from './Account.module.scss'
import MobileNavbar from './mobileNavbar'
import DesktopNavbar from './desktopNavbar'
import { ProfileRedactor } from '@/src/features/accountContent/profileRedactor'
import { OrdersHistory } from '@/src/features/accountContent/ordersHistory'


const Account = () => {
  const [currentContent, setCurrentContent] = useState<string>()
  console.log(currentContent)
  return (
    <div className={styles.root} >
      <div className={"container"} >
        <h1  className={styles.title} >Личный кабинет</h1>
        <div className={styles.mainWrapper }>
          <div className={styles.navbarWrapper} >
            <h2 className={styles.navbarTitle} >Добро пожаловать, User</h2>
            <div className={styles.mobileNavbar} ><MobileNavbar current={currentContent} setContent={setCurrentContent} /></div>
            <div className={styles.desktopNavbar} ><DesktopNavbar setContent={setCurrentContent} /></div>
          </div>
          <div className={styles.content} >
            <div className={styles.contentInner} >
              <ProfileRedactor/>
            </div>
            <div className={styles.contentInner} >
              <OrdersHistory/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account