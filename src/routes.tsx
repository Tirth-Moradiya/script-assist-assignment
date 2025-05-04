import { RouteObject } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import LaunchList from "./pages/launches/LaunchList";
import LaunchPage from "./pages/launches/LaunchPage";

export const routes: RouteObject[] = [
  { path: "/", element: <Landing /> },
  { path: "/launches", element: <LaunchList /> },
  { path: "/launches/:id", element: <LaunchPage /> },
];
