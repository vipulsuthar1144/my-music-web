import { imgSpotifyGreenLogin } from "@assets/images";
import { LoaderButton } from "@components/Button";
import ImageComp from "@components/Image";
import { RootContainer } from "@components/styledComponents";
import { useTheme } from "@mui/material";
import useAuth from "./Auth.hooks";
const Auth = () => {
  const { loading, goToLoginURL } = useAuth();
  const theme = useTheme();

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
      <LoaderButton label={"Login With Spotify"} variant={"contained"} color={"success"} loading={loading} onClick={goToLoginURL} />
    </RootContainer>
  );
};

export default Auth;
