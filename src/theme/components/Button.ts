/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { MGradientsDarkTheme } from "../utils/mGredient";
import { mColors } from "../utils/mColors";
import { globleTransitionTime } from "@utils/globleStyle";

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
          transition: `transform ${globleTransitionTime}`,
          "&:hover": {
            transform: "scale(1.05)",
          },
          "&:active": {
            transform: "scale(1.01)",
          },
          "&.Mui-disabled": {
            color: "inherit",
            backgroundColor: "inherit",
            opacity: 0.5,
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: MGradientsDarkTheme.buttonBgBlue,
          },
        },

        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
            "&.Mui-disabled": {
              backgroundColor: theme.palette.secondary.main,
              opacity: 0.7,
            },
          },
        },

        {
          props: { variant: "text" },
          style: {
            color: "inherit",
            borderRadius: "8px",
            textTransform: "none",
            padding: "5px 10px",
            boxSizing: "border-box",
            transition: `none`,
            "&:hover": {
              transform: "scale(1)",
              textDecoration: "underline",
            },
            "&:active": {
              transform: "scale(0.9)",
            },
            // },
          },
        },

        {
          props: { variant: "contained", color: "success" },
          style: {
            color: mColors.black,
            // [theme.palette.mode == "dark"]: {
            backgroundColor: theme.palette.success.main,
            "&:hover": {
              backgroundColor: theme.palette.success.main,
            },
            "&.Mui-disabled": {
              color: mColors.black,
              backgroundColor: theme.palette.success.main,
            },
            // },
          },
        },
      ],
    },
  };
};
