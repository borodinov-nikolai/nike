'use client'
import React from 'react'
import styles from './Carousel.module.scss'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Button from '@/src/shared/ui/button';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";





import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {


    let swiper: SwiperClass;
    const onAutoplayTimeLeft = (swiper: SwiperClass, timeLeft: number, percentage: number) => {

    }
    const handleNext = () => {
        if (swiper) {
            swiper.slideNext()
        }
    }
    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev()
        }
    }

    return (
        <div className={styles.root} >
            <div className='container' >
                <Swiper className={styles.swiper}
                    modules={[Autoplay, Pagination]}
                    navigation={true}
                    onSwiper={(swiperInstance) => {
                        swiper = swiperInstance;
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    speed={2000}
                    loop={true}
                    spaceBetween={40}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                >
                    <SwiperSlide className={styles.slide} >
                        <h2 className={styles.title} >AIR MAX ——— FlYKNIT RACER</h2>
                        <p className={styles.text} >Усиленный носок и прочный пластиковый каркас. Инновационная технология раскрывается через перфорированную стельку</p>
                        <div  className={styles.image_holder}>
                            <Image className={[styles.image, styles.image_lg].join(' ')} src={'/images/carousel_image.png'} width={1000} height={1000} alt='carousel image'/>
                            <Image  className={[styles.image, styles.image_sm].join(' ')} src={'/images/carousel_image.png'} width={400} height={400} alt='carousel image'/>
                            <Image  className={styles.logo} src={'/images/carousel_logo.png'} width={400} height={400} alt='carousel logo'/>
                        </div>
                        <p className={styles.price} >от <span>7899 ₽</span></p>
                        <div className={styles.button} ><Button>Подробнее</Button></div>
                        <div className={styles.navigaton} >
                        <button className={styles.nav_btn} onClick={handlePrev}  ><FaArrowLeftLong/></button>
                            <button className={styles.nav_btn} onClick={handleNext}  ><FaArrowRightLong/></button>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide className={styles.slide} >
                        <h2 className={styles.title} >AIR MAX ——— FlYKNIT RACER</h2>
                        <p className={styles.text} >Усиленный носок и прочный пластиковый каркас. Инновационная технология раскрывается через перфорированную стельку</p>
                        <div  className={styles.image_holder}>
                        <Image className={[styles.image, styles.image_sm].join(' ')} src={'/images/carousel_image.png'} width={400} height={400} alt='carousel image'/>
                            <Image className={[styles.image, styles.image_lg].join(' ')} src={'/images/carousel_image.png'} width={1000} height={1000} alt='carousel image'/>
                            <Image  className={styles.logo} src={'/images/carousel_logo.png'} width={400} height={400} alt='carousel logo'/>
                        </div>
                        <p className={styles.price} >от <span>7899 ₽</span></p>
                        <div className={styles.button} ><Button>Подробнее</Button></div>
                        <div className={styles.navigaton} >
                        <button className={styles.nav_btn} onClick={handlePrev}  ><FaArrowLeftLong/></button>
                            <button className={styles.nav_btn} onClick={handleNext}  ><FaArrowRightLong/></button>
                        </div>
                    </SwiperSlide>
                
                
                
                </Swiper>
            </div>

                  


        </div>
    )
}

export default Carousel