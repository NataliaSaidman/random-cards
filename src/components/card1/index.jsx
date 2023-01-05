import React from "react";

import styles from "./card1.module.css";
import img from "../../assets/card1-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTabletopPlayers, GiAlarmClock } from "react-icons/gi";

export const Card1 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card1" className={styles.card__img} />
        <h1 className={styles.card__title}>AZUL</h1>
        <p className={styles.card__intro}>Colocá los azulejos más lindos</p>
        <p className={styles.card__description}>
          Azul te reta a ser un artista en la colocación de azulejos para
          embellecer las paredes del Palacio Real de Évora.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <MdFamilyRestroom className={styles.item__icons} />
            <h3 className={styles.item__title}>8 años</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiTabletopPlayers className={styles.item__icons} />
            <h3 className={styles.item__title}>2 - 4</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiAlarmClock className={styles.item__icons} />
            <h3 className={styles.item__title}>30-45 min</h3>
          </div>
        </div>
      </div>
    </>
  );
};
