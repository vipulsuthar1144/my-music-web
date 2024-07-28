import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import { mColors } from "./mColors";

export interface IExtendedPaletteOptions extends PaletteOptions {
  loader?: PaletteColorOptions;
}

const lightThemePalette: IExtendedPaletteOptions = {};

const darkThemePalette: IExtendedPaletteOptions = {
  primary: {
    main: mColors.darkGray,
  },
  secondary: {
    main: mColors.orange,
  },
  text: {
    primary: mColors.white,
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
  loader: {
    main: mColors.loaderPrimary,
  },
};

export default { lightThemePalette, darkThemePalette };
