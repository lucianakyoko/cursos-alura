import Image from "next/image";
import styles from "./comment.module.css";
import { Avatar } from "../Avatar";

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Avatar author={comment.author} />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
