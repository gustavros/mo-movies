import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import axios from "axios";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};
