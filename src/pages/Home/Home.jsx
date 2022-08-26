import React, { useContext } from "react";
import { useTitle } from "react-use";
import { Header } from "../../components/Header/Header";
import { DataContext } from "../../context/DataContext";

export const Home = () => {
  const { topRated } = useContext(DataContext);
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

  console.log(topRated);

  useTitle("Página inicial | Mo' Movies 🎥")

  return (
    <>
      <Header />
      <h1>PÁGINA INICIAL DOS FILMES</h1>

      {topRated &&
        topRated.map((data) => {
          return (
            <div key={data.id}>
              <h1>{data.title}</h1>
              <img src={`${URL_IMAGE}${data.backdrop_path}`} alt="" />
            </div>
          );
        })}
    </>
  );
};
