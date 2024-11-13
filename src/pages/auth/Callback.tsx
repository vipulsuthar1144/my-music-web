import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { RootContainer } from "@components/design/styledComponents";
import { CircularProgress } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const [accessToken, setAccessToken] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/", { replace: true });
      return;
    }
    const token = getAccessTokenFromURL();
    window.history.replaceState(null, "", window.location.pathname);
    if (token) {
      setAccessToken(token);
      navigate("/", { replace: true });
      return;
    } else {
      navigate("/auth", { replace: true });
    }
  }, []);

  const getAccessTokenFromURL = (): string => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    return params.get("access_token") ?? "";
  };

  return (
    <RootContainer
      sx={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: MGradientsDarkTheme.backroundBlue,
      }}
    >
      <CircularProgress size={30} thickness={5} sx={{ color: "loader.main", alignSelf: "center", margin: "auto" }} />
    </RootContainer>
  );
};

export default Callback;
