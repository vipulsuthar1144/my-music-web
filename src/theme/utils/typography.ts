import { TypographyOptions } from "@mui/material/styles/createTypography";
import "@assets/fonts/font.css";

export const typography: TypographyOptions = {
  allVariants: {
    fontFamily: ["Ubuntu-medium"].join(","),
    userSelect: "none",
  },
  h1: {
    fontSize: "42px",
    // lineHeight: "44px",
    fontWeight: 600,
    userSelect: "none",
  },
  h2: {
    fontSize: "34px",
    // lineHeight: "40px",
    fontWeight: 500,
    userSelect: "none",
  },
  h3: {
    fontSize: "27px",
    // lineHeight: "32px",
    fontWeight: 500,
    userSelect: "none",
  },
  h4: {
    fontSize: "21px",
    // lineHeight: "24px",
    fontWeight: 500,
    userSelect: "none",
  },
  h5: {
    fontSize: "18px",
    // lineHeight: "20px",
    fontWeight: 500,
    userSelect: "none",
  },
  h6: {
    fontSize: "16px",
    // lineHeight: "24px",
    fontWeight: 500,
  },
  body1: {
    fontSize: "14px",
    // lineHeight: "normal",
    fontWeight: 400,
    userSelect: "none",
  },
  body2: {
    fontSize: "13px",
    // lineHeight: "12px",
    fontWeight: 400,
    userSelect: "none",
  },
  subtitle1: {
    fontSize: "10px",
    // lineHeight: "12px",
    fontWeight: 400,
    userSelect: "none",
  },
  subtitle2: {
    fontSize: "9px",
    // lineHeight: "12px",
    fontWeight: 400,
    userSelect: "none",
  },
  button: {
    textTransform: "capitalize",
    fontWeight: 400,
    letterSpacing: "0.15px",
    userSelect: "none",
  },
  caption: {
    fontSize: "11px",
    userSelect: "none",
  },
  overline: {
    fontSize: "11px",
    userSelect: "none",
  },
};
