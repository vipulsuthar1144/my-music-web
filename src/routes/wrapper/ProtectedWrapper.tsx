import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import AppSideBar from "@components/SideBar";
import TopBar from "@components/TopBar";
import { Box, styled, Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";
import { LocalStorageKeys, PageRoutes, useIsSmallScreen } from "@utils/constants";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  const sidebarWidth = "80px";
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user == null || !user.isLogin) {
      setIsLoggedIn(false);
      navigate(PageRoutes.AUTH, { replace: true });
      return;
    }
    setIsLoggedIn(true);
  }, [isLoggedIn]);

  return (
    <Box component={"div"} className={classes.root}>
      {isLoggedIn && (
        <>
          {!isSmallScreen && (
            <Box className={classes.sidebar}>
              <AppSideBar />
            </Box>
          )}
          <CustomScrollBox ref={containerRef} ml={isSmallScreen ? 0 : sidebarWidth} className={classes.mainContent}>
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
    width: "100%",
    height: "100vh",
    background: MGradientsDarkTheme.backroundBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  sidebar: {
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 11,
  },
  mainContent: {
    width: "100%",
    borderRadius: "10px",
    maxWidth: "1700px",
    height: "100vh",
    // minHeight: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
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
  "::-webkit-scrollbar": {
    width: "12px",
    height: "12px",
    display: "none",
  },
  "::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "::-webkit-scrollbar-thumb": {
    background: theme.palette.text.secondary, // Thumb color
    // borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    // backgroundColor: theme.palette.primary.dark, // Darker color on hover
  },
}));
