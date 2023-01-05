import React from "react";

import styles from "./card4.module.css";
import img from "../../assets/card4-img.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTabletopPlayers, GiAlarmClock } from "react-icons/gi";

export const Card4 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card4" className={styles.card__img} />
        <h1 className={styles.card__title}>TAKENOKO</h1>
        <p className={styles.card__intro}>
          Tu dificil misión será cuidar del panda
        </p>
        <p className={styles.card__description}>
          Cultiva las parcelas de tierra y regalas para hacer crecer brotes de
          bambú en ellas. Pero tené cuidado, porque al panda le enloquecen los
          jugosos y tiernos brotes de bambú
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
            <h3 className={styles.item__title}>45 min</h3>
          </div>
        </div>
      </div>
    </>
  );
};
