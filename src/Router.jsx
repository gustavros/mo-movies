import { Route, Routes } from "react-router-dom";

// * pages
import { Home } from "./pages/Home/Home";
import { MovieDetail } from "./pages/MovieDetails/MovieDetail";
import { TopRatedMovies } from "./pages/TopRatedMovies/TopRatedMovies";
import { SeriesCategory } from "./pages/Category/SeriesCategory/SeriesCategory";
import { MoviesCategory } from "./pages/Category/MoviesCategory/MoviesCategory";
import { PopularMovies } from "./pages/PopularMovies/PopularMovies";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category-movies" element={<MoviesCategory />} />
      <Route path="/category-series" element={<SeriesCategory />} />

      <Route path="details/movie/:id" element={<MovieDetail />} />
      
      <Route path="/movies/top-rated" element={<TopRatedMovies />} />
      <Route path="/movies/popular" element={<PopularMovies />} />
    </Routes>
  );
}
