'use client'
import React, { FC,ReactNode,useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss'

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
        <span className={styles.arrow} ><svg width="8" height="5" viewBox="0 0 8 5" fill="#BCBCBC" xmlns="http://www.w3.org/2000/svg">
<path d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3L3.5 4L4.5 4L4.5 3L3.5 3Z" />
</svg>
</span>
      </h3>
     <div ref={content} className={[styles.content].filter(Boolean).join(" ")} >
        {children}
      </div>
    </div>
  )
};

export default Accordion;