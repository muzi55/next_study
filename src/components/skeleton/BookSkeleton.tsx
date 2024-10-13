import React from "react";
import styles from "./BookSkeleton.module.css";

export default function BookSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.coverImg}></div>
      <div className={styles.infoContainer}>
        <div className={styles.title}></div>
        <div className={styles.subTitle}></div>
        <div className={styles.author}></div>
      </div>
    </div>
  );
}
