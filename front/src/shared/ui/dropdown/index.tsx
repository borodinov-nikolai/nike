'use client';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import { MdKeyboardArrowDown } from "react-icons/md";



interface Props {
    name: string
    children: ReactNode
}

const Dropdown: FC<Props> = ({name = 'Название',children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const ref= useRef<HTMLDivElement | null>(null)
    useEffect(()=> {
        const handleClose = (event: MouseEvent)=> {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        addEventListener('mousedown', handleClose)

        return ()=> removeEventListener('mousedown', handleClose)
    },[])

  return (
    <div ref={ref} className={styles.root} >
        <div  onClick={()=>setIsOpen(!isOpen)} className={styles.currentOption} >
            <div className={styles.name} >{name}</div>
            <MdKeyboardArrowDown/>
        </div>
        <div className={[styles.content, isOpen && styles.content__open].filter(Boolean).join(' ')} >
            {children}
        </div>
    </div>
  )
}

export default Dropdown