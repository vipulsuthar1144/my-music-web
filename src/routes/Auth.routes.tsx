import Auth from "@/pages/auth/Auth";
import { RouteObject } from "react-router-dom";

const AuthRoutes: RouteObject[] = [
  {
    index: true,
    element: <Auth />,
  },
  // {
  //   path: "*",
  //   element: <Navigate to={"/"} replace />,
  // },
];

export default AuthRoutes;

// return (
//   <Routes>
//     <Route path="/" element={<AuthLayout />}>
//       <Route index element={<Auth />} />
//       <Route path="*" element={<FallbackError type="page_not_found" />} />
//     </Route>
//   </Routes>
// );
