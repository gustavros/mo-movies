import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useTitle } from "react-use";
import { Info, Star } from "phosphor-react";
import axios from "axios";
import styles from "./popularmovies.module.sass";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

export const PopularMovies = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const [popularMovies, setPopularMovies] = useState([]);
  let offset = 1;

  useTitle("Filmes mais populares | Mo' Movies");

  const loadMoreMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_KEY
        }&language=pt-BR&page=${offset}`
      )
      .then((response) => {
        setPopularMovies((oldMovies) => [
          ...oldMovies,
          ...response.data.results,
        ]);
      })
      .catch((error) => {
        console.error(error);
      });

    offset += 1;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMoreMovies();
    }
  };

  useEffect(() => {
    loadMoreMovies();

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container__popular}>
        <div className={styles.container__movies__content}>
          <div>
            <h1>MAIS POPULARES</h1>
            <span>Os filmes mais populares.</span>
          </div>
        </div>
        <div className={styles.container__movies}>
          {popularMovies &&
            popularMovies.map((data) => {
              return (
                <div key={data.id} className={styles.container__movie}>
                  <Link to={`/details/${data.id}`}>
                    <div>
                      <h1>{data.title}</h1>
                      {data.adult ? (
                        <span
                          data-tip={`${data.adult ? "" : "+18"}`}
                          data-text-color="#f00"
                        >
                          <ReactTooltip borderColor="#bfbfbf" border />
                          <Info size={18} color="#fff" />
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <img
                      src={`${URL_IMAGE}${data.backdrop_path}`}
                      alt={data.title}
                    />
                  </Link>
                  <div className={styles.container__infos}>
                    <p>
                      {data.vote_average > 8.5 ? (
                        <span>
                          <Star />
                          <Star />
                          <Star />
                        </span>
                      ) : (
                        <span>
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </span>
                      )}
                    </p>
                    <p>{data.original_language}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
