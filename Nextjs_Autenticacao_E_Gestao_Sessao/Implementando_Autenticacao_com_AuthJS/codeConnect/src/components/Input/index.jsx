import styles from "./input.module.css";

export const Input = (props) => {
  return <input className={styles.input} {...props} />;
};
