'use client'
import React, { FC, ReactNode} from 'react'
import Image from 'next/image'
import Img_arrow from '../../assets/icons/arrow.png'
import dynamic from 'next/dynamic'
import styles from './Button.module.scss'
import { IoIosArrowRoundForward } from "react-icons/io";


interface Props {
    variant?: 'primary' | 'secondary'
    onClick?:()=> void 
    type?: 'button' | 'reset' | 'submit'
    children?: ReactNode
    className?: string
    icon?: ReactNode
    onSubmit?: ()=> void
    [key: string]: any
}

const Button: FC<Props> = ({ children, onClick, type='button', variant = 'primary', className, icon, ...props }) => {


    
    return (
        <button onClick={onClick} type={type}   {...props} className={[styles.root, styles[variant], className].filter(Boolean).join(' ')} >
            <p className={styles.text} >
                {children}
                </p>
            <div className={styles.image_holder} >
                <div className={styles.icon} >{icon ? icon : <IoIosArrowRoundForward /> }</div>
            </div>
            </button>
    )

}
   
  



export default Button