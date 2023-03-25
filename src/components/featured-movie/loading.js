import Loading from "../loading";
import React from "react";

import styles from "./styles.module.css";
function FeatureMovieLoading() {
  return (
    <div
      className={styles.movieWrapper}
      style={{
        display: "flex",
        alignItems: "center",
       
        height: 360,
        justifyContent : "center"
      }}
    >
      <Loading />
    </div>
  );
}

export default FeatureMovieLoading;
