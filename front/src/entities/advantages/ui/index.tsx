import React from 'react'
import styles from './Advantages.module.scss'
import Image from 'next/image'


const Advantages = () => {
    return (
        <div className={styles.root} >
            <div className={styles.inner + ' container'} >
               <ul className={styles.list} >
                <li className={styles.listItem} >
                    <Image src={'/icons/shield.png'} width={36} height={36} alt='shield'/>
                    <div className={styles.text} >
                        <h3 >ТОЛЬКО ОРИГИНАЛЬНЫЕ<br/> ТОВАРЫ</h3>
                        <p>Гарантированная подлинность Nike и высокое качество кроссовок.</p>
                    </div>
                </li>
                <li className={styles.listItem} >
                    <Image src={'/icons/3_stars.png'} width={36} height={36} alt='shield'/>
                    <div className={styles.text} >
                        <h3>ПРОФЕССИОНАЛЬНЫЙ<br/> СЕРВИС</h3>
                        <p>Команда экспертов, готовых помочь с выбором размера ответить на все вопросы.</p>
                    </div>
                </li>
                <li className={styles.listItem} >
                    <Image src={'/icons/cart_with_heart.png'} width={36} height={36} alt='shield'/>
                    <div className={styles.text} >
                        <h3>ЭКСКЛЮЗИВНЫЙ<br/> ВЫБОР</h3>
                        <p>Богатый ассортимент оригинальных моделей Nike, включая редкие выпуски.</p>
                    </div>
                </li>
               </ul>
            </div>
            </div>
    )
}

export default Advantages