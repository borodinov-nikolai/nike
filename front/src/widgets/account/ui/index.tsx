'use client'
import React from 'react'
import styles from './Account.module.scss'
import MobileNavbar from './mobileNavbar'


const Account = () => {
  return (
    <div className={styles.root} >
      <div className={"container"} >
        <h1  className={styles.title} >Личный кабинет</h1>
        <div className={styles.mainWrapper } >
          <div className={styles.navbarWrapper} >
            <h2 className={styles.navbarTitle} >Добро пожаловать, User</h2>
            <div className={styles.mobileNavbar} ><MobileNavbar/></div>
            <div className={styles.decktopNavbar} ></div>
          </div>
          <div className={styles.content} ></div>
        </div>
      </div>
    </div>
  )
}

export default Account