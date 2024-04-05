'use client'
import { FC } from "react";
import styles from "./RadioButton.module.scss";



interface Props {
  name?: string
  value?: string
  checked?: boolean 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void
  [key: string]: any
}

const RadioButton:FC<Props> = ({name, value, onChange, defaultValue, checked, ...props}) => {
  return (
    <label className={styles.root}>
      <input checked={checked} name={name} value={value}  onChange={onChange} className={styles.original} {...props} type="radio"></input>
      <span className={styles.custom}></span>
    </label>
  );
};

export default RadioButton;
