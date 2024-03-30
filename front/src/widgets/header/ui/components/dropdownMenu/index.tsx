import React, { FC } from 'react'
import styles from './DrodownMenu.module.scss'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownMenu:FC<Props> = ({setShow}) => {
    return (
        <div className={[styles.root, ' container'].join(' ')} >
            <div className={styles.categories} >
                <div className={styles.category} >
                    <h3 className={styles.categoryTitle} >Лето</h3>
                    <ul className={styles.categoryList} >
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для бега</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Повседневная</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Треккинговая</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для футбола</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для волейбола</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для баскетбола</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для тенниса</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для водных видов спорта</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Спортивный</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для бега</Link></li>
                    </ul>
                </div>
                <div className={styles.category} >
                    <h3 className={styles.categoryTitle} >Димесизон</h3>
                    <ul className={styles.categoryList} >
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Для бега</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Повседневная</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Треккинговая</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Кожаные</Link></li>
                    </ul>
                </div>
                <div className={styles.category} >
                    <h3 className={styles.categoryTitle} >Зима</h3>
                    <ul className={styles.categoryList} >
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Утепленные</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Повседневная</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Кожаные</Link></li>
                    </ul>
                </div>
                <div className={styles.category} >
                    <h3 className={styles.categoryTitle} >Модели</h3>
                    <ul className={styles.categoryList} >
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Air Force 1</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike SB Dunk Low</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Air Max 90</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>NIke Shox</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Blazer</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike M2K Tekno</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Air Max Plus</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Air Huarache</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Air Zoom 2K</Link></li>
                        <li><Link onClick={()=>setShow(false)} href={'/catalog/all'}>Nike Air Presto</Link></li>
                    </ul>
                </div>
            </div>
                <div className={styles.newCollection} >
                      <Image src={'/images/dropdown_menu_img.jpeg'} width={440}  height={346} alt='new collection image' />
                      <div className={styles.newCollection_text} >
                        <h3>Новая коллекция в каталоге Nike Air Max Solo</h3>
                        <Link  onClick={()=>setShow(false)} href={'/catalog/all'}>Перейти в каталог</Link>
                      </div>
                </div>
        </div>
    )
}

export default DropdownMenu