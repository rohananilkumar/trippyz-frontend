import React from "react";
import styles from "./LabelledInput.module.scss";

const LabelledInput = ({ label, onChange, placeholder }) => {
  return (
    <div className={styles.labelledInput}>
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
