import { typography } from "./typography";
import { PaletteOptions, Theme, ThemeOptions } from "@mui/material";
import { ThemeModeType } from "../types/theme.mode";
import palette from "./palette";

export const getMUIPalette = (themeMode: ThemeModeType, theme: Theme): ThemeOptions => {
  const mPalette: PaletteOptions = palette[themeMode == "light" ? "lightThemePalette" : "darkThemePalette"];

  return {
    palette: {
      mode: themeMode == "light" ? "light" : "dark",
      ...mPalette,
      ...theme,
    },
    typography,
  };
};
