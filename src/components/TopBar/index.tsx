import { useSetItemLS } from "@/config/localStorage";
import { imgSpotifyGreenSideBarLogo } from "@assets/images";
import { StyledBackIcon, StyledForwardIcon, StyledNotificationIconFilled, StyledSettingIconFilled, StyledThemeModeIconFilled } from "@assets/SVG";
import { LoaderButton } from "@components/Button";
import EditText from "@components/EditText";
import withIconStyles from "@components/HOC/withIconStyles";
import CustomIcon from "@components/HOC/withIconStyles";
import ImageComp from "@components/Image";
import { AccountCircle, ArrowBackIosNewRounded, ArrowForwardIosRounded, CloseRounded, Home, LogoutRounded, SearchRounded } from "@mui/icons-material";
import { AppBar, IconButton, InputAdornment, Stack, TextField, Toolbar } from "@mui/material";
import { LocalStorageKeys, PageRoutes } from "@utils/constants";
import { globleDisplayFlexStyle } from "@utils/globleStyle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        // backgroundColor: "red",
        backgroundImage: "none",
        boxShadow: "none",
        backdropFilter: "blur(50px)",
        height: "fit-content",
        zIndex: 10,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          ...globleDisplayFlexStyle,
          flexDirection: "raw",
          justifyContent: "space-between",
          paddingX: 1,
          position: "relative",
          paddingLeft: "80px",
        }}
      >
        <ImageComp
          img={imgSpotifyGreenSideBarLogo}
          alt="Spotify"
          style={{
            width: "40px",
            position: "absolute",
            top: 15,
            left: 20,
          }}
        />
        <Stack direction={"row"} gap={"0.1rem"} width={"50%"}>
          <StyledBackIcon />
          <StyledForwardIcon />
          <EditText />
        </Stack>
        <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} width={"50%"}>
          <StyledNotificationIconFilled />
          <StyledThemeModeIconFilled />
          <StyledSettingIconFilled />
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
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                useSetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY, { isLogin: false });
                navigate(PageRoutes.AUTH, { replace: true });
                // showCustomToast("Oops! LogOut Failed.", "error");
              }, 2000);
            }}
            loading={loading}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
