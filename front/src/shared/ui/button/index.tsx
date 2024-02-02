import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import Image from 'next/image'
import Img_arrow from '../../assets/icons/arrow.png'



interface Props {
    variant?: 'primary' | 'secondary',
    type?: 'button' | 'reset' | 'submit'
    children?: ReactNode,
    className?: string,
    [key: string]: any
}

const Button: FC<Props> = ({ children, type='button', variant = 'primary', className, ...props }) => {
    return (
        <button type={type}   {...props} className={[styles.root, styles[variant], className].filter(Boolean).join(' ')} >
            <p className={styles.text} >
                {children}
                </p>
            <div className={styles.image_holder} >
                <Image className={styles.image} src={Img_arrow} width={14} height={14} alt='arrow icon' />
            </div>
            </button>
    )

}
   
  



export default Button