import styles from "./label.module.css";

export const Label = ({ children, ...rest }) => {
  return (
    <label {...rest} className={styles.label}>
      {children}
    </label>
  );
};
