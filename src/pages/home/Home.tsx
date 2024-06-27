import { useSetItemLS } from "@/config/localStorage";
import { ThemeModeContext, ThemeModeContextType } from "@/theme/hooks/ThemeModeProvider";
import { LocalStorageKeys } from "@utils/constants";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { themeMode, toggleThemeMode } = useContext<ThemeModeContextType>(ThemeModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("home");
  }, []);

  return (
    <div>
      <h1>Home </h1>
      <h4>Current Theme :: {themeMode} </h4>
      <button
        onClick={() => {
          useSetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY, { isLogin: false });
          navigate("/auth", { replace: true });
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
