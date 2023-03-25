import React from "react";

import CategoriesLoading from "@/src/components/categories/loading";
import FeatureMovieLoading from "@/src/components/featured-movie/loading";
import MovieSectionLoading from "@/src/components/movies-section/loading";
function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
    </div>
  );
}

export default Loading;
