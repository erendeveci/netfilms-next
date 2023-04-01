import React from "react";

import MovieContainer from "@/src/containers/movies";
import Movies from "@/src/app/mocks/movies.json";

import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";
const BASE_URL = "https://api.themoviedb.org/3";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) {
    notFound();
  }
  
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
