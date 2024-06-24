import { isLogin } from "@/App";
import CurrentRoute from "@/pages/CurrentRoute";
import { Box } from "@mui/material";
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
  return (
    <Box sx={{ backgroundColor: "primary.main", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CurrentRoute />
      <Outlet />
    </Box>
  );
};

export default ProtectedWrapper;
