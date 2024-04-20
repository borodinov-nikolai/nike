import React, { FC } from "react";
import styles from "./Cart.module.scss";
import ItemsList from "../components/itemsList";
import PromoCode from "../components/promoCode";



export const Cart = () => {
  return (
    <div className={styles.root} >
      <h1>Корзина товаров</h1>
     <div className={styles.componentsHolder} >
      <div className={styles.component}><ItemsList/></div>
      <div className={styles.component}><PromoCode/></div>
     </div>
    </div>
  );
};
