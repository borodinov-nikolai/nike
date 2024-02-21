import React, { FC } from 'react'
import styles from './ArticleCard.module.scss'
import { HiPlus } from "react-icons/hi2";
interface Props {
   id: number
   type: string
   title: string
   description: string
   image: string
   date: string
}


const ArticleCard:FC<Props> = ({id, type, title, description, image, date}) => {
  return (
    <div  style={{background: `url(${image})`}} className={styles.root}  >
      <p className={styles.type} >{type}</p>
      <h3 className={styles.title} >{title}</h3>
      <div className={styles.description} >
           <HiPlus className={styles.plusIcon} />
        <p className={styles.descriptionText} >{description}</p>
      </div>
      <div className={styles.footer} >
        <p className={styles.more} >Подробнее</p>
        <p className={styles.date} >{date}</p>
      </div>
    </div>
  )
}

export default ArticleCard