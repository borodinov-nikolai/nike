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
                    speed={800}
                    loop={true}
                    spaceBetween={40}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                >
                    <SwiperSlide className={styles.slide} >
                        <h2 className={styles.title} >AIR MAX <span className={styles.titleLine} ></span> <br/> FlYKNIT RACER</h2>
                        <p className={styles.text} >Усиленный носок и прочный пластиковый каркас. Инновационная технология раскрывается через перфорированную стельку</p>
                        <div  className={styles.image_holder}>
                            <Image priority  className={[styles.image, styles.image_sm].join(' ')} src={'/images/carousel_image.png'}  width={400} height={400} alt='carousel image'/>
                            <Image className={[styles.image, styles.image_lg].join(' ')} src={'/images/carousel_image.png'} width={800} height={800} alt='carousel image'/>
                            <Image  className={styles.logo} src={'/images/carousel_logo.png'}  width={380} height={380} alt='carousel logo'/>
                        </div>
                        <p className={styles.price} >от <span>7899 ₽</span></p>
                        <div className={styles.button} ><Button>Подробнее</Button></div>
                    </SwiperSlide>
                        <div className={styles.navigaton} >
                        <button className={styles.nav_btn} onClick={handlePrev}  ><FaArrowLeftLong/></button>
                            <button className={styles.nav_btn} onClick={handleNext}  ><FaArrowRightLong/></button>
                        </div>
                
                    <SwiperSlide className={styles.slide} >
                        <h2 className={styles.title} >AIR MAX <span className={styles.titleLine} ></span> <br/> FlYKNIT RACER</h2>
                        <p className={styles.text} >Усиленный носок и прочный пластиковый каркас. Инновационная технология раскрывается через перфорированную стельку</p>
                        <div  className={styles.image_holder}>
                        <Image priority className={[styles.image, styles.image_sm].join(' ')} src={'/images/carousel_image.png'} width={400} height={400} alt='carousel image'/>
                            <Image  className={[styles.image, styles.image_lg].join(' ')} src={'/images/carousel_image.png'} width={800} height={800} alt='carousel image'/>
                            <Image  className={styles.logo} src={'/images/carousel_logo.png'}  width={380} height={380} alt='carousel logo'/>
                        </div>
                        <p className={styles.price} >от <span>7899 ₽</span></p>
                        <div className={styles.button} ><Button>Подробнее</Button></div>
                    </SwiperSlide>
                        <div className={styles.navigaton} >
                        <button className={styles.nav_btn} onClick={handlePrev}  ><FaArrowLeftLong/></button>
                            <button className={styles.nav_btn} onClick={handleNext}  ><FaArrowRightLong/></button>
                        </div>
                
                
                
                </Swiper>
            </div>

                  


        </div>
    )
}

export default Carousel