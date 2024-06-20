import { Navigate, RouteObject } from "react-router-dom";

const ProtectedRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={"home"} replace />,
  },
  {
    path: "home",
    element: <>home</>,
  },
  {
    path: "about",
    element: <>About</>,
  },
  {
    path: "*",
    element: <>Opps ! protected Route not found</>,
  },
];

export default ProtectedRoutes;
