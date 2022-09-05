import { useContext } from "react";
import { useTitle } from "react-use";
import { Header } from "../../components/Header/Header";
import { DataContext } from "../../context/DataContext";
import { Info, Star } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./home.module.sass";
import ReactTooltip from "react-tooltip";

export const Home = () => {
  useTitle("Página inicial | Mo' Movies");

  const { topRated, popularMovies } = useContext(DataContext);
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Header />
      <div className={styles.container__popular}>
        <div className={styles.container__movies__content}>
          <div>
            <h1>MAIS POPULARES</h1>
            <span>Os filmes mais populares.</span>
          </div>
          <Link to={"/popular"}>Ver mais</Link>
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

      <div className={styles.container__rated}>
        <div className={styles.container__movies__content__rated}>
          <div>
            <h1>MAIS AVALIADOS</h1>
            <span>Os filmes mais votados.</span>
          </div>
          <Link to={"/top-rated"}>Ver mais</Link>
        </div>
        <div className={styles.container__movies__rated}>
          {topRated &&
            topRated.map((data) => {
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
