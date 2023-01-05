import React from "react";
import { Card1 } from "../card1";
import { Card2 } from "../card2";
import { Card3 } from "../card3";
import { Card4 } from "../card4";
import { Card5 } from "../card5";
import { Card6 } from "../card6";

export const CardContainer = ({ card }) => {
  if (card === "Azul") {
    return <Card1 />;
  }
  if (card === "Sagrada") {
    return <Card2 />;
  }
  if (card === "Agricola") {
    return <Card3 />;
  }
  if (card === "Takenoko") {
    return <Card4 />;
  }
  if (card === "River Dragons") {
    return <Card5 />;
  }
  if (card === "Stone Age") {
    return <Card6 />;
  }
};
