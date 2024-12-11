import FallbackError from "@components/FallbackError";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/Auth.layout";
import ProtectedLayout from "../layouts/Protected.layout";
import AuthRoutes from "./Auth.routes";
import ProtectedRoutes from "./Protected.routes";
import Callback from "@/pages/auth/Callback";

const AppRoutes = () => {
  const rootRoutes = createBrowserRouter(
    [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: AuthRoutes,
        errorElement: <FallbackError type="error_boundary" />,
      },
      {
        path: "/callback",
        element: <Callback />,
        errorElement: <FallbackError type="error_boundary" />,
      },
      {
        path: "/access_denied",
        element: <FallbackError type="access_denied" />,
        errorElement: <FallbackError type="error_boundary" />,
      },
      {
        path: "/",
        element: <ProtectedLayout />,
        children: ProtectedRoutes,
        errorElement: <FallbackError type="error_boundary" />,
      },
      {
        path: "*",
        element: <FallbackError type="page_not_found" />,
      },
    ],
    {
      basename: "/",
      future: {
        // v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return <RouterProvider router={rootRoutes} />;
};

export default AppRoutes;
