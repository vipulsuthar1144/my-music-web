import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage(LocalStorageKeys.IS_LOGGED_IN, false);

  useLayoutEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
      navigate("/", { replace: true });
      return;
    } else setIsLoggedIn(false);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        background: MGradientsDarkTheme.backroundBlue,
      }}
    >
      {!isLoggedIn && <Outlet />}
    </Box>
  );
};

export default AuthLayout;
