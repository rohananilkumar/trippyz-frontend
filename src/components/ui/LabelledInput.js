import React from "react";
import styles from "./LabelledInput.module.scss";

const LabelledInput = ({ label, onChange, placeholder ,className}) => {
  return (
    <div className={`${styles.labelledInput} ${className}`}>
      <div className={styles.label}>{label}</div>
      <input
        className={styles.inputElement}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabelledInput;
