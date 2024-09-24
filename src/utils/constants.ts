import { Theme, useMediaQuery } from "@mui/material";
import { ThemeModeType } from "../theme/types/theme.mode";

export const DefaultThemeMode: ThemeModeType = "dark";

export const useIsSmallScreen = (theme: Theme) => {
  return useMediaQuery(theme.breakpoints.down("md"));
};

export const LocalStorageKeys = {
  IS_LOGGED_IN: "IS_LOGGED_IN",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  THEME_MODE_VALUE: "THEME_MODE_VALUE",
  AUTH_USER_MODEL_KEY: "AUTH_USER_MODEL_KEY",
};
