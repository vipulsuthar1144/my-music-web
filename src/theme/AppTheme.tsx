import { FC } from "react";
import ThemeModeProvider from "./hooks/ThemeModeProvider";
import MTheme from "./wrapper/MTheme";
import { Theme, useTheme } from "@mui/material";
import { IExtendedPalette, IExtendedPaletteOptions } from "./utils/palette";

interface IAppThemeProps {
  children: React.ReactNode;
}

export interface IAppTheme extends Theme {
  palette: IExtendedPalette;
}

const AppTheme: FC<IAppThemeProps> = ({ children }) => {
  return (
    <ThemeModeProvider>
      <MTheme>{children}</MTheme>
    </ThemeModeProvider>
  );
};

export default AppTheme;
