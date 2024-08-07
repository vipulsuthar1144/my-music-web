import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import TrackPlayer from "@/pages/home/utilityComp/TrackPlayer";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { LoaderAppBar } from "@components/Loader";
import AppSideBar from "@components/SideBar";
import TopBar from "@components/TopBar";
import { Box } from "@mui/material";
import { LocalStorageKeys, PageRoutes } from "@utils/constants";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user == null || !user.isLogin) {
      setIsLoggedIn(false);
      navigate(PageRoutes.AUTH, { replace: true });
      return;
    } else setIsLoggedIn(true);
  }, [isLoggedIn]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "1rem",
        overflowX: "hidden",
        overflowY: "auto",
        background: MGradientsDarkTheme.backroundBlue,
      }}
    >
      {/* <CurrentRoute /> */}
      {/* <LoaderAppBar /> */}

      {isLoggedIn && (
        <>
          <TopBar />
          <AppSideBar />
          <TrackPlayer />
          <Box
            sx={{
              flex: 1,
              ml: "80px",
              mt: "60px",
            }}
          >
            <Outlet />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProtectedWrapper;
