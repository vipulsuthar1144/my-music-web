import { setSearchText } from "@/store/slices/search.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { mColors } from "@/theme/utils/mColors";
import { StyledBackIcon, StyledForwardIcon, StyledNotificationIconFilled, StyledSettingIconFilled, StyledThemeModeIconFilled } from "@assets/SVG";
import { LoaderButton } from "@components/Button";
import EditText from "@components/EditText";
import { LogoutRounded } from "@mui/icons-material";
import { AppBar, Stack, Theme, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [loading, setLoading] = useState(false);
  const { searchText } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  const onCrossBtnClick = () => {
    dispatch(setSearchText(""));
  };
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
          <EditText text={searchText} onTestChange={onTextChange} onCrossBtnClick={onCrossBtnClick} hasCrossIcon={searchText ? true : false} />
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

const useStyles = makeStyles(() => ({
  appbar: {
    top: 0,
    left: 0,
    width: "100%",
    height: "fit-content",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
}));
