'use client'
import React, { FC,ReactNode,useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  title?: string
  children?: ReactNode
}

const Accordion: FC<Props> = ({ title = "заголовок", children}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const content = useRef<HTMLDivElement>(null);


  const handleVisible = () => {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    

    if (content.current && isVisible) {
      content.current.style.maxHeight = content.current.scrollHeight + "px";
      content.current.style.opacity = "1"
    } else if(content.current && !isVisible) {
        content.current.style.maxHeight = "0";
        content.current.style.opacity = "0"
    }

    
  }, [isVisible])



  return (
    <div className={styles.root} >

      <h3 onClick={handleVisible} className={[styles.title, isVisible && styles.active].filter(Boolean).join(" ")} >
        {title}
        <span className={styles.arrow} >
<MdOutlineKeyboardArrowDown/>

</span>
      </h3>
     <div ref={content} className={[styles.content].filter(Boolean).join(" ")} >
        {children}
      </div>
    </div>
  )
};

export default Accordion;