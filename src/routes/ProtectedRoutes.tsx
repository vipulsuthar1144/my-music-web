import Home from "@/pages/home/Home";
import { PageRoutes } from "@utils/constants";
import { Navigate, RouteObject } from "react-router-dom";

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={PageRoutes.HOME} replace />,
  },
  {
    path: PageRoutes.HOME,
    element: <Home />,
  },

  {
    path: PageRoutes.SEARCH,
    element: <>Search</>,
  },

  {
    path: PageRoutes.FAVORITES,
    element: <>Favorites</>,
  },

  {
    path: PageRoutes.RECENT_PLAYED,
    element: <>Recent</>,
  },
  {
    path: PageRoutes.SETTINGS,
    element: <>Settings</>,
  },

  {
    path: PageRoutes.PROFILE,
    element: <>Profile</>,
  },

  {
    path: "*",
    element: <Navigate to={PageRoutes.HOME} replace />,
  },
];

export default ProtectedRoutes;
