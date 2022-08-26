import { useContext } from "react";
import { useTitle } from "react-use";
import { Header } from "../../components/Header/Header";
import { DataContext } from "../../context/DataContext";
import { Star } from "phosphor-react";
import { Link } from "react-router-dom";

export const Home = () => {
  useTitle("Página inicial | Mo' Movies 🎥");

  const { topRated } = useContext(DataContext);
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Header />
      <h1>FILMES EM ALTA</h1>

      <div>
        {topRated &&
          topRated.map((data) => {
            return (
              <div key={data.id}>
                <Link to={`movie/${data.id}`}>
                  <h1>{data.title}</h1>
                  <img src={`${URL_IMAGE}${data.backdrop_path}`} alt="" />
                </Link>

                <div>
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
    </>
  );
};
