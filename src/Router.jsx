import { Route, Routes } from "react-router-dom";

// * components
import { MoviesCategory } from "./pages/Category/MoviesCategory/MoviesCategory";
import { SeriesCategory } from "./pages/Category/SeriesCategory/SeriesCategory";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category-movies" element={<MoviesCategory />} />
      <Route path="/category-series" element={<SeriesCategory />} />
    </Routes>
  );
}
