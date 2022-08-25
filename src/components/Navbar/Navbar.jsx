import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/category-movies">Filmes</Link>
        <Link to="/category-series">Series</Link>
      </ul>
    </nav>
  );
};
