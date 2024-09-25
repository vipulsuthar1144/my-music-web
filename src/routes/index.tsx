import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthWrapper from "./wrapper/Auth.wrapper";
import AuthRoutes from "./AuthRoutes";
import ProtectedWrapper from "./wrapper/Protected.wrapper";
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
