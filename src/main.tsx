import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import BaseLayout from "./BaseLayout.tsx";
import AuthRequired from "./components/AuthRequired.tsx";
import GameDetails from "./components/GameSearch/GameDetails.tsx";
import GameSearch from "./components/GameSearch/GameSearch.tsx";
import HomePage from "./components/HomePage/HomePage.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import NewGamePage from "./components/NewGame/NewGame.tsx";
import ProfilePage from "./components/Profile/Profile.tsx";
import "./index.css";

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            element: <NavBar />,
            children: [
              {
                path: "/",
                children: [
                  {
                    element: <HomePage />,
                    index: true,
                  },
                  {
                    element: <AuthRequired />,
                    children: [
                      {
                        path: "games",
                        element: <GameSearch />,
                        children: [
                          { path: ":id", element: <GameDetails /> },
                          { path: "new", element: <NewGamePage /> },
                        ],
                      },
                      { path: "profile", element: <ProfilePage /> },
                    ],
                  },
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
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  </React.StrictMode>
);
