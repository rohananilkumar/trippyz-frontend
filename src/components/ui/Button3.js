import React from "react";
import styles from "./Button3.module.scss";

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      Route that include food
    </button>
  );
};

export default PrimaryButton;
