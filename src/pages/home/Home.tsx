import { useSetItemLS } from "@/config/localStorage";
import { ThemeModeContext, ThemeModeContextType } from "@/theme/hooks/ThemeModeProvider";
import { LoaderButton } from "@components/Loader";
import { LocalStorageKeys } from "@utils/constants";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { themeMode } = useContext<ThemeModeContextType>(ThemeModeContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("home");
  }, []);

  return (
    <div>
      <h1>Home </h1>
      <h4>Current Theme :: {themeMode} </h4>
      <LoaderButton
        label={"LogOut"}
        variant={"contained"}
        color={"primary"}
        onClick={() => {
          // setLoading(true);
          // setTimeout(() => {
          //   setLoading(false);
          //   showCustomToast("Oops! LogOut Failed.", "error");
          // }, 2000);
          useSetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY, { isLogin: false });
          navigate("/auth", { replace: true });
        }}
        loading={loading}
      />
    </div>
  );
};

export default Home;
