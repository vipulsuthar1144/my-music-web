import { ThemeModeContext } from "@/theme/hooks/ThemeModeProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const CurrentRoute = () => {
  const location = useLocation();
  const { themeMode } = useContext(ThemeModeContext);
  return (
    <div>
      <h1>CurrentRoute</h1>

      <h3>current theme ::{themeMode}</h3>
      <h3>hash ::{location.hash}</h3>
      <h3>key ::{location.key}</h3>
      <h3>pathname ::{location.pathname}</h3>
      <h3>search ::{location.search}</h3>
      <h3>state ::{location.state}</h3>
    </div>
  );
};

export default CurrentRoute;
