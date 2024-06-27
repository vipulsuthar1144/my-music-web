import { Button, CircularProgress } from "@mui/material";
import { ILoaderButtonProps } from "./type";

export const LoaderButton = ({ variant, color, type, onClick, label, loading, style }: ILoaderButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button
      variant={variant}
      color={color}
      disabled={loading}
      type={buttonType}
      onClick={onClick}
      sx={{
        position: "relative",
        ...style,
      }}
    >
      {label}
      {loading && <CircularProgress size={24} sx={{ color: "loader.main", position: "absolute" }} />}
    </Button>
  );
};
