import { Avatar } from "../Avatar";
import styles from "./author.module.css";

export const Author = ({ author }) => {
  return (
    <ul className={styles.author}>
      <li>
        <Avatar author={author} />
      </li>
      <li>@{author.name}</li>
    </ul>
  );
};
