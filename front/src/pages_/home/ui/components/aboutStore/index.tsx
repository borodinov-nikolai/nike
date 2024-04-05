import React from 'react'
import styles from './AboutStore.module.scss'
import Button from '@/src/shared/ui/button'
import Image from 'next/image'


const AboutStore = () => {
  return (
    <div className={styles.root} >
        <div className={[styles.inner, 'container'].join(' ')} >
                    <h2 className={styles.title} >ИНТЕРНЕТ-МАГАЗИН SWOOSH STORE</h2>
                <div className={styles.firstTextBlock} >
                    Добро пожаловать в <span>Swoosh Store</span> – ваш источник подлинных кроссовок Nike и непревзойденного стиля! Мы рады представить вам уникальную онлайн-платформу, где вы сможете окунуться в мир инноваций и моды от легендарного бренда спортивной обуви.
                </div>
                <div className={styles.secondTextBlock} >
                    <h3>Легендарное наследие Nike:</h3>
                    Swoosh Store - это место, где история и стиль сливаются воедино. Мы гордимся тем, что предлагаем вам только оригинальные кроссовки Nike, продукцию, которая воплощает более чем полувековое наследие инноваций, комфорта и качества. Каждая пара кроссовок – это не просто спортивная обувь, это произведение искусства, воплощающее дух победы и страстную преданность активному образу жизни.   
                </div>
                <div className={styles.button} >
                    <Button>Подробнее</Button>
                </div>
                    <Image className={styles.image_sm} src={'/images/about_shop_img.png'} width={400} height={400} alt='about shop image' />
                    <Image className={styles.image_lg} src={'/images/about_shop_img.png'} quality={100} width={1000} height={1000} alt='about shop image' />
                        </div>
    </div>
  )
}

export default AboutStore