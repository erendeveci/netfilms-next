import React from "react";

/* mocks */
import Movies from "@/src/app/mocks/movies.json";
import Genres from "@/src/app/mocks/genres.json";

import FeaturedMovie from "@/src/components/featured-movie";
import Categories from "@/src/components/categories";
import MoviesSection from "@/src/components/movies-section";
function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  selectedCategory,
  categoriesMovies = [],
}) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={categoriesMovies.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categoriesMovies.find(
              (genre) => `${genre.id}` === selectedCategory.id
            ).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Top Rated Movies"
        movies={topRatedMovies.slice(0, 9)}
      />
      <MoviesSection
        title="Popular Movies"
        movies={popularMovies.slice(9, 17)}
      />
    </div>
  );
}

export default HomeContainer;
