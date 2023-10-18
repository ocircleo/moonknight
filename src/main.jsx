import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "../Routex.jsx";
import "./index.css";
import Provider from "./private/provider/Provider.jsx";
import { RouterProvider } from "react-router-dom";
import Data_Provider from "./private/provider/Data_Provider.jsx";

const router = routes;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Data_Provider>
        <RouterProvider router={router} />
      </Data_Provider>
    </Provider>
  </React.StrictMode>
);
