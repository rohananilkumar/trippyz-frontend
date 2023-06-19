import React from "react";
import styles from "./LabelledInput.module.scss";

const LabelledInput = ({ label, onChange,type, placeholder ,className}) => {
  return (
    <div className={`${styles.labelledInput} ${className}`}>
      <div className={styles.label}>{label}</div>
      <input
        className={styles.inputElement}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabelledInput;
