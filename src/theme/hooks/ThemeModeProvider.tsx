import React, { FC, useLayoutEffect, useState } from "react";
import { ThemeModeType } from "../types/theme.mode";
import { DefaultThemeMode, LocalStorageKeys } from "@/src/utils/appConstant";

interface IThemeModeProvider {
  children: React.ReactNode;
}

export type ThemeModeContextType = {
  themeMode: ThemeModeType;
  setThemeMode: (themeMode: ThemeModeType) => void;
  toggleThemeMode: () => void;
};

export const ThemeModeContext: React.Context<ThemeModeContextType> = React.createContext<ThemeModeContextType>({
  themeMode: DefaultThemeMode,
  setThemeMode: () => {},
  toggleThemeMode: () => {},
});

const ThemeModeProvider: FC<IThemeModeProvider> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(DefaultThemeMode);

  useLayoutEffect(() => {
    if (localStorage.getItem(LocalStorageKeys.THEME_MODE_VALUE)) {
      let localThemeMode = JSON.parse(localStorage.getItem(LocalStorageKeys.THEME_MODE_VALUE) || DefaultThemeMode);
      setThemeMode(localThemeMode);
    }
  }, []);

  const toggleThemeMode = () => {
    let value: ThemeModeType = themeMode === "light" ? "dark" : "light";
    setThemeMode(value);
    localStorage.setItem(LocalStorageKeys.THEME_MODE_VALUE, JSON.stringify(value));
  };
  return <ThemeModeContext.Provider value={{ themeMode, setThemeMode, toggleThemeMode }}>{children}</ThemeModeContext.Provider>;
};

export default ThemeModeProvider;
