'use client'
import React, { FC, useState } from 'react'
import styles from './PasswordInput.module.scss'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

interface Props {
  placeholder?: string
  className?: string
  onChange?: (e:React.ChangeEvent<HTMLInputElement>)=> void
  onKeyDown?: (e:React.KeyboardEvent<HTMLInputElement>)=> void
 [key:string]: any
}

const PasswordInput: FC<Props> = React.forwardRef(({placeholder, type='text', className, ...props},  ref: React.LegacyRef<HTMLInputElement> | undefined,) => {
  
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
        <div className={styles.root} >
            <input type={showPassword ? 'text': 'password'} {...props}  placeholder={placeholder}
             className={[styles.input, className].filter(Boolean).join(' ')}></input>
             {showPassword && <BiShow onClick={()=>setShowPassword(!showPassword)} className={styles.icon} />}
             {!showPassword && <BiHide onClick={()=>setShowPassword(!showPassword)} className={styles.icon} />}

        </div>
  )
})

PasswordInput.displayName = "PasswordInput"

export default PasswordInput