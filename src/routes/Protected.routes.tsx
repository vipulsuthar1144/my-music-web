import AlbumDetail from "@/pages/album/AlbumDetail";
import AlbumNewRelease from "@/pages/album/AlbumNewRelease";
import ArtistAlbums from "@/pages/artist/ArtistAlbums";
import ArtistProfile from "@/pages/artist/ArtistProfile";
import RelatedArtist from "@/pages/artist/RelatedArtist";
import Home from "@/pages/home/Home";
import Notification from "@/pages/notification/Notification";

import CategoryPlaylists from "@/pages/playlist/CategoryPlaylists";
import MyPlaylist from "@/pages/playlist/MyPlaylist";
import PlaylistDetails from "@/pages/playlist/PlaylistDetails";
import PopularPlaylists from "@/pages/playlist/PopularPlaylists";
import Search from "@/pages/search/Search";
import SeeAllSearch from "@/pages/search/SeeAllSearch";
import RecentPlayed from "@/pages/track/RecentPlayed";
import MyProfile from "@/pages/user/MyProfile";
import SeeAllMyProfile from "@/pages/user/SeeAllMyProfile";
import UserProfile from "@/pages/user/UserProfile";
import { Navigate, RouteObject } from "react-router-dom";

// const Home = lazy(() => import("@/pages/home/Home"));

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
    path: "notification",
    element: <Notification />,
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
        path: "playlist",
        element: <MyPlaylist />,
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

// return (
//   <Routes>
//     <Route path="/" element={<ProtectedLayout />}>
//       <Route index element={<Home />} />
//       <Route path="search" element={<Search />} />
//       <Route path="search/:searchType/:searchQuery" element={<SeeAllSearch />} />
//       <Route path="artist/:artistId" element={<ArtistProfile />} />
//       <Route path="artist/:artistId/related-artists" element={<RelatedArtist />} />
//       <Route path="artist/:artistId/albums" element={<ArtistAlbums />} />
//       <Route path="album/new-release" element={<AlbumNewRelease />} />
//       <Route path="album/:albumId" element={<AlbumDetail />} />
//       <Route path="playlist/popular" element={<PopularPlaylists />} />
//       <Route path="playlist/:playlistId" element={<PlaylistDetails />} />
//       <Route path="category/:categoryId/playlists" element={<CategoryPlaylists />} />
//       <Route path="track/recent-played" element={<RecentPlayed />} />
//       <Route path="user/me" element={<MyProfile />} />
//       <Route path="user/me/top-tracks" element={<SeeAllMyProfile />} />
//       <Route path="user/me/top-artists" element={<SeeAllMyProfile />} />
//       <Route path="user/me/following" element={<SeeAllMyProfile />} />
//       <Route path="user/:userId" element={<UserProfile />} />
//       <Route path="*" element={<FallbackError type="page_not_found" />} />
//     </Route>
//   </Routes>
// );
