import { setSearchQuery } from "@/store/slices/search.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { mColors } from "@/theme/utils/mColors";
import { StyledBackIcon, StyledForwardIcon, StyledNotificationIconFilled, StyledSettingIconFilled, StyledThemeModeIconFilled } from "@assets/SVG";
import { LoaderButton } from "@components/Button";
import EditText from "@components/EditText";
import { LogoutRounded } from "@mui/icons-material";
import { AppBar, debounce, Stack, Theme, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChangeEvent, useDeferredValue, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const TopBar = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedQuery, setSearchedQuery] = useState(searchParams.get("q") || "");
  const searchTextFieldRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     dispatch(setSearchQuery(searchedQuery));
  //   }, 500);
  //   return () => clearTimeout(timeout);
  // }, [searchedQuery]);

  useEffect(() => {
    listenerRemoveFocus();
    if (location.pathname != "/search") {
      setSearchedQuery("");
      setSearchParams({});
    } else {
      setSearchedQuery(searchParams.get("q") || "");
    }
    return () => {
      listenerRemoveFocus();
    };
  }, [location.pathname, searchParams]);

  const listenerOnTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedQuery(value);
    value.trim() == "" ? setSearchParams({}) : setSearchParams({ q: value.trim() });
  };

  const listenerOnFocus = () => {
    if (location.pathname != "/search") {
      navigate("/search");
    }
  };

  const listenerRemoveFocus = () => {
    if (searchTextFieldRef.current) searchTextFieldRef.current?.blur();
  };

  const listenerOnCrossBtnClick = () => {
    setSearchParams({});
    setSearchedQuery("");
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
          <EditText
            text={searchedQuery}
            ref={searchTextFieldRef}
            onFocus={listenerOnFocus}
            onTextChange={listenerOnTextChange}
            onCrossBtnClick={listenerOnCrossBtnClick}
            hasCrossIcon={searchedQuery ? true : false}
          />
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
