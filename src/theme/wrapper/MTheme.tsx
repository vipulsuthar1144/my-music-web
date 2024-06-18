import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { ThemeModeContext, ThemeModeContextType } from "../hooks/ThemeModeProvider";
import { deepmerge } from "@mui/utils";
import { getMUIPalette } from "../utils/getMUIPalette";

interface IMThemeProps {
  children?: React.ReactNode;
}

const MTheme: FC<IMThemeProps> = ({ children }) => {
  const { themeMode } = useContext<ThemeModeContextType>(ThemeModeContext);

  let theme = createTheme();

  const mTheme = useMemo(() => {
    theme = deepmerge(theme, getMUIPalette(themeMode, theme));
    theme = responsiveFontSizes(theme);
    return theme;
  }, [themeMode, theme]);

  return (
    <ThemeProvider theme={mTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default MTheme;
