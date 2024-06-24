import { isLogin } from "@/App";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { displayFlexGlobleStyle } from "@utils/styles";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/home", { replace: true });
      return;
    }
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        ...displayFlexGlobleStyle,
        overflowX: "hidden",
        overflowY: "auto",
        background: MGradientsDarkTheme.backroundBlue,
      }}
    >
      {/* <CurrentRoute /> */}
      <Outlet />
    </Box>
  );
};

export default AuthWrapper;
