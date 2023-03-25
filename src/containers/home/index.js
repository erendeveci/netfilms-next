import React from "react";

/* mocks */
import Movies from "@/src/app/mocks/movies.json";
import Genres from "@/src/app/mocks/genres.json";

import FeaturedMovie from "@/src/components/featured-movie";
import Categories from "@/src/components/categories";
import MoviesSection from "@/src/components/movies-section";
function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={Genres.genres.find(
            (genre) => `${genre.id}` === selectedCategory.id
          )}
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(0, 9)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(9, 17)}
      />
    </div>
  );
}

export default HomeContainer;
