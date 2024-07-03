import styles from "./checkbox.module.css";

export const Checkbox = ({ label, ...rest }) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" {...rest} className={styles.checkbox} />
      {label}
    </label>
  );
};
