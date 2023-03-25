import Link from "next/link";
import React from "react";

import style from "./styles.module.css";

import { FaPlus } from "react-icons/fa";
import Image from "next/image";

function FeaturedMovie({ movie , isCompact = true }) {
  const { poster_path, title, overview } = movie;
  
  return (
    <div className={style.movieWrapper}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.description}>{overview}</p>

      <div className={style.actions}>
        <Link href="/" className={style.playButton}>
          Play
        </Link>
        <button className={style.addButton}>
          <FaPlus />
        </button>
      </div>

      <div className={style.moviePoster}>
        <div className={style.moviePosterOverlay}></div>
        <Image
          fill
          unoptimized
          alt={title}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />{" "}
      </div>
    </div>
  );
}

export default FeaturedMovie;
