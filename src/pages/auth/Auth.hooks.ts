import { useNavigate } from "react-router-dom";
import useLocalStorage from "@/config/useLocalStorage";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect, useState } from "react";

const useAuth = () => {
  const authEndpoint = import.meta.env.VITE_APP_AUTH_API_BASE_ENDPOINT;
  const redirectUrl = import.meta.env.VITE_APP_REDIRECT_ENDPOINT;
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];
  const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

  const [progress, setprogress] = useState(0);
  const [_, setAccessToken] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const [__, setIsLoggedIn] = useLocalStorage(LocalStorageKeys.IS_LOGGED_IN, false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("auth.hook.ts");
    const token = getAccessTokenFromURL();
    window.history.replaceState(null, "", window.location.pathname);
    if (token) {
      setIsLoggedIn(true);
      setAccessToken(token);
      navigate("/", { replace: true });
      return;
    } else {
      setIsLoggedIn(false);
    }
    console.log(token);
  }, []);

  const listenerGoToLoginURL = () => {
    setprogress(100);
    window.location.href = loginURL;
  };

  const getAccessTokenFromURL = (): string => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    return params.get("access_token") ?? "";
  };

  return { progress, listenerGoToLoginURL };
};

export default useAuth;
