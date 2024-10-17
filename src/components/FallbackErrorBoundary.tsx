import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Typography } from "@mui/material";

interface IFallbackErrorProps {
  message?: string;
  description?: string;
}

const FallbackErrorBoundary = ({ message = "", description = "" }: IFallbackErrorProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        width: "100%",
        height: "100vh",
        background: MGradientsDarkTheme.backroundBlue,
        textAlign: "center",
        p: "10px",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} />
      <Typography variant="h1">{message == "" ? "Something went wrong with application." : message}</Typography>
      <Typography variant="h6">{description == "" ? "Oops! Please try again later." : description}</Typography>
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Try Again
      </Button>
    </Box>
  );
};

export default FallbackErrorBoundary;
