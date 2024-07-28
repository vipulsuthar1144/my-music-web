import { useSetItemLS } from "@/config/localStorage";
import { imgSpotifyGreenLogin } from "@assets/images";
import { ContainedGreenButton } from "@components/Button";
import ImageComp from "@components/Image";
import { Box, useTheme } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { showCustomToast } from "@utils/customToast";
import { displayFlexGlobleStyle } from "@utils/styles";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const showToast = () => {
    // toggleThemeMode();
    useSetItemLS(LocalStorageKeys.AUTH_USER_MODEL_KEY, { isLogin: true });
    navigate("/home", { replace: true });
    showCustomToast("login success", "success");
  };
  return (
    <Box
      sx={{
        ...displayFlexGlobleStyle,
        height: "100%",
        width: "100%",
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

      <ContainedGreenButton label={"Login With Spotify"} onClick={showToast} style={{ color: "secondary" }} />
      {/* <LoaderButton label={"Login With Spotify"} variant={"contained"} color={"primary"} onClick={showToast} loading={true} /> */}
    </Box>
  );
};

export default Auth;
