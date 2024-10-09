import Auth from "@/pages/auth/Auth";
import { RouteObject } from "react-router-dom";

const AuthRoutes: RouteObject[] = [
  {
    index: true,
    element: <Auth />,
  },
  // {
  //   path: "*",
  //   element: <Navigate to={"/"} replace />,
  // },
];

export default AuthRoutes;
