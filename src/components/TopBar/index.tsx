import { mColors } from "@/theme/utils/mColors";
import { StyledBackIcon, StyledForwardIcon, StyledNotificationIconFilled, StyledSettingIconFilled, StyledThemeModeIconFilled } from "@assets/SVG";
import { LoaderButton } from "@components/Button";
import EditText from "@components/EditText";
import { LogoutRounded } from "@mui/icons-material";
import { AppBar, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        left: 0,
        backgroundColor: mColors.EbonyBlack,
        backgroundImage: "none",
        boxShadow: "none",
        width: "100%",
        height: "fit-content",
        zIndex: 10,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "raw",
          justifyContent: "space-between",
          paddingX: 1,
          position: "relative",
        }}
      >
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
                localStorage.clear();
                navigate("/auth", { replace: true });
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
