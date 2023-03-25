import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "../skeleton";
import styles from "./styles.module.css";

function MovieSectionLoading({ title, movies }) {
  return (
    <div style={{ marginTop: "30px" }} className={styles.MovieSectionLoading}>
      <h3 className={styles.moviesTitle}>
        <Skeleton width={128} height={32} />
      </h3>
      <div className={styles.movies}>
        {Array(5)
          .fill(null)
          .map((movie, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export default MovieSectionLoading;
