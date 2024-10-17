import Callback from "@/pages/auth/Callback";
import FallbackError from "@components/FallbackError";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/Auth.layout";
import ProtectedLayout from "../layouts/Protected.layout";
import AuthRoutes from "./Auth.routes";
import ProtectedRoutes from "./Protected.routes";

const AppRoutes = () => {
  const rootRoutes = createBrowserRouter(
    [
      {
        path: "/auth/",
        element: <AuthLayout />,
        errorElement: <FallbackError type="error_boundry" />,
        children: AuthRoutes,
      },
      {
        path: "/callback",
        element: <Callback />,
        errorElement: <FallbackError type="error_boundry" />,
        children: AuthRoutes,
      },
      {
        path: "/",
        element: <ProtectedLayout />,
        errorElement: <FallbackError type="error_boundry" />,
        children: ProtectedRoutes,
      },
      {
        path: "*",
        element: <FallbackError type="page_not_found" />,
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={rootRoutes} />;
};

export default AppRoutes;
