import React from "react";
import styles from "./Signoutbutton.module.scss";

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <button className={`${styles.primaryButton} ${className}`}>
      Sign Out
    </button>
  );
};

export default PrimaryButton;
