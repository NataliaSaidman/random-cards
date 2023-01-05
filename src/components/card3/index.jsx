import React from "react";

import styles from "./card3.module.css";
import img from "../../assets/card3-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTabletopPlayers, GiAlarmClock } from "react-icons/gi";

export const Card3 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card3" className={styles.card__img} />
        <h1 className={styles.card__title}>AGRICOLA</h1>
        <p className={styles.card__intro}>Desarrollá tu granja</p>
        <p className={styles.card__description}>
          Eres un granjero/a en una choza de madera, vives con tu pareja y poco
          más. Debes pensar la mejor forma para que tu granja crezca
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <MdFamilyRestroom className={styles.item__icons} />
            <h3 className={styles.item__title}>12 años</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiTabletopPlayers className={styles.item__icons} />
            <h3 className={styles.item__title}>1 - 5</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiAlarmClock className={styles.item__icons} />
            <h3 className={styles.item__title}>150 min</h3>
          </div>
        </div>
      </div>
    </>
  );
};
