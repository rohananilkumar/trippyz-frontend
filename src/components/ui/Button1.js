import React from "react";
import styles from "./Button1.module.scss";

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      Tightly Planned Routes
    </button>
  );
};

export default PrimaryButton;
