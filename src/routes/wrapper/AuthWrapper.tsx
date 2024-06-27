import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import { mColors } from "@/theme/utils/mColors";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { displayFlexGlobleStyle } from "@utils/styles";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const AuthWrapper = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user && user.isLogin) {
      setIsLoggedIn(true);
      navigate("/home", { replace: true });
      return;
    } else setIsLoggedIn(false);
  }, [isLoggedIn]);

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
      <LoadingBar color={mColors.loaderPrimary} progress={80} onLoaderFinished={() => {}} transitionTime={2000} loaderSpeed={2000} />
      {/* <CurrentRoute /> */}
      {!isLoggedIn && <Outlet />}
    </Box>
  );
};

export default AuthWrapper;
