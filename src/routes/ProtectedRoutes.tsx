import ProfileArtistOrAlbum from "@/pages/details/ProfileArtistOrAlbum";
import SeeAll from "@/pages/details/SeeAll";
import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import { Box } from "@mui/material";
import { Navigate, RouteObject } from "react-router-dom";

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "details",
    element: <ProfileArtistOrAlbum />,
  },
  {
    path: "seeall",
    element: <SeeAll />,
  },
  {
    path: "favorites",
    element: <>Favorites</>,
  },

  {
    path: "recents",
    element: <>Recent</>,
  },
  {
    path: "settings",
    element: <>Settings</>,
  },

  {
    path: "profile",
    element: <Box>profile</Box>,
  },

  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default ProtectedRoutes;
