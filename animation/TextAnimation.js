import styles from "../styles/TextAnimation.module.scss";
import { useState, useEffect } from "react";

export default function TextAnimation({ text }) {
  const textArray = `${text}`.split("");

  return (
    <>
      <div className={styles.animatedText}>
        {textArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  );
}
