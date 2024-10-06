import Practice from "@/pages/details/practice";
import ProfileArtistOrAlbum from "@/pages/details/ProfileArtistOrAlbum";
import SeeAll from "@/pages/details/SeeAll";
import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import { ICategory } from "@/schemas/category.schema";
import { store } from "@/store/store";
import { getAllCategories } from "@/store/thunkServices/category.thunksevices";
import { RootContainer } from "@components/styledComponents";
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
    path: "section/",
    element: <SeeAll />,
    // element: <Practice />,
  },
  {
    path: "favorites",
    element: (
      <RootContainer>
        <Box>Favorites</Box>
      </RootContainer>
    ),
  },

  {
    path: "recents",
    element: (
      <RootContainer>
        <Box>recents</Box>
      </RootContainer>
    ),
  },
  {
    path: "settings",
    element: (
      <RootContainer>
        <Box>settings</Box>
      </RootContainer>
    ),
  },

  {
    path: "profile",
    element: (
      <RootContainer>
        <Box>Profile</Box>
      </RootContainer>
    ),
  },

  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default ProtectedRoutes;
