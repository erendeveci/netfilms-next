import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function MoviesSection({ title, movies }) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.moviesTitle}> {title}</h3>
      <div className={styles.movies}>
        {movies.map((movie, item) => (
          <div key={item} className={styles.movie}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
