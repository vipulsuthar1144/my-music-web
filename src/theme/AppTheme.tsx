import { Theme } from "@mui/material";
import { FC } from "react";
import ThemeModeProvider from "./hooks/ThemeModeProvider";
import { IExtendedPalette } from "./utils/palette";
import MTheme from "./wrapper/MTheme";

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
