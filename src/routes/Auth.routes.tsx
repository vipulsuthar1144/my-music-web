import Auth from "@/pages/auth/Auth";
// import Callback from "@/pages/auth/Callback";
import { RouteObject } from "react-router-dom";

const AuthRoutes: RouteObject[] = [
  {
    index: true,
    element: <Auth />,
  },
  // {
  //   path: "callback",
  //   element: <Callback />,
  // },
];

export default AuthRoutes;
