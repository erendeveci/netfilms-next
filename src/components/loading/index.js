import React from "react";
import styles from "./styles.module.css"

function Loading() {
  return (
    <div class={styles.ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
