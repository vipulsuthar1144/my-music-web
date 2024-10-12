import AlbumDetail from "@/pages/album/AlbumDetail";
import ArtistAlbums from "@/pages/artist/ArtistAlbums";
import ArtistProfile from "@/pages/artist/ArtistProfile";
import RelatedArtist from "@/pages/artist/RelatedArtist";
import SeeAll from "@/pages/details/SeeAll";
import Home from "@/pages/home/Home";
import CategoryPlaylists from "@/pages/playlist/CategoryPlaylists";
import PlaylistDetails from "@/pages/playlist/PlaylistDetails";
import Search from "@/pages/search/Search";
import SeeAllSearch from "@/pages/search/SeeAllSearch";
import { RootContainer } from "@components/styledComponents";
import { Box } from "@mui/material";
import { RouteObject } from "react-router-dom";

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "search",
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: ":searchType/:searchQuery",
        element: <SeeAllSearch />,
      },
    ],
  },
  {
    path: "artist/:artistId",
    children: [
      {
        index: true,
        element: <ArtistProfile />,
      },
      {
        path: "related-artists",
        element: <RelatedArtist />,
      },
      {
        path: "albums",
        element: <ArtistAlbums />,
      },
    ],
  },
  {
    path: "album/:albumId",
    element: <AlbumDetail />,
  },
  {
    path: "playlist/:playlistId",
    element: <PlaylistDetails />,
  },
  {
    path: "category/:categoryId/playlists",
    element: <CategoryPlaylists />,
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
    path: "recent-played",
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

  // {
  //   path: "*",
  //   element: <Navigate to={"/"} replace />,
  // },
];

export default ProtectedRoutes;
