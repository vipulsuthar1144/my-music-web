import { CircularProgress, SxProps, Theme } from "@mui/material";

type AppLoaderProps = {
  size?: number;
  thickness?: number;
  sx?: SxProps<Theme>;
};

const AppLoader = ({ size = 40, thickness = 5, sx = { alignSelf: "center", margin: "auto" } }: AppLoaderProps) => {
  return <CircularProgress size={size} thickness={thickness} sx={{ color: "loader.main", ...sx }} />;
};

export default AppLoader;
