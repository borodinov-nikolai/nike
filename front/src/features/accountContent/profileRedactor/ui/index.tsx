'use client'
import React from 'react'
import styles from './ProfileRedactor.module.scss'


const ProfileRedactor = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title} >Редактировать профиль</h2>
      <div className={styles.content} ></div>
    </div>
  )
}

export default ProfileRedactor