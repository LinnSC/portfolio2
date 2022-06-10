// import styles from "../styles/TextAnimation.module.scss";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function TextAnimation({ text, className }) {
  const textArray = `${text}`.split("");

  return (
    <>
      <div className={className}>
        {textArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  );
}
