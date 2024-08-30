import { Theme, useMediaQuery } from "@mui/material";
import { ThemeModeType } from "../theme/types/theme.mode";

export const DefaultThemeMode: ThemeModeType = "dark";

export const useIsSmallScreen = (theme: Theme) => {
  return useMediaQuery(theme.breakpoints.down("md"));
};

export const LocalStorageKeys = {
  THEME_MODE_VALUE: "THEME_MODE_VALUE",
  AUTH_USER_MODEL_KEY: "AUTH_USER_MODEL_KEY",
};

export const PageRoutes = {
  AUTH: "auth",
  HOME: "home",
  SEARCH: "search",
  FAVORITES: "favorites",
  RECENT_PLAYED: "recent",
  SETTINGS: "settings",
  PROFILE: "profile",
  ALBUMS: "albums",
  ARTIST: "artists",
};
