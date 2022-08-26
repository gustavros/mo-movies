import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import styles from "./header.module.sass";

export const Header = () => {
  return (
    <header className={styles}>
      <Link to="/">Mo' Movies</Link>

      <Navbar />
    </header>
  );
};
