import React from "react";

import styles from "./card5.module.css";
import img from "../../assets/card5-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTabletopPlayers, GiAlarmClock } from "react-icons/gi";

export const Card5 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card5" className={styles.card__img} />
        <h1 className={styles.card__title}>RIVER DRAGONS</h1>
        <p className={styles.card__intro}>
          Cruzá el río, pero ojo con los dragones
        </p>
        <p className={styles.card__description}>
          Llegá a la orilla opuesta construyendo puentes con tablas y piedras.
          El primero en llegar recibe un Dragon Dorado del mismisimo rey.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <MdFamilyRestroom className={styles.item__icons} />
            <h3 className={styles.item__title}>8 años</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiTabletopPlayers className={styles.item__icons} />
            <h3 className={styles.item__title}>2 - 6</h3>
          </div>
          <div className={styles.card__footer__item}>
            <GiAlarmClock className={styles.item__icons} />
            <h3 className={styles.item__title}>25 min</h3>
          </div>
        </div>
      </div>
    </>
  );
};
