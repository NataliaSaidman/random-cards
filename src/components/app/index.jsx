import { useState } from "react";
import styles from "./app.module.css";

import {
  BsDice1,
  BsDice2Fill,
  BsFillDice3Fill,
  BsDice4Fill,
  BsFillDice5Fill,
  BsDice6,
} from "react-icons/bs";
import { CardContainer } from "../cardContainer";

export const App = () => {
  const [diceResult, setDiceResult] = useState("lanzá el dado");

  const handleRollDice = () => {
    const games = [
      "Azul",
      "Sagrada",
      "Agricola",
      "Takenoko",
      "River Dragons",
      "Stone Age",
    ];
    let number = Math.floor(Math.random() * games.length);
    setDiceResult(games[number]);
  };

  return (
    <>
      <div className={styles.title__container}>
        <div className={styles.dice__container}>
          <BsFillDice3Fill className={styles.dice__bump__up} />
          <BsDice6 className={styles.dice__bump__down} />
          <BsDice4Fill className={styles.dice__bump__up} />
        </div>
        <h1 className={styles.title}>¿A qué jugamos hoy?</h1>
        <div className={styles.dice__container}>
          <BsFillDice5Fill className={styles.dice__bump__up} />
          <BsDice1 className={styles.dice__bump__down} />
          <BsDice2Fill className={styles.dice__bump__up} />
        </div>
      </div>
      <button className={styles.roll__button} onClick={handleRollDice}>
        <BsDice6 className={styles.button__dice} /> ¡Tirá!
      </button>
      <div className={styles.card__result__container}>
        <h2 className={styles.card__result__title}>
          Hoy juegas al...{diceResult}
        </h2>
        <div className={styles.card__container}>
          <CardContainer card={diceResult} />
        </div>
      </div>
    </>
  );
};
