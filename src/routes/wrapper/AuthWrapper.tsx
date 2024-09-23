import { useGetItemLS } from "@/config/localStorage";
import { ILogin } from "@/pages/auth/utils";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    const user: ILogin | null = useGetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY);
    if (user && user.isLogin) {
      setIsLoggedIn(true);
      navigate("/", { replace: true });
      return;
    } else setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <Box
      sx={{
        height: "100vh",
        background: MGradientsDarkTheme.backroundBlue,
      }}
    >
      {!isLoggedIn && <Outlet />}
    </Box>
  );
};

export default AuthWrapper;
