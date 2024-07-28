import { Box } from "@mui/material";
import { globleTransitionTime } from "@utils/styles";
import React from "react";

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
        background: `linear-gradient(to right, rgba(12,11,26,0.8) 60%, rgba(12,11,26,0.1) )`,
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
