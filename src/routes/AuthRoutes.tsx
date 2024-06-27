import Auth from "@/pages/auth/Auth";
import { Navigate, RouteObject } from "react-router-dom";

const AuthRoutes: RouteObject[] = [
  {
    index: true,
    // element: <Navigate to={"login"} replace />,
    element: <Auth />,
  },
  // {
  //   path: "login",
  //   element: <Auth />,
  // },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];

export default AuthRoutes;
