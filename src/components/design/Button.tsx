import AppLoader from "@components/AppLoader";
import { Box, Button, SxProps, Theme } from "@mui/material";

export interface IGlobalButtonProps {
  label: string;
  sublabel?: string | React.ReactNode;
  disabled?: boolean;
  onClick?: (e: any) => void;
  style?: SxProps<Theme>;
  type?: "submit" | "reset";
  startIcon?: React.ReactElement;
}
export interface ILoaderButtonProps extends IGlobalButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "primary" | "success" | "secondary";
  loading?: boolean;
}

export const ContainedButton = ({
  label,
  onClick,
  disabled,
  style,
  type,
}: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button
      variant="contained"
      color="primary"
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      sx={{ ...style }}
    >
      {label}
    </Button>
  );
};

export const ContainedGreenButton = ({
  label,
  onClick,
  disabled,
  style,
  type,
}: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button
      variant="contained"
      color="success"
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      sx={{ ...style }}
    >
      {label}
    </Button>
  );
};

export const TextButtonPrimary = ({
  label,
  onClick,
  disabled,
  style,
  type,
}: IGlobalButtonProps) => {
  const buttonType = type === "reset" || type === "submit" ? type : "button";
  return (
    <Button
      variant="text"
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
      sx={{ color: "text.primary", ...style }}
    >
      {label}
    </Button>
  );
};

export const LoaderButton = ({
  variant,
  color,
  type,
  onClick,
  label,
  loading = false,
  style,
  startIcon,
  disabled,
}: ILoaderButtonProps) => {
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
        disabled={loading || disabled}
        type={buttonType}
        onClick={onClick}
        sx={{
          ...style,
        }}
        style={{
          cursor: loading || disabled ? "not-allowed" : "pointer",
        }}
      >
        {label}
      </Button>
      {loading && <AppLoader size={24} sx={{ position: "absolute" }} />}
    </Box>
  );
};
