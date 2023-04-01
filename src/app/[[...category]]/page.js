import HomeContainer from "@/src/containers/home";

import {
  getCategories,
  getSingleCategories,
  getPopularMovies,
  getTopRatedMovies,
} from "@/services/movie";

export default async function Home({ params }) {
  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { genres: categoriesMovies },
  ] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getCategories(),
  ]);

  let selectedCategory;
  if (params.category?.length > 0) {
    const { results } = await getSingleCategories(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      categoriesMovies={categoriesMovies}
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
