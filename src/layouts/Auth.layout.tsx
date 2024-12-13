import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [accessToken, _] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");
  if (accessToken) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Box
      sx={{
        height: "100vh",
        // background: MGradientsDarkTheme.backroundBlue,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
