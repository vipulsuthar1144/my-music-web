import { imgSpotifyGreenLogin } from "@assets/images";
import { LoaderButton } from "@components/Button";
import ImageComp from "@components/Image";
import { RootContainer } from "@components/styledComponents";
import useAuth from "./Auth.hooks";
import LoadingBar from "react-top-loading-bar";
import { mColors } from "@/theme/utils/mColors";
import { useTheme } from "@mui/material";

const Auth = () => {
  const { progress, listenerGoToLoginURL } = useAuth();
  const theme = useTheme();
  return (
    <>
      <LoadingBar color={mColors.loaderPrimary} progress={progress} />
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
        <LoaderButton label={"Login With Spotify"} variant={"contained"} color={"success"} onClick={listenerGoToLoginURL} />
      </RootContainer>
    </>
  );
};

export default Auth;
