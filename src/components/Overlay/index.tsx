import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Box } from "@mui/material";
import { globleTransitionTime } from "@utils/globleStyle";

type OverlayProps = {
  isShown: boolean;
};

const Overlay = ({ isShown }: OverlayProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: MGradientsDarkTheme.overlay,
        // backdropFilter: "blur(2px)",
        zIndex: 11,
        transition: ` opacity  ${globleTransitionTime}, visibility ${globleTransitionTime}`,
        opacity: isShown ? 0 : 1,
        visibility: isShown ? "hidden" : "visible",
      }}
    ></Box>
  );
};

export default Overlay;
