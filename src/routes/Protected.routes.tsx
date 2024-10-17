import AlbumDetail from "@/pages/album/AlbumDetail";
import AlbumNewRelease from "@/pages/album/AlbumNewRelease";
import ArtistAlbums from "@/pages/artist/ArtistAlbums";
import ArtistProfile from "@/pages/artist/ArtistProfile";
import RelatedArtist from "@/pages/artist/RelatedArtist";

import CategoryPlaylists from "@/pages/playlist/CategoryPlaylists";
import PlaylistDetails from "@/pages/playlist/PlaylistDetails";
import PopularPlaylists from "@/pages/playlist/PopularPlaylists";
import Search from "@/pages/search/Search";
import SeeAllSearch from "@/pages/search/SeeAllSearch";
import RecentPlayed from "@/pages/track/RecentPlayed";
import MyProfile from "@/pages/user/MyProfile";
import SeeAllMyProfile from "@/pages/user/SeeAllMyProfile";
import UserProfile from "@/pages/user/UserProfile";
import { lazy } from "react";
import { Link, Navigate, redirect, RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/Home"));

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "home",
    element: <Navigate to={"/"} replace={true} />,
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
    path: "album/new-release",
    element: <AlbumNewRelease />,
  },
  {
    path: "album/:albumId",
    element: <AlbumDetail />,
  },
  {
    path: "playlist/popular",
    element: <PopularPlaylists />,
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
    path: "track/recent-played",
    element: <RecentPlayed />,
  },
  {
    path: "user/me",
    children: [
      {
        index: true,
        element: <MyProfile />,
      },
      {
        path: "top-tracks",
        element: <SeeAllMyProfile />,
      },
      {
        path: "top-artists",
        element: <SeeAllMyProfile />,
      },
      {
        path: "following",
        element: <SeeAllMyProfile />,
      },
    ],
  },
  {
    path: "user/:userId",
    element: <UserProfile />,
  },
];

export default ProtectedRoutes;
