import { CSSProperties } from "react";

interface ExtendedCSSProperties extends CSSProperties {
  "&::-webkit-scrollbar"?: CSSProperties;
}

export const globleDisplayFlexStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
};
export const globleRemoveScrollbarStyle: ExtendedCSSProperties = {
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Chrome, Safari, Opera
  } as CSSProperties,
};

// display: '-webkit-box',
// WebkitBoxOrient: 'vertical',
// WebkitLineClamp: 3,  // Number of lines before the ellipsis

export const globleTransitionTime = "0.2s ease";
export const globleEaseInOutTransitionTime = "0.2s ease-in-out";
