import React, { FC, ReactNode, forwardRef } from 'react'
import styles from './Button.module.scss'

interface Props {
    variant?: 'primary' | 'primary_outlined' 
    children?: ReactNode,
    [key: string]: any
}

const Button: FC<Props> = ({ children, variant = 'primary', ...props }) => {
    return (
        <button  {...props} className={[styles.root, styles[variant]].join(' ')} >{children}</button>
    )

}
   
  



export default Button