import React from "react";
import styles from "./Primary.module.scss";

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <button 
    className={`${styles.primaryButton} ${className}`}
    onClick={onClick}>
      {label}
      
    </button>
  );
};

export default PrimaryButton;
