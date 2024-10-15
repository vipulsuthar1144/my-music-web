import { Theme, useMediaQuery } from "@mui/material";
import { ThemeModeType } from "../theme/types/theme.mode";

export const DefaultThemeMode: ThemeModeType = "dark";

export const useIsSmallScreen = (theme: Theme) => {
  return useMediaQuery(theme.breakpoints.down("md"));
};

export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "user-read-private",
  "user-follow-read",
  "user-follow-modify",
];

export const LocalStorageKeys = {
  IS_LOGGED_IN: "IS_LOGGED_IN",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  THEME_MODE_VALUE: "THEME_MODE_VALUE",
  AUTH_USER_MODEL_KEY: "AUTH_USER_MODEL_KEY",
};
