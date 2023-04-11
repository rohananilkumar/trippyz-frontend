import React from "react";
import styles from "./Button2.module.scss";

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      Lightly Scheduled Routes
    </button>
  );
};

export default PrimaryButton;
