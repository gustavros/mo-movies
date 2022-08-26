import { Navbar } from "../Navbar/Navbar";
import styles from "./header.module.sass";

export const Header = () => {
  return (
    <header>
      <h1>Mo' Movies</h1>

      <Navbar />
    </header>
  );
};
