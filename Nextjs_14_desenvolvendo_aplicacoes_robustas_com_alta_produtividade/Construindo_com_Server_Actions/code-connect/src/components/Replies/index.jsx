"use client";

import { useState } from "react";
import styles from "./replies.module.css";

export const Replies = () => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}
        >
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
      </div>
    </div>
  );
};
