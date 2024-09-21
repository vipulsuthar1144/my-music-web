import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import CurrentRoute from "@/pages/CurrentRoute";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { LoaderAppBar } from "@components/Loader";
import { Box } from "@mui/material";
import { LocalStorageKeys, PageRoutes } from "@utils/constants";
import { globleDisplayFlexStyle } from "@utils/globleStyle";
import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user && user.isLogin) {
      setIsLoggedIn(true);
      navigate(PageRoutes.HOME, { replace: true });
      return;
    } else setIsLoggedIn(false);
    //  ref.current.continuousStart();
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
      <CurrentRoute />
      {/* <LoadingBar color="#f11946" ref={ref} /> */}
      {/* <LoaderAppBar /> */}
      {!isLoggedIn && <Outlet />}
    </Box>
  );
};

export default AuthWrapper;
