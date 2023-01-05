import React from "react";

import styles from "./card2.module.css";
import img from "../../assets/card2-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTabletopPlayers, GiAlarmClock } from "react-icons/gi";

export const Card2 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card2" className={styles.card__img} />
        <h1 className={styles.card__title}>SAGRADA</h1>
        <p className={styles.card__intro}>Colocá los dados como un artista</p>
        <p className={styles.card__description}>
          Como experto artesano, tienes en mente realizar una obra de arte con
          tu próxima vidriera, que será colocada en la Sagrada Familia.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <MdFamilyRestroom className={styles.item__icons} />
            <h3 className={styles.item__title}>13 años</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiTabletopPlayers className={styles.item__icons} />
            <h3 className={styles.item__title}>1 - 4</h3>
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
