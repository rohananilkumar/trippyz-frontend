import React from "react";
import styles from "./Primary.module.scss";
import { Link } from "react-router-dom";


const PrimaryButton = ({ label, onClick, className ,to}) => {
  return (
    <Link to={to}>
    <button 
    className={`${styles.primaryButton} ${className}`}
    onClick={onClick}>
      {label}
      
    </button>
    </Link>
  );
};

export default PrimaryButton;

