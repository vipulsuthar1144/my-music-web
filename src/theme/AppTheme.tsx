import { FC } from "react";
import ThemeModeProvider from "./hooks/ThemeModeProvider";
import MTheme from "./wrapper/MTheme";

interface IAppTheme {
  children: React.ReactNode;
}

const AppTheme: FC<IAppTheme> = ({ children }) => {
  return (
    <ThemeModeProvider>
      <MTheme>{children}</MTheme>
    </ThemeModeProvider>
  );
};

export default AppTheme;
