import React, { FC, useLayoutEffect, useState } from "react";
import { ThemeModeType } from "../types/theme.mode";
import { DefaultThemeMode, LocalStorageKeys } from "@utils/constants";
import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";

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
  const [theme, setTheme] = useLocalStorage(LocalStorageKeys.THEME_MODE_VALUE, DefaultThemeMode);

  useLayoutEffect(() => {
    console.log("Theme mode Provider");

    theme ? setThemeMode(theme) : setThemeMode(DefaultThemeMode);
  }, []);

  const toggleThemeMode = () => {
    const value: ThemeModeType = themeMode == "light" ? "dark" : "light";
    setThemeMode(value);
    setTheme(value);
  };
  return <ThemeModeContext.Provider value={{ themeMode, setThemeMode, toggleThemeMode }}>{children}</ThemeModeContext.Provider>;
};

export default ThemeModeProvider;
