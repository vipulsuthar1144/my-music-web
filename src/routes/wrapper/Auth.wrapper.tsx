import useLocalStorage from "@/config/useLocalStorage";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage(LocalStorageKeys.IS_LOGGED_IN, false);

  useEffect(() => {
    console.log("AUth Wrapper");
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

export default AuthWrapper;
