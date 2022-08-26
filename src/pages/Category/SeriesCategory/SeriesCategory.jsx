import { Header } from "../../../components/Header/Header";
import { useTitle } from "react-use";

export const SeriesCategory = () => {
  useTitle("Categoria de séries | Mo' Movies 🎥");

  return (
    <>
      <Header />
      <h1>CATEGORIA DE SERIES</h1>
    </>
  );
};
