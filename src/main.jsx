import { DataContextProvider } from "./context/DataContext";

import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

import "/src/styles/app.module.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider value={{}}>
    <App />
  </DataContextProvider>
);
