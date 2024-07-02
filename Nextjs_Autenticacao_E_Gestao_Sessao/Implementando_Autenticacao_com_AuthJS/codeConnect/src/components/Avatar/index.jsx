import Image from "next/image";
import styles from "./avatar.module.css";

export const Avatar = ({ author }) => {
  const imgSrc = author.avatar ?? author.image;

  return (
    <div className={styles.container}>
      {imgSrc && (
        <Image
          src={imgSrc}
          width={32}
          height={32}
          alt={`Avatar do(a) ${author.name}`}
        />
      )}
    </div>
  );
};
