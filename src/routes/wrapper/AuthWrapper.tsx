import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { LoaderAppBar } from "@components/Loader";
import { Box } from "@mui/material";
import { LocalStorageKeys, PageRoutes } from "@utils/constants";
import { globleDisplayFlexStyle } from "@utils/globleStyle";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user && user.isLogin) {
      setIsLoggedIn(true);
      navigate(PageRoutes.HOME, { replace: true });
      return;
    } else setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        ...globleDisplayFlexStyle,
        overflowX: "hidden",
        overflowY: "auto",
        background: MGradientsDarkTheme.backroundBlue,
      }}
    >
      {/* <CurrentRoute /> */}
      <LoaderAppBar />
      {!isLoggedIn && <Outlet />}
    </Box>
  );
};

export default AuthWrapper;
