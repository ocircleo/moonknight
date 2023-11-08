import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "../Routex.jsx";
import "./index.css";
import Provider from "./private/provider/Provider.jsx";
import { RouterProvider } from "react-router-dom";
import Data_Provider from "./private/provider/Data_Provider.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = routes;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Data_Provider>
        <RouterProvider router={router} />
      </Data_Provider>
    </Provider>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
