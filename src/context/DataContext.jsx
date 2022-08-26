import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_KEY
        }&language=pt-BR&page=1`
      )
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_KEY
        }&language=pt-BR&page=1`
      )
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ topRated, popularMovies }}>
      {children}
    </DataContext.Provider>
  );
};
