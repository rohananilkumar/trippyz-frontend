import React from "react";
import styles from "./LabelledInput.module.scss";

const LabelledInput = ({
  label,
  onChange,
  type,
  placeholder,
  value,
  className,
}) => {
  return (
    <div className={`${styles.labelledInput} ${className}`}>
      <div className={styles.label}>{label}</div>
      <input
        className={styles.inputElement}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabelledInput;
