import { Article, FilmSlate, FilmStrip } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.sass";
import ReactTooltip from "react-tooltip";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/" data-tip="Página inicial" data-text-color="#0fc">
          <ReactTooltip borderColor="#0fc" border />
          <Article size={32} />
        </Link>
        <Link
          to="/category-movies"
          data-tip="Categoria de filmes"
          data-text-color="#0fc"
        >
          <ReactTooltip />

          <FilmSlate size={32} />
        </Link>
        <ReactTooltip />
        <Link
          to="/category-series"
          data-tip="Categoria de séries"
          data-text-color="#0fc"
        >
          <ReactTooltip />

          <FilmStrip size={32} />
        </Link>
      </ul>
    </nav>
  );
};
