import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootCmp } from "./RootCmp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>
);
