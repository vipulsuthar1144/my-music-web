import { FC } from "react";
import ThemeModeProvider from "./hooks/ThemeModeProvider";
import MTheme from "./wrapper/MTheme";

interface IAppThemeProps {
  children: React.ReactNode;
}

const AppTheme: FC<IAppThemeProps> = ({ children }) => {
  return (
    <ThemeModeProvider>
      <MTheme>{children}</MTheme>
    </ThemeModeProvider>
  );
};

export default AppTheme;
