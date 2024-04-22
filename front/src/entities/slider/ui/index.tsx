'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import styles from './Slider.module.scss'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Grid } from 'swiper/modules';




const Slider = ({productCards, title}:{productCards: ReactNode[], title: string}) => {
  const [mdScreen, setMdScreen] = useState<boolean>(false)
const [swiper, setSwiper] = useState<SwiperClass>();

useEffect(()=>{

  const handleResize = ()=>{
    const width = window.innerWidth

    if(width >= 768){
    setMdScreen(true)
    } else {
      setMdScreen(false)
    }
  }

  handleResize()
  
  window.addEventListener('resize', handleResize)


  return ()=> {

    window.removeEventListener('resize', handleResize)
  }

},[])

return (
  <div className={styles.root} >
    <div className={styles.header} >
      <h2 className={styles.title}>{title}</h2>
        <div className={styles.arrows} >
    
        <div onClick={()=> swiper?.slidePrev()} className={styles.arrowLeft} >
          <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.363606 7.6364C0.0121308 7.28493 0.0121307 6.71508 0.363605 6.36361L6.09117 0.636042C6.44264 0.28457 7.01249 0.28457 7.36396 0.636042C7.71543 0.987514 7.71543 1.55736 7.36396 1.90883L2.27279 7L7.36396 12.0912C7.71543 12.4426 7.71543 13.0125 7.36396 13.364C7.01249 13.7154 6.44264 13.7154 6.09117 13.364L0.363606 7.6364ZM40 7.9L1 7.9L1 6.1L40 6.1L40 7.9Z" fill="black"/>
          </svg>
        </div>
        <div onClick={()=> swiper?.slideNext()} className={styles.arrowRight} >
          <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.363606 7.6364C0.0121308 7.28493 0.0121307 6.71508 0.363605 6.36361L6.09117 0.636042C6.44264 0.28457 7.01249 0.28457 7.36396 0.636042C7.71543 0.987514 7.71543 1.55736 7.36396 1.90883L2.27279 7L7.36396 12.0912C7.71543 12.4426 7.71543 13.0125 7.36396 13.364C7.01249 13.7154 6.44264 13.7154 6.09117 13.364L0.363606 7.6364ZM40 7.9L1 7.9L1 6.1L40 6.1L40 7.9Z" fill="black"/>
          </svg>
        </div>
        </div>

      </div>

  
        <Swiper
        modules={[Grid]}
        loop={true}
        slidesPerView={mdScreen ? 3 : 2}
        spaceBetween={ mdScreen ? 20 : 15}
        grid={{
          rows: mdScreen ? 1 : 2
        }}
        onSwiper={(swiperInstance)=>{
          setSwiper(swiperInstance);
  
        }}
        className={styles.slider}
        >
          {productCards.map((card, index)=>{
            return <SwiperSlide key={index} className={styles.slide} >
            {card}
            </SwiperSlide>
          })}
        </Swiper>
</div>
 
  )
}

export default Slider