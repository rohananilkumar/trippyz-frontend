import React from "react";
import styles from "./Branding.module.scss";
import logo from "../../assets/Icons/logo.svg";

const Branding = () => {
  return (
    <div className={styles.intro}>
      <img src={logo} alt="logo" />
      <div className={styles.content}>
        <div className={styles.header}>Trippyz</div>
        <div className={styles.tagLine}>Your complete travel partner</div>
      </div>
    </div>
  );
};

export default Branding;
