import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthWrapper from "./wrapper/AuthWrapper";
import AuthRoutes from "./AuthRoutes";
import ProtectedWrapper from "./wrapper/ProtectedWrapper";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  const rootRoutes = createBrowserRouter(
    [
      {
        path: "/auth/*",
        element: <AuthWrapper />,
        children: AuthRoutes,
      },
      {
        path: "/*",
        element: <ProtectedWrapper />,
        children: ProtectedRoutes,
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={rootRoutes} />;
};

export default AppRoutes;
