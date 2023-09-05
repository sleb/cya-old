import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import BaseLayout from "./BaseLayout.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import "./index.css";

const routes = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { element: <NavBar />, children: [{ path: "/", element: <App /> }] },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
