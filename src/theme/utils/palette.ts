import { PaletteOptions } from "@mui/material";
import { mColors } from "./mColors";

const lightThemePalette: PaletteOptions = {};

const darkThemePalette: PaletteOptions = {
  primary: {
    main: mColors.darkGray,
  },
  secondary: {
    main: mColors.orange,
  },
  text: {
    primary: mColors.whiteLight,
    secondary: mColors.lightGrey,
  },
  success: {
    main: mColors.green,
    light: mColors.greenLight,
    dark: mColors.greenDark,
  },
  error: {
    main: mColors.red,
    light: mColors.redLight,
    dark: mColors.redDark,
  },
  warning: {
    main: mColors.orange,
    light: mColors.orangeLight,
    dark: mColors.orangeDark,
  },
};

export default { lightThemePalette, darkThemePalette };
