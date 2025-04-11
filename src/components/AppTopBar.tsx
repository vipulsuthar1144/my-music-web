import InstallAppButton from "@/pages/auth/components/InstallAppButton";
import { toggleMoreOptionBottomSheet } from "@/store/slices/globleLoader.slice";
import { useAppDispatch } from "@/store/store";
import { mColors } from "@/theme/utils/mColors";
import {
  StyledBackIcon,
  StyledForwardIcon,
  StyledMenuIcon,
  StyledNotificationIconFilled,
} from "@assets/SVG";
import { appLogo } from "@assets/images";
import { LoaderButton } from "@components/design/Button";
import { LogoutRounded } from "@mui/icons-material";
import { AppBar, Stack, Toolbar, useTheme } from "@mui/material";
import { useIsSmallScreen } from "@utils/constants";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import ImageComp from "./design/Image";

const AppTopBar = () => {
  // const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isSmallScreen = useIsSmallScreen(theme);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: mColors.EbonyBlack,
        backgroundImage: "none",
        boxShadow: "none",
        zIndex: 10,
        top: 0,
        left: 0,
        width: "100%",
        height: "fit-content",
      }}
      // className={classes.appbar}
    >
      <Toolbar
        disableGutters
        sx={{
          paddingX: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        // className={classes.toolBar}
      >
        {/* <StyledMenuIcon onClick={() => dispatch(toggleMoreOptionBottomSheet(true))} /> */}

        {isSmallScreen ? (
          <>
            <ImageComp
              img={appLogo}
              onClick={() => navigate("/")}
              alt="Spotify"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
                // ml: "5px",
              }}
            />
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <StyledNotificationIconFilled
                onClick={() => {
                  navigate("/notification");
                }}
              />
              <StyledMenuIcon
                onClick={() => dispatch(toggleMoreOptionBottomSheet(true))}
              />
            </Stack>
          </>
        ) : (
          <>
            <Stack direction={"row"} gap={"0.1rem"} flex={1}>
              <StyledBackIcon
                onClick={() => {
                  navigate(-1);
                }}
              />
              <StyledForwardIcon
                onClick={() => {
                  navigate(1);
                }}
              />
              <SearchBar />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              flex={1}
            >
              <StyledNotificationIconFilled
                onClick={() => {
                  navigate("/notification");
                }}
              />
              {/* <StyledThemeModeIconFilled /> */}
              {/* <StyledSettingIconFilled onClick={() => showCustomToast("clicked", "info")} /> */}
              {/* <StyledSettingIconFilled onClick={showToast} /> */}
              <InstallAppButton renderKey="IS_TOP_BAR" />
              <LoaderButton
                startIcon={<LogoutRounded />}
                label={"LogOut"}
                variant={"contained"}
                color={"primary"}
                style={{
                  marginLeft: 1.5,
                  padding: "6px 20px",
                  fontSize: "14px",
                }}
                onClick={() => {
                  localStorage.clear();
                  navigate("/auth", { replace: true });
                }}
              />
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppTopBar;

// const useStyles = makeStyles(() => ({
//   appbar: {
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "fit-content",
//   },
//   toolBar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// }));
