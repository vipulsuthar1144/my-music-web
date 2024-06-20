import { ThemeModeContext, ThemeModeContextType } from "@/theme/hooks/ThemeModeProvider";
import { useContext, useEffect } from "react";

const Home: React.FC = () => {
  const { themeMode, toggleThemeMode } = useContext<ThemeModeContextType>(ThemeModeContext);

  useEffect(() => {
    console.log("home");
  }, []);

  return (
    <div>
      <h1>Home </h1>
      <h4>Current Theme :: {themeMode} </h4>
      <button onClick={() => toggleThemeMode()}>toggle theme</button>
    </div>
  );
};

export default Home;
