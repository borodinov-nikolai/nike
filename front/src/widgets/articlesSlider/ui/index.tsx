import React from 'react'
import styles from './ArticlesSlider.module.scss'
import { LongSlider } from '@/src/entities/longSlider'
import { ArticleCard } from '@/src/entities/articleCard'



const articles = [
  {
    id:1,
    type:'советы',
    title: 'Десять советов по выбору кроссовок для спорта',
    description: 'Рассказываем все тонкости выбора правильной обуви.',
    image: '/images/article_card_1.jpg',
    date: '10 августа 2023',
  }, 
  {
    id:2,
    type:'новости',
    title: 'Наш каталог пополнился новыми коллекциями',
    description: 'С радостью сообщаем вам о расширении ассортимента.',
    image: '/images/article_card_2.jpg',
    date: '7 августа 2023',
  },
  {
    id:3,
    type:'статьи',
    title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
    description: 'Рассказываем все тонкости выбора правильной обуви.',
    image: '/images/article_card_3.jpg',
    date: '5 августа 2023',
  },
  {
    id:4,
    type:'советы',
    title: 'Десять советов по выбору кроссовок для спорта',
    description: 'Рассказываем все тонкости выбора правильной обуви.',
    image: '/images/article_card_1.jpg',
    date: '10 августа 2023',
  },
  {
    id:5,
    type:'новости',
    title: 'Наш каталог пополнился новыми коллекциями',
    description: 'С радостью сообщаем вам о расширении ассортимента.',
    image: '/images/article_card_2.jpg',
    date: '7 августа 2023',
  },
  {
    id:6,
    type:'статьи',
    title: 'Кроссовки как повседневная обувь. Плюсы и минусы',
    description: 'Рассказываем все тонкости выбора правильной обуви.',
    image: '/images/article_card_3.jpg',
    date: '5 августа 2023',
  },
]

const cards = articles.map(({id, title, description, image, date, type})=>{
    return <ArticleCard key={id}  id={id} type={type} title={title} description={description} image={image} date={date} />
})

const ArticlesSlider = () => {
  return (
    <div>
        <LongSlider title={'ПОСЛЕДНИЕ ПУБЛИКАЦИИ'} cards={cards} />
    </div>
  )
}

export default ArticlesSlider