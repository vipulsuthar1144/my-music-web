import { Box, Button, CircularProgress, useTheme } from "@mui/material";
import { ILoaderAppBarProps, ILoaderButtonProps } from "./type";
import LoadingBar from "react-top-loading-bar";
import { mColors } from "@/theme/utils/mColors";
import { LoginRounded } from "@mui/icons-material";

export const LoaderAppBar = ({ color = mColors.loaderPrimary, progress = 80, onProgressFinish }: ILoaderAppBarProps) => {
  return <LoadingBar color={color} progress={progress} onLoaderFinished={onProgressFinish} transitionTime={1000} loaderSpeed={1500} />;
};
