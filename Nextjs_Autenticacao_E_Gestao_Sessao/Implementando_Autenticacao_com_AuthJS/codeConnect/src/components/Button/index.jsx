import styles from "./button.module.css";
import Link from "next/link";

export const Button = ({ children, outline, href, ...rest }) => {
  if (href) {
    return (
      <Link href={href} className={outline ? styles.outline : styles.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={outline ? styles.outline : styles.btn} {...rest}>
      {children}
    </button>
  );
};
