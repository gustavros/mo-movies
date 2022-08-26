import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { DataContext } from "../../context/DataContext";

import axios from "axios";

export const MovieDetail = () => {
  const { id } = useParams();
  const [Movie, setMovie] = useState([]);
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_KEY
        }&language=pt-BR`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <h1>Detalhes do filme: {id}</h1>
      <span>{Movie.video ? "sim" : "não"} </span>
      <h2>{Movie.title}</h2>
      <img src={`${URL_IMAGE}${Movie.poster_path}`} alt="" />
    </>
  );
};
