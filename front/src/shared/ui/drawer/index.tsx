'use client'
import React, {FC, ReactNode, useEffect, useState } from 'react'
import styles from './Drawer.module.scss'
import { IoCloseOutline } from "react-icons/io5";



interface Props{
    children: ReactNode
    content?: ReactNode
}

const Drawer:FC<Props> = ({children, content}) => {
const [isOpen, setIsOpen] = useState<boolean>(false)

useEffect(()=> {

    const handleResize = ()=> {
        if(window.innerWidth > 1400) {
            setIsOpen(false)
        }
    }
    window.addEventListener('resize', handleResize)
    
    
    return ()=> window.removeEventListener('resize', handleResize)
}, [])


  return (
    <>
        <div className={styles.openBtn}  onClick={()=> setIsOpen(true)} > {children} </div>
        <div className={[styles.root, isOpen && styles.root__open].filter(Boolean).join(' ')} >
        <div onClick={()=>{setIsOpen(false)}} className={styles.fade} ></div>
            <div className={styles.content_wrapper} >
                <div className={styles.content}>{content}</div>
            <div className={styles.closeBtn} onClick={()=>{setIsOpen(false)}} >
                <IoCloseOutline/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Drawer