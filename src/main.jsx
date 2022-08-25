import { DataContextProvider } from "./context/DataContext";

import ReactDOM from "react-dom/client";
import "/src/styles/app.module.sass";
import { App } from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider value={{}}>
    <App />
  </DataContextProvider>
);
