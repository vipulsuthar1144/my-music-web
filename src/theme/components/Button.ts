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
          borderRadius: "40px",
          textTransform: "none",
          padding: "5px 25px",
          "&:hover": {
            opacity: 0.8,
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "primary",
            // [theme.palette.mode == "dark"]: {
            backgroundImage: MGradientsDarkTheme.buttonBgBlue,
            "&:hover": {
              opacity: 1,
              backgroundImage: MGradientsDarkTheme.buttonBgBlueHover,
            },
            // },
          },
        },

        {
          props: { variant: "contained", color: "success" },
          style: {
            color: mColors.black,
            // [theme.palette.mode == "dark"]: {
            backgroundColor: mColors.green,
            "&:hover": {
              opacity: 1,
              backgroundColor: mColors.greenDark,
              // color: mColors.whiteLight,
            },
            // },
          },
        },
      ],
    },
  };
};
