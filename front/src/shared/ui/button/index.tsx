import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface Props {
    variant?: 'primary' | 'primary_outlined',
    type?: 'button' | 'reset' | 'submit'
    children?: ReactNode,
    [key: string]: any
}

const Button: FC<Props> = ({ children, type='button', variant = 'primary', ...props }) => {
    return (
        <button type={type}   {...props} className={[styles.root, styles[variant]].join(' ')} >{children}</button>
    )

}
   
  



export default Button