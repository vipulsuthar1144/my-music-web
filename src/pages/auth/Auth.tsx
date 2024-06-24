import { ThemeModeContext } from "@/theme/hooks/ThemeModeProvider";
import { imgSpotifyGreen } from "@assets/images";
import { ContainedGreenButton } from "@components/Button";
import ImageComp from "@components/Image";
import { Box, useTheme } from "@mui/material";
import { displayFlexGlobleStyle } from "@utils/styles";
import { useContext } from "react";

const Auth = () => {
  const theme = useTheme();
  const { toggleThemeMode } = useContext(ThemeModeContext);
  return (
    <Box
      sx={{
        ...displayFlexGlobleStyle,
        height: "100%",
        width: "100%",
      }}
    >
      <ImageComp
        img={imgSpotifyGreen}
        alt="Spotify"
        style={{
          width: "30%",
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

      <ContainedGreenButton label={"Login With Spotify"} onClick={toggleThemeMode} style={{ color: "secondary" }} />
    </Box>
  );
};

export default Auth;
