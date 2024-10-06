import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/Auth.layout";
import AuthRoutes from "./Auth.routes";
import ProtectedLayout from "../layouts/Protected.layout";
import ProtectedRoutes from "./Protected.routes";

const AppRoutes = () => {
  const rootRoutes = createBrowserRouter(
    [
      {
        path: "/auth/*",
        element: <AuthLayout />,
        children: AuthRoutes,
      },
      {
        path: "/*",
        element: <ProtectedLayout />,
        children: ProtectedRoutes,
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={rootRoutes} />;
};

export default AppRoutes;
