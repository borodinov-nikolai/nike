import React from 'react'
import styles from './HitOfTheSeason.module.scss'
import Image from 'next/image'
import Button from '@/src/shared/ui/button'
import { HiPlus } from "react-icons/hi2";

const HeatOfTheSeason = () => {
  return (
    <div>
        <div className={'container'} >
            <div className={styles.inner} >
                <div className={styles.description} >
                    <h2 className={styles.title} >ХИТ СЕЗОНА  ОТ NIKE <span></span></h2>
                    <p className={styles.name} >Nike Air Max Alpha  Trainer 5</p>
                    <p className={styles.price} >от <span>7 899 ₽</span></p>
                    <div className={styles.button} ><Button variant="secondary" >Подробнее</Button></div>
                </div>
                    <div className={styles.imageHolder} >
                        <Image src={'/images/hit_of_the_season_img.png'} width={1500} height={618} alt='hit of the season image' className={styles.image} />
                        <Image src={'/images/hit_of_the_season_img.png'} width={560} height={395} alt='hit of the season image' className={styles.image_m} />
                        <Image src={'/images/hit_of_the_season_logo.png'} width={294} height={105} alt='hit of the season image' className={styles.logo} />
                    </div>
                <div className={styles.info} >
                <div  className={styles.plusIcon} >
                    <HiPlus  />
                </div>
                <p className={styles.infoText} >Уникальная технология структуры стельки позволяет забыть про обувь на ноге.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeatOfTheSeason