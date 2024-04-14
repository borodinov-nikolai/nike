'use client'
import React, { FC, useState } from 'react'
import styles from './Characteristics.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ICharacteristic } from '@/src/entities/product/interfaces'

const tabs: Tab[] = [
  {id: 1, value: 'Описание'},
  {id: 2, value: 'Характеристики'},
  {id: 3, value: 'Отзывы'},
]

type Tab = {
  id: number
  value: string
}

interface IProps {
  description?: string
  characteristics?: ICharacteristic[]
}

const Characteristics: FC<IProps> = ({description, characteristics}) => {
  const [activeTab, setActivTab] = useState<string>('Описание')
  return (
    <div className={styles.root} >
       <div className={styles.mobileTabs} >
         <Swiper
         className={styles.swiper}
         slidesPerView={'auto'}
         spaceBetween={51}
         >
          {tabs.map(({id, value})=> <SwiperSlide key={id} onClick={()=>setActivTab(value)} className={[styles.tabsItem, activeTab === value && styles.tabsItem__active].filter(Boolean).join(' ')} > {value} </SwiperSlide> )}
         </Swiper>
       </div>
       <ul className={styles.decktopTabs} >
            {tabs.map(({id, value})=> <li onClick={()=>setActivTab(value)} className={[styles.tabsItem, activeTab === value && styles.tabsItem__active].filter(Boolean).join(' ')} key={id} >{value}</li>)}
       </ul>
        <div className={styles.content} >
           {activeTab === 'Описание' && <div className={styles.description} >
            {description}
            </div>}
            {activeTab === 'Характеристики' && <ul className={styles.characteristicsList} >
      
                {characteristics?.map(({id, name, value})=> <li className={styles.characteristicsItem} key={id} ><p>{name}</p><p className={styles.characteristicsDivider} ></p><p className={styles.characteristicValue} >{value}</p></li> )}
          
            </ul> }
            {activeTab === 'Отзывы' && <div>отзывы</div> }
        </div>
    </div>
  )
}

export default Characteristics