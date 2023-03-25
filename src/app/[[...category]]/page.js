import HomeContainer from "@/src/containers/home";

import Movies from "@/src/app/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home({ params }) {
  await delay(1000);
  let selectedCategory;
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}
