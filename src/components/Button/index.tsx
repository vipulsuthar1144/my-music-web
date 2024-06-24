import { Button } from "@mui/material";
import { IGlobalButtonProps } from "@utils/globleTypes";

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
