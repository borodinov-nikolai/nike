'use client'
import React, { useState } from 'react';
import styles from './Select.module.scss';

const Select = () => {
  const [currentLabel, setCurrentLabel] = useState<string>('option 1');
  const [currentValue, setCurrentValue] = useState<string>();
   const [isOpen, setIsOPen] = useState<boolean>(false)
  const options = [
    {id: 1, label: 'option 1', value:'опция 1'},
    {id: 2, label: 'option 2', value:'опция 2'},
    {id: 3, label: 'option 3', value:'опция 3'},
    {id: 4, label: 'option 4', value:'опция 4'},
   ]

  const toogleDropdown = ()=> {
    setIsOPen(!isOpen)
  }

  const handleOptionClick = ({label, value}: {label:string, value: string})=> {
    setCurrentLabel(label);
    setCurrentValue(value)
    setIsOPen(false)
  }

  return (
    <div className={styles.root}>
        <div onClick={()=> toogleDropdown()} className={[styles.selector, isOpen && styles.selectorActive].filter(Boolean).join(' ')}>{currentLabel}</div>
       { isOpen && (<ul className={[styles.optionsList, isOpen && styles.animate].join(' ')} >
        {
          options.map(({id, label, value})=> {
            return <li onClick={()=>handleOptionClick({label, value})} key={id} >{label}</li>
          })
        }
        </ul>)}
    </div>
  );
};

export default Select