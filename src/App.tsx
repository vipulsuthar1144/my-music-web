import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthWrapper from "./routes/wrapper/AuthWrapper";
import ProtectedWrapper from "./routes/wrapper/ProtectedWrapper";
import AuthRoutes from "./routes/AuthRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
export const isLogin: boolean = true;
function App() {
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
}

export default App;
