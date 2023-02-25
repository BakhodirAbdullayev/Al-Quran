import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SurahsContextProvider from "./utils/SurahsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <SurahsContextProvider>
      <App />
    </SurahsContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
