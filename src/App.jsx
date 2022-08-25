import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import axios from "axios";

export const App = () => {
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
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};
