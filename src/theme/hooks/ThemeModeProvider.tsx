import React, { FC, useLayoutEffect, useState } from "react";
import { ThemeModeType } from "../types/theme.mode";
import { DefaultThemeMode, LocalStorageKeys } from "@utils/constants";
import { useGetItemLS, useSetItemLS } from "@/config/localStorage";

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
    const localThemeMode = useGetItemLS<ThemeModeType>(LocalStorageKeys.THEME_MODE_VALUE);
    localThemeMode ? setThemeMode(localThemeMode) : setThemeMode(DefaultThemeMode);
  }, []);

  const toggleThemeMode = () => {
    const value: ThemeModeType = themeMode == "light" ? "dark" : "light";
    setThemeMode(value);
    useSetItemLS<ThemeModeType>(LocalStorageKeys.THEME_MODE_VALUE, value);
  };
  return <ThemeModeContext.Provider value={{ themeMode, setThemeMode, toggleThemeMode }}>{children}</ThemeModeContext.Provider>;
};

export default ThemeModeProvider;
