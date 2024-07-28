/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { MGradientsDarkTheme } from "../utils/mGredient";
import { mColors } from "../utils/mColors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    elevated: true;
    filled: true;
    tonal: true;
    outlined: true;
    text: true;
    contained: true;
    gradient: true;
  }
  interface ButtonPropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

interface MButton {
  MuiButton: {
    defaultProps?: ComponentsProps["MuiButton"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
    variants?: ComponentsVariants["MuiButton"];
  };
}

export const getButton = (theme: Theme): MButton => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "10px 24px",
          boxSizing: "border-box",
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
          "&.Mui-disabled": {
            color: "inherit",
            opacity: 0.5,
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "primary",
            backgroundImage: MGradientsDarkTheme.buttonBgBlue,
          },
        },

        {
          props: { variant: "contained", color: "success" },
          style: {
            color: mColors.black,
            // [theme.palette.mode == "dark"]: {
            backgroundColor: mColors.green,

            // },
          },
        },
      ],
    },
  };
};
