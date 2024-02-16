'use client'
import React, { useState } from 'react'
import styles from './Carousel.module.scss'
import { Swiper, SwiperClass, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';



const Carousel = () => {

    
    let swiper : SwiperClass;
    const onAutoplayTimeLeft = (swiper: SwiperClass, timeLeft: number, percentage: number)=> {
        
    }
    const handleNext = ()=> {
        if(swiper) {
            swiper.slideNext()
        }
    }
    const handlePrev = ()=> {
        if(swiper) {
            swiper.slidePrev()
        }
    }

  return (
    <div    className={styles.root} >
        <Swiper  className={styles.swiper}
        modules={[Autoplay, Pagination]}
        navigation={true}
        onSwiper={(swiperInstance) => {
            swiper = swiperInstance;
          }}
        pagination={{
            clickable:true
        }}
        autoplay={{
            delay:2500,
            disableOnInteraction: false
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
            <SwiperSlide className={styles.slide} >slide1</SwiperSlide>
            <SwiperSlide className={styles.slide} >slide2</SwiperSlide>
        </Swiper>
        <button className={[styles.btn, styles.prevBtn].join(' ')} onClick={handlePrev}  >prev</button>
        <button className={[styles.btn, styles.nextBtn].join(' ')} onClick={handleNext}  >next</button>
    
           
    </div>
  )
}

export default Carousel