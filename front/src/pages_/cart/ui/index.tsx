import React from 'react'
import styles from './Cart.module.scss'
import Breadcrumb from '@/src/shared/ui/breadcrumb'
import { Cart } from '@/src/widgets/cart'


export const CartPage = () => {
  return (
    <main>
        <div className="container">
        <Breadcrumb items={[{label: 'Корзина товаров', url:'#'}]} />
          <Cart/>
        </div>
    </main>
  )
}
