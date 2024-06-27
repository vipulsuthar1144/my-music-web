import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { displayFlexGlobleStyle } from "@utils/styles";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const ProtectedWrapper = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user == null || !user.isLogin) {
      setIsLoggedIn(false);
      navigate("/auth", { replace: true });
      return;
    } else setIsLoggedIn(true);
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
      {/* <CurrentRoute /> */}
      <LoadingBar color="#f11946" progress={80} onLoaderFinished={() => {}} transitionTime={2000} loaderSpeed={2000} />
      {isLoggedIn && <Outlet />}
    </Box>
  );
};

export default ProtectedWrapper;
