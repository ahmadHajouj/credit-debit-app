import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import "./i18n";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* <LoginPage /> */}
  </React.StrictMode>
);
