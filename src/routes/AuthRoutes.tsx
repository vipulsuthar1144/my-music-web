import { Navigate, RouteObject } from "react-router-dom";

const AuthRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={"login"} replace />,
  },
  {
    path: "login",
    element: <>login</>,
  },
  {
    path: "*",
    element: <Navigate to={"login"} replace />,
  },
];

export default AuthRoutes;
