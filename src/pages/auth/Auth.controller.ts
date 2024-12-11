import { scopes } from "@utils/constants";

const useAuthController = () => {
  const authEndpoint = import.meta.env.VITE_APP_AUTH_API_BASE_ENDPOINT;
  const redirectUrl = import.meta.env.VITE_APP_REDIRECT_ENDPOINT;
  // const redirectUrl = "https://8n82gcg3-1818.inc1.devtunnels.ms/auth/callback";
  const clientId = import.meta.env.VITE_APP_CLIENT_ID;
  const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

  const listenerGoToLoginURL = () => {
    window.location.href = loginURL;
  };

  return { listenerGoToLoginURL };
};

export default useAuthController;
