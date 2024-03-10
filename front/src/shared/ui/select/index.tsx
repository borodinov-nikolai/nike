'use client'
import React, { FC, useState } from 'react';
import styles from './Select.module.scss';



interface Props {
  options?: {id: number, label: string, value: string}[],
  setValue?: (value: string) => void
}

const Select: FC<Props> = ({options = [
  {id: 1, label: 'option 1', value:'опция 1'},
  {id: 2, label: 'option 2', value:'опция 2'},
  {id: 3, label: 'option 3', value:'опция 3'},
  {id: 4, label: 'option 4', value:'опция 4'},
 ],
 setValue
} ) => {
  const [currentLabel, setCurrentLabel] = useState<string>(options[0].label);
   const [isOpen, setIsOPen] = useState<boolean>(false)


  const toogleDropdown = ()=> {
    setIsOPen(!isOpen)
  }

  const handleOptionClick = ({label, value}: {label:string, value: string})=> {
    setCurrentLabel(label)
    setIsOPen(false)
    setValue && setValue(value)
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