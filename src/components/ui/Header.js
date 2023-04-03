import React from "react";
import styles from "./Header.module.scss";

const Header = ({ title, tagLine }) => {
  return (
    <>
      <div className={styles.header}>{title}</div>
      <div className={styles.tagLine}>{tagLine}</div>
    </>
  );
};

export default Header;
