import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import TrackPlayer from "@/pages/player/TrackPlayer";
import { sidebarWidth } from "@/theme/utils/globalTransitions";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import AppBottomNavigation from "@components/AppBottomNavigation";
import AppFooter from "@components/AppFooter";
import AppSideBar from "@components/AppSideBar";
import AppTopBar from "@components/AppTopBar";
import MoreOptionBottomSheet from "@components/MoreOptionBottomSheet";
import { Box, styled, Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalStorageKeys, useIsSmallScreen } from "@utils/constants";
import { useEffect, useRef } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen(theme);
  const classes = useStyles();
  const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current && containerRef.current.scrollTo(0, 0);
  }, [location.pathname]);

  if (!accessToken) {
    return <Navigate to="/auth" replace={true} />;
  }

  return (
    <Box className={classes.root}>
      {!isSmallScreen && <TrackPlayer />}
      {!isSmallScreen && <AppSideBar />}
      {isSmallScreen && <AppBottomNavigation />}

      <CustomScrollBox
        ref={containerRef}
        ml={isSmallScreen ? 0 : sidebarWidth}
        sx={{
          "::-webkit-scrollbar": {
            width: isSmallScreen ? "0px" : "5px",
          },
        }}
      >
        {/* {!isSmallScreen && <AppTopBar />} */}
        <MoreOptionBottomSheet />
        <AppTopBar />
        <Outlet />
        <AppFooter />
      </CustomScrollBox>
    </Box>
  );
};

export default ProtectedLayout;

const useStyles = makeStyles((_: Theme) => ({
  root: {
    height: "100vh",
    background: MGradientsDarkTheme.backroundBlue,
    display: "flex",
    justifyContent: "center",
  },
}));

export const CustomScrollBox = styled(Box)(({ theme }) => ({
  width: "100%",
  // flex: 1,
  maxWidth: "1800px",
  // overflow: "hidden",
  overflow: "hidden  auto",
  height: "100vh",
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
