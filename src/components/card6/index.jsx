import React from "react";

import styles from "./card6.module.css";
import img from "../../assets/card6-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTabletopPlayers, GiAlarmClock } from "react-icons/gi";

export const Card6 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card6" className={styles.card__img} />
        <h1 className={styles.card__title}>STONE AGE</h1>
        <p className={styles.card__intro}>
          Vive en la época de la edad de piedra
        </p>
        <p className={styles.card__description}>
          Tendrás que recoger madera, romper la piedra y extraer oro del rio.
          Tendrás que comerciar y expandir tu aldea, para así alcanzar nuevas
          cotas de civilización.
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
