import { Box, Button, CircularProgress } from "@mui/material";
import { CSSProperties } from "react";

export interface IGlobalButtonProps {
  label: string;
  sublabel?: string | React.ReactNode;
  disabled?: boolean;
  onClick?: (e: any) => void;
  style?: CSSProperties;
  type?: "submit" | "reset";
  startIcon?: React.ReactElement;
}
export interface ILoaderButtonProps extends IGlobalButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "primary" | "success" | "secondary";
  loading?: boolean;
}

export const ContainedButton = ({ label, onClick, disabled, style, type }: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button variant="contained" color="primary" type={buttonType} disabled={disabled} onClick={onClick} style={{ ...style }}>
      {label}
    </Button>
  );
};

export const ContainedGreenButton = ({ label, onClick, disabled, style, type }: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button variant="contained" color="success" type={buttonType} disabled={disabled} onClick={onClick} style={{ ...style }}>
      {label}
    </Button>
  );
};

export const TextButtonPrimary = ({ label, onClick, disabled, style, type }: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button variant="text" sx={{ color: "text.primary" }} type={buttonType} disabled={disabled} onClick={onClick} style={{ ...style }}>
      {label}
    </Button>
  );
};

export const LoaderButton = ({ variant, color, type, onClick, label, loading = false, style, startIcon }: ILoaderButtonProps) => {
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
        startIcon={startIcon}
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
