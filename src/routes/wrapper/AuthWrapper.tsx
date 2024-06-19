import { isLog } from "@/App";
import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (isLog) {
      navigate("/", { replace: true });
      return;
    }
  }, []);
  return <Outlet />;
};

export default AuthWrapper;
