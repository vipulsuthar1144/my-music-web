import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import TrackPlayer from "@/pages/player/TrackPlayer";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import AppSideBar from "@components/SideBar";
import TopBar from "@components/TopBar";
import { Box, styled, Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys, useIsSmallScreen } from "@utils/constants";
import { sidebarWidth } from "@utils/globleStyle";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current && containerRef.current.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user == null || !user.isLogin) {
      setIsLoggedIn(false);
      navigate("/auth", { replace: true });
      return;
    }
    setIsLoggedIn(true);
  }, [isLoggedIn]);

  return (
    <Box className={classes.root}>
      {isLoggedIn && (
        <>
          {/* {!isSmallScreen && <TrackPlayer />} */}
          {!isSmallScreen && <AppSideBar />}
          <CustomScrollBox
            ref={containerRef}
            ml={isSmallScreen ? 0 : sidebarWidth}
            sx={{
              "::-webkit-scrollbar": {
                width: isSmallScreen ? "0px" : "5px",
              },
            }}
          >
            <TopBar />
            <Outlet />
            <Box className={classes.footer}>this is footer</Box>
          </CustomScrollBox>
        </>
      )}
    </Box>
  );
};

export default ProtectedWrapper;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    background: MGradientsDarkTheme.backroundBlue,
    display: "flex",
  },
  footer: {
    marginTop: "10px",
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    height: "400px",
    borderRadius: "10px",
  },
}));

export const CustomScrollBox = styled(Box)(({ theme }) => ({
  width: "100%",
  // overflow: "hidden",
  overflow: "hidden  auto",
  height: "100vh",
  borderRadius: "20px",
  "::-webkit-scrollbar": {
    width: "5px",
    // height: "12px",
    // display: "none",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    background: theme.palette.text.secondary, // Thumb color
    borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    // backgroundColor: theme.palette.primary.dark, // Darker color on hover
  },
}));
