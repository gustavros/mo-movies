import { Article, FilmSlate, FilmStrip } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.sass";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <Article size={32} />
        </Link>
        <Link to="/category-movies">
          <FilmSlate size={32} />
        </Link>
        <Link to="/category-series">
          <FilmStrip size={32} />
        </Link>
      </ul>
    </nav>
  );
};
