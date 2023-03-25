import React from "react";

import MovieContainer from "@/src/containers/movies";
import Movies from "@/src/app/mocks/movies.json";

import { notFound } from "next/navigation";

function MoviePage({ params, searchParams }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
