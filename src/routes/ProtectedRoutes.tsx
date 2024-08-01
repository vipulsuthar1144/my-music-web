import Home from "@/pages/home/Home";
import { Navigate, RouteObject } from "react-router-dom";

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={"home"} replace />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <>About</>,
  },

  {
    path: "search",
    element: <>Search</>,
  },

  {
    path: "favorite",
    element: <>Favorites</>,
  },

  {
    path: "recent",
    element: <>Recent</>,
  },
  {
    path: "settins",
    element: <>Settings</>,
  },

  {
    path: "profile",
    element: <>Profile</>,
  },

  {
    path: "*",
    element: <Navigate to={"home"} replace />,
  },
];

export default ProtectedRoutes;
