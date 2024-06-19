import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthWrapper from "./routes/wrapper/AuthWrapper";
const isLogin: boolean = false;
export const isLog: boolean = false;
function App() {
  const rootRoutes = createBrowserRouter(
    [
      {
        path: "/auth/*",
        // element: !isLogin ? <Outlet /> : <Navigate to={"/"} replace />,
        element: <AuthWrapper />,
        children: [
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
        ],
      },
      {
        path: "/*",
        element: isLogin ? <Outlet /> : <Navigate to={"/auth"} replace />,
        children: [
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
        ],
      },
      {
        path: "*",
        element: <>Opps ! Base Route not found</>,
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={rootRoutes} />;
}
export { isLogin };
export default App;
