import React from "react";
import styles from "./Itenerary-Item.module.scss";
import { FaBeer, FaCoffee, FaDollarSign, FaKey, FaMap, FaPeopleCarry } from "react-icons/fa";
function IteneraryItem({ item, label, type, day, time ,price,people}) {
  const icons = {
    touristpoint: <FaMap className={styles.icon} />,
    restaurant: <FaCoffee className={styles.icon} />,
    hotel: <FaKey className={styles.icon} />,
    //people:<FaPeopleCarry className={styles.icon}/>,
    price:<FaDollarSign className={styles.icon}/>
  };

  return (
    <div
      style={{ backgroundColor: item % 2 === 0 ? "#d6d6d6" : "#FFFFFF" }}
      className={styles.item}
    >
      <div className={styles.innerDiv}>
        {icons[type]}
        <div className={styles.label}>{label}</div>
      </div>
      {/*
      <div className={styles.innerDiv}>
        {icons[type]}
        <div className={styles.people}>{people}</div>
      </div>
      */}
      {price && (
      <div className={styles.innerDiv}>
        <FaDollarSign />
        <div className={styles.price}>{price}</div>
      </div>
      )}

      {time && <div className={styles.time}>{`Day ${day}, ${time}`}</div>}
    </div>
  );
}

export default IteneraryItem;
