import React, { useContext } from "react";
import { Header } from "../../../components/Header/Header";
import { useTitle } from "react-use";

export const MoviesCategory = () => {
  useTitle("Categoria de filmes | Mo' Movies");

  return (
    <>
      <Header />
      <h1>CATEGORIA DE FILMES</h1>
    </>
  );
};
