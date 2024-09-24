import { useNavigate } from "react-router-dom";
import useLocalStorage from "@/config/localStorage.config";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect, useState } from "react";

const useAuth = () => {
  const authEndpoint = import.meta.env.VITE_APP_AUTH_API_BASE_ENDPOINT;
  const redirectUrl = import.meta.env.VITE_APP_REDIRECT_ENDPOINT;
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];
  const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

  const [loading, setloading] = useState<boolean>(false);
  const [_, setAccessToken] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  const [__, setIsLoggedIn] = useLocalStorage(LocalStorageKeys.IS_LOGGED_IN, false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("auth.hook.ts");

    const token = getAccessTokenFromURL();
    setloading(false);
    window.history.replaceState(null, "", window.location.pathname);
    if (token) {
      setIsLoggedIn(true);
      setAccessToken(token);
      navigate("/");
      // window.location.hash = "";
    } else {
      setIsLoggedIn(false);
    }
    console.log(token);
  }, []);

  const goToLoginURL = () => {
    setloading(true);
    window.location.href = loginURL;
  };

  const getAccessTokenFromURL = (): string => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    return params.get("access_token") ?? "";
  };

  return { loginURL, loading, setloading, getAccessTokenFromURL, goToLoginURL };
};

export default useAuth;
