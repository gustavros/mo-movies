import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Star } from "phosphor-react";
import axios from "axios";

import styles from "./moviedetail.module.sass";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [companies, setCompanies] = useState([]);

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
        setGenre(response.data.genres);
        setCompanies(response.data.production_companies);

        console.log(response.data.production_companies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container__movie}>
        <img src={`${URL_IMAGE}${movie.poster_path}`} alt="" />
        <div className={styles.container__movie__content}>
          {genre.map((data) => {
            return (
              <>
                <span>{data.name}</span>
              </>
            );
          })}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div>
            <span>US$ {movie.budget}</span>
          </div>
        </div>
      </div>
    </>
  );
};
