import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import { Box } from "@mui/material";
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
    element: <Search />,
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
    element: <Box sx={{ width: "100%", minHeight: "45vh" }}>profile</Box>,
  },

  {
    path: "*",
    element: <Navigate to={PageRoutes.HOME} replace />,
  },
];

export default ProtectedRoutes;
