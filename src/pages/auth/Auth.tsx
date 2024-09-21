import { useSetItemLS } from "@/config/localStorage";
import { imgSpotifyGreenLogin } from "@assets/images";
import { LoaderButton } from "@components/Button";
import ImageComp from "@components/Image";
import { RootContainer } from "@components/styledComponents";
import { useTheme } from "@mui/material";
import { LocalStorageKeys, PageRoutes } from "@utils/constants";
import { showCustomToast } from "@utils/customToast";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const showToast = () => {
    // toggleThemeMode();
    useSetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY, { isLogin: true });
    navigate(PageRoutes.HOME, { replace: true });
    showCustomToast("login success", "success");
  };
  return (
    <RootContainer
      sx={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageComp
        img={imgSpotifyGreenLogin}
        alt="Spotify"
        style={{
          width: "30%",
          userSelect: "none",
          [theme.breakpoints.down("lg")]: {
            width: "40%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "90%",
          },
        }}
      />

      <LoaderButton label={"Login With Spotify"} variant={"contained"} color={"success"} onClick={showToast} />
    </RootContainer>
  );
};

export default Auth;
