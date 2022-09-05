import React from "react";
import { Header } from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination/Pagination";

import styles from "./popularmovies.module.sass";

export const PopularMovies = () => {
  return (
    <>
      <Header />
      <h1>Filmes mais populares</h1>
      <Pagination />
    </>
  );
};
