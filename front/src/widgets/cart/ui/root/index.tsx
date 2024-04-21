import React, { FC } from "react";
import styles from "./Cart.module.scss";
import PromoCode from "../components/promoCode";
import DesktopItemList from "../components/desktopItemsList";
import MobileItemList from "../components/mobileItemsList";



export const Cart = () => {
  return (
    <div className={styles.root} >
      <h1 className={styles.title} >Корзина товаров</h1>
     <div className={styles.componentsHolder} >
      <div className={styles.desktopItemsList}><DesktopItemList/></div>
      <div className={styles.mobileItemsList}><MobileItemList/></div>
      <div className={styles.component}><PromoCode/></div>
     </div>
    </div>
  );
};
