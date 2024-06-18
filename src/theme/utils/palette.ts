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
    primary: mColors.offWhite,
    secondary: mColors.lightGrey,
  },
};

export default { lightThemePalette, darkThemePalette };
