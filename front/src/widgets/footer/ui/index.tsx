import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Accordion from '@/src/shared/ui/accordion'


const Footer = () => {

  const informationLinks = [
    {id:1, lable:"О магазине", link: '/about'},
    {id:2, lable:"Наш блог", link: '#'},
    {id:3, lable:"Доставка", link: '#'},
    {id:4, lable:"Оплата", link: '#'},
    {id:5, lable:"Контакты", link: '#'},

  ]

  const categoriesList = [
    {id:1, lable:"Каталог", link: '/catalog/all'},
    {id:2, lable:"Мужские", link: '/catalog/man'},
    {id:3, lable:"Женские", link: '/catalog/wooman'},
    {id:4, lable:"Детские", link: '/catalog/children'},
    {id:5, lable:"Распродажа", link: '/catalog/sail'},
  ]

  const shopSectionsList = [
    {id:1, lable:"Личный кабинет", link: '/account'},
    {id:2, lable:"Избранное", link: '/favorites'},
    {id:3, lable:"Корзина", link: '/cart'},
  ]

  return (
    <footer className={styles.root} >
      <div className={[styles.inner, 'container'].join(" ")} >
        <div className={styles.blocks} >
          <div className={styles.startBlock} >
              <Link href={'/'} >
            <div className={styles.logo} >
                <Image className={styles.logo_logoImg} src={'/images/footer_logo.png'} width={90} height={31} quality={100} alt='footer logo' />
                <div>
                  <Image className={styles.logo_swooshImg} src={'/images/swoosh.png'} width={114} height={18} quality={100} alt='swoosh image' />
                  <Image className={styles.logo_storeImg} src={'/images/store.png'} width={84} height={18} quality={100} alt='store image' />
                </div>
            </div>
              </Link>
            <ul className={styles.socials} >
              <li><Link href={'#'} ><Image src={'/icons/inst.png'} width={20} height={20} alt='socials icon' /> </Link></li>
              <li><Link href={'#'} ><Image src={'/icons/vk.png'} width={23} height={12} alt='socials icon' /> </Link></li>
              <li><Link href={'#'} ><Image src={'/icons/twit.png'} width={18} height={15} alt='socials icon' /> </Link></li>
            </ul>
            <p className={styles.social_info} >Instagram является запрещенной соц.сетью в РФ</p>

          </div>


          <div className={styles.centerBlock_mobile} >  

            <div className={styles.accordion} >
              <Accordion title='ИНФОРМАЦИЯ'>
                <ul className={styles.linksList} >
                  {informationLinks.map(({id, lable, link})=>{
                    return <li key={id} ><Link href={link}>{lable}</Link></li>
                  })}
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion}>
              <Accordion title='ТОВАРЫ'>
                <ul className={styles.linksList} >
                {categoriesList.map(({id, lable, link})=>{
                    return <li key={id} ><Link href={link}>{lable}</Link></li>
                  })}
                </ul>
              </Accordion>
            </div>
            <div className={styles.accordion}>
              <Accordion title='МАГАЗИН'>
                <ul className={styles.linksList} >
                {shopSectionsList.map(({id, lable, link})=>{
                    return <li key={id} ><Link href={link}>{lable}</Link></li>
                  })}
                </ul>
              </Accordion>
            </div>
          </div>

          <div className={styles.centerBlock} >

            <div className={styles.centerBlock_section} >
              <h3>ИНФОРМАЦИЯ</h3>
              <ul className={styles.linksList} >
              {informationLinks.map(({id, lable, link})=>{
                    return <li key={id} ><Link href={link}>{lable}</Link></li>
                  })}
              </ul>
            </div>

            <div  className={styles.centerBlock_section} >
              <h3>ТОВАРЫ</h3>
              <ul className={styles.linksList} >
              {categoriesList.map(({id, lable, link})=>{
                    return <li key={id} ><Link href={link}>{lable}</Link></li>
                  })}
                        </ul>
            </div>
          
          <div  className={styles.centerBlock_section} >
          <h3>МАГАЗИН</h3>
            <ul className={styles.linksList} >
            {shopSectionsList.map(({id, lable, link})=>{
                    return <li key={id} ><Link href={link}>{lable}</Link></li>
                  })}
            </ul>
          </div>
          </div>
    
          <div className={styles.endBlock} >
            <div className={styles.endBlock_text} >
              <h2 className={styles.endBlock_title} >ПOДПИСКА НА НОВОСТИ</h2>
              <p className={styles.endBlock_description} >Подпишитесь на новости и скидки</p>
            </div>
            <div className={styles.subscribe} >
              <form className={styles.subscribe_form}>
                <input placeholder='Email' type="text" />
                <p>Подписаться</p>
              </form>
              <p>Согласен с <Link href={'#'} >политикой конфиденциальности</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.politics} >
        <div className={styles.politics_inner + ' container'}>
          <p className={styles.politics_right} >© 2023 - Swoosh Store - Интернет-магазин ориганальных кроссовок</p>
          <Link href={'#'} className={styles.politics_confident} >Политика конфиденциальности</Link>
          <div className={styles.politics_author} >
            <p>Разработка сайта:</p>
            <p>Бородинов Николай</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer