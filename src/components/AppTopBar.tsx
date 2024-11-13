import { mColors } from "@/theme/utils/mColors";
import { StyledBackIcon, StyledForwardIcon, StyledNotificationIconFilled, StyledSettingIconFilled, StyledThemeModeIconFilled } from "@assets/SVG";
import { LoaderButton } from "@components/design/Button";
import { LogoutRounded } from "@mui/icons-material";
import { AppBar, Stack, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { showCustomToast } from "@utils/customToast";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const AppTopBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: mColors.EbonyBlack, backgroundImage: "none", boxShadow: "none", zIndex: 10 }} className={classes.appbar}>
      <Toolbar disableGutters sx={{ paddingX: 1 }} className={classes.toolBar}>
        <Stack direction={"row"} gap={"0.1rem"} width={"50%"}>
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
        <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} width={"50%"}>
          <StyledNotificationIconFilled />
          <StyledThemeModeIconFilled />
          <StyledSettingIconFilled onClick={() => showCustomToast("clicked", "info")} />
          {/* <StyledSettingIconFilled onClick={showToast} /> */}
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
      </Toolbar>
    </AppBar>
  );
};

export default AppTopBar;

const useStyles = makeStyles(() => ({
  appbar: {
    top: 0,
    left: 0,
    width: "100%",
    height: "fit-content",
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
}));
