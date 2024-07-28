import { Box, Button, CircularProgress } from "@mui/material";
import { ILoaderAppBarProps, ILoaderButtonProps } from "./type";
import LoadingBar from "react-top-loading-bar";
import { mColors } from "@/theme/utils/mColors";

export const LoaderButton = ({ variant, color, type, onClick, label, loading, style }: ILoaderButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant={variant}
        color={color}
        disabled={loading}
        type={buttonType}
        onClick={onClick}
        sx={{
          ...style,
        }}
      >
        {label}
      </Button>
      {loading && <CircularProgress size={24} thickness={5} sx={{ color: "loader.main", position: "absolute" }} />}
    </Box>
  );
};

export const LoaderAppBar = ({ color = mColors.loaderPrimary, progress = 80, onProgressFinish }: ILoaderAppBarProps) => {
  return <LoadingBar color={color} progress={progress} onLoaderFinished={onProgressFinish} transitionTime={1000} loaderSpeed={1500} />;
};
