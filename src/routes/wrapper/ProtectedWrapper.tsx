import { isLogin } from "@/App";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/auth", { replace: true });
      return;
    }
  });
  return <Outlet />;
};

export default ProtectedWrapper;
