import React from "react";
import styles from "./Primary.module.scss";

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      Create Account
    </button>
  );
};

export default PrimaryButton;
