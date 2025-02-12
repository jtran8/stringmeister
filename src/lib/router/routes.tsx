import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import HowardPark from "lib/pages/howardpark";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/howardpark",
    element: <HowardPark />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
