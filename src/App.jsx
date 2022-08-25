import React from "react";
import { Router } from "./Router";

import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};
