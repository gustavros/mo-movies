import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

import axios from "axios";
import styles from "./moviedetail.module.sass";
import { parseISO, getYear, format } from "date-fns";
import { Footer } from "../../components/Footer/Footer";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [date, setDate] = useState("");
  const [trailer, setTrailer] = useState([]);
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
        setDate(response.data.release_date);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_KEY
        }&language=pt-BR`
      )
      .then((response) => {
        setTrailer(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container__movie}>
        <img src={`${URL_IMAGE}${movie.poster_path}`} alt={movie.title} />
        <div className={styles.container__movie__content}>
          <div className={styles.container__movie__genres}>
            {genre.map((data) => {
              return (
                <ul key={data.id}>
                  <li>{data.name}</li>
                </ul>
              );
            })}
          </div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className={styles.container__movie__infos}>
            <div>
              <h2>Orçamento:</h2>
              <span>US$ {movie.budget}</span>
            </div>
            <div>
              <h2>Ano de lançamento:</h2>
              <span>{getYear(parseISO(date)).toString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container__movie__trailer}>
        {trailer
          ? trailer.map((video) => {
              return (
                <>
                  <ul key={video.id}>
                    <h2>{video.name}</h2>
                    <iframe
                      width="853"
                      height="480"
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title=""
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    >
                      a
                    </iframe>
                  </ul>
                </>
              );
            })
          : "Trailer"}
      </div>
      <Footer />
    </>
  );
};
