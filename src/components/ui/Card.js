import React from "react";
import styles from "./Card.module.scss";
import clock from "../../assets/Icons/clock.svg";
import money from "../../assets/Icons/dollar-sign.svg";
import IteneraryItem from "./Itenerary-Item";

const Card = ({ children, title, imageurl, duration, expense, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
