import Callback from "@/pages/auth/Callback";
import FallbackError from "@components/FallbackError";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AuthLayout from "../layouts/Auth.layout";
import ProtectedLayout from "../layouts/Protected.layout";
import AuthRoutes from "./Auth.routes";
import ProtectedRoutes from "./Protected.routes";
import FallbackErrorBoundary from "@components/FallbackErrorBoundary";

const AppRoutes = () => {
  const rootRoutes = createBrowserRouter(
    [
      {
        path: "/auth/",
        element: <AuthLayout />,
        errorElement: <FallbackErrorBoundary />,
        children: AuthRoutes,
      },
      {
        path: "/callback",
        element: <Callback />,
        errorElement: <FallbackErrorBoundary />,
      },
      {
        path: "/",
        element: <ProtectedLayout />,
        errorElement: <FallbackErrorBoundary />,
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
  // return (
  //   <Routes>
  //     <Route path="/auth/*" element={<AuthRoutes />} />
  //     <Route path="/*" element={<ProtectedRoutes />} />
  //   </Routes>
  // );
};

export default AppRoutes;
