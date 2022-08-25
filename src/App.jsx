import React from "react";
import { Router } from "./Router";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};
