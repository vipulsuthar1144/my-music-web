import { TypographyOptions } from "@mui/material/styles/createTypography";
import "@assets/fonts/font.css";

export const typography: TypographyOptions = {
  allVariants: {
    fontFamily: ["Ubuntu-bold"].join(","),
    userSelect: "none",
  },
  button: {
    fontFamily: ["Ubuntu-medium"].join(","),
  },
};
