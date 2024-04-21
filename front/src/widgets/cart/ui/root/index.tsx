import React, { FC } from "react";
import styles from "./Cart.module.scss";
import ItemsList from "../components/desktopItemsList";
import PromoCode from "../components/promoCode";



export const Cart = () => {
  return (
    <div className={styles.root} >
      <h1 className={styles.title} >Корзина товаров</h1>
     <div className={styles.componentsHolder} >
      <div className={styles.itemsList}><ItemsList/></div>
      <div className={styles.component}><PromoCode/></div>
     </div>
    </div>
  );
};
