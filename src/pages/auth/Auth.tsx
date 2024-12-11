import { appLogoMyMusic } from "@assets/images";
import { LoaderButton } from "@components/design/Button";
import ImageComp from "@components/design/Image";
import { RootContainer } from "@components/design/styledComponents";
import { useTheme } from "@mui/material";
import useAuthController from "./Auth.controller";

const Auth = () => {
  const { listenerGoToLoginURL } = useAuthController();
  const theme = useTheme();
  return (
    <>
      {/* <LoadingBar color={mColors.loaderPrimary} progress={progress} /> */}
      <RootContainer
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageComp
          img={appLogoMyMusic}
          alt="My Music"
          style={{
            width: "25%",
            height: "auto",
            userSelect: "none",
            marginBottom: "30px",
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
        <LoaderButton
          label={"Continue With Spotify"}
          variant={"contained"}
          color={"primary"}
          style={{
            background: "none",
            backgroundColor: "loader.main",
            color: "black",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "loader.main",
              color: "black",
            },
          }}
          onClick={listenerGoToLoginURL}
        />
      </RootContainer>
    </>
  );
};

export default Auth;
