import { Theme } from "@mui/material";
import { getButton } from "../components/Button";

type MComponents = { components: Theme["components"] };

export const getMUIComponents = (theme: Theme) => {
  return {
    components: {
      ...getButton(theme),
    },
  } as MComponents;
};
