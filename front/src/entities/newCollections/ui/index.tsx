import React from 'react'
import styles from './NewCollections.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const NewCollections = () => {
  return (
    <div className={styles.root} >
        <div className={[styles.inner, ' container'].join(' ')} >
            <div className={styles.block} >
            <div className={[styles.content, styles.content_1].join(' ')} >
                <h3 className={styles.title} >Новая коллекция в каталоге Nike Air Max Solo</h3>
                <Link className={styles.link} href={'#'} >Перейти в каталог</Link>
            </div>
            <Image className={[styles.image_1, styles.image_sm].join(' ')} src={'/images/new_collections_img_2.jpg'} width={400} height={400} alt='collection image'/>
            <Image className={[styles.image_1, styles.image_lg].join(' ')} src={'/images/new_collections_img_2.jpg'} width={1000} height={1000} alt='collection image'/>
            
            </div>
            <div className={styles.block} >
            <div className={[styles.content, styles.content_2].join(' ')} >
            <h3 className={styles.title} >Новая коллекция в каталоге Nike Air Max Solo</h3>
                <Link className={styles.link} href={'#'} >Перейти в каталог</Link>
            </div>
                <Image className={[styles.image_2, styles.image_sm].join(' ')} src={'/images/new_collections_img_1.jpg'} width={400} height={400} alt='collection image'/>
                <Image className={[styles.image_2, styles.image_lg].join(' ')} src={'/images/new_collections_img_1.jpg'} width={1000} height={1000} alt='collection image'/>
               
            </div>
        </div>
    </div>
  )
}

export default NewCollections