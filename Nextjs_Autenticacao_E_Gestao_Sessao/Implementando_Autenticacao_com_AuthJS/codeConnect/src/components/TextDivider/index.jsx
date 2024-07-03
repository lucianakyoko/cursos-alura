import styles from "./textdivider.module.css";

export const TextDivider = ({ text }) => {
  return <hr className={styles.divider} data-text={text} />;
};
