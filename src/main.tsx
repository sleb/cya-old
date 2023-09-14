import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout.tsx";
import GameDetails from "./components/GameSearch/GameDetails.tsx";
import GameSearch from "./components/GameSearch/GameSearch.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import NewGamePage from "./components/NewGame/NewGame.tsx";
import ProfilePage from "./components/Profile/Profile.tsx";
import "./index.css";

const routes = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        element: <NavBar />,
        children: [
          { path: "/profile", element: <ProfilePage /> },
          {
            path: "/",
            element: <GameSearch />,
            children: [
              {
                path: "games",
                children: [
                  { path: ":id", element: <GameDetails /> },
                  { path: "new", element: <NewGamePage /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
