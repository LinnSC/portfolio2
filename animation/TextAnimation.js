import styles from "../styles/TextAnimation.module.scss";
import React from "react";

export default function TextAnimation({ text }) {
  const reactArray = `${text}`.split("");

  return (
    <>
      <div className={styles.animatedText}>
        {reactArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  );
}
