import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const MovieDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <h1>Detalhes do filme: {id}</h1>
    </>
  );
};
