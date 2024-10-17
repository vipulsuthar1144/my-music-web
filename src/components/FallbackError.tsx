import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { Cancel, ListAlt } from "@mui/icons-material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type TErrorComponentType = "page_not_found" | "something_went_wrong" | "data_not_found";

interface IFallbackErrorProps {
  type: TErrorComponentType;
  message?: string;
  description?: string;
}

const FallbackError = ({ type, message = "", description = "" }: IFallbackErrorProps) => {
  const navigate = useNavigate();

  const listenerGoBack = () => {
    navigate("/", { replace: true });
  };

  if (type === "page_not_found") {
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
        <Typography variant="h1">Page Not Found</Typography>
        <Typography variant="h6">Oops! The page you're looking for doesn't exist.</Typography>
        <Button variant="contained" color="primary" onClick={listenerGoBack}>
          Go Home page
        </Button>
      </Box>
    );
  }

  if (type === "something_went_wrong") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          gap: "15px",
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          textAlign: "center",
          p: "10px",
          m: "auto",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: "text.primary" }} />
        <Typography variant="h1">{message == "" ? "Something went wrong." : message}</Typography>
        <Typography variant="h6">{description == "" ? "Oops! It seems there was a problem with the server. Please try again later." : description}</Typography>
      </Box>
    );
  }

  if (type === "data_not_found") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          gap: "15px",
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          textAlign: "center",
          p: "10px",
          m: "auto",
        }}
      >
        <ListAlt sx={{ fontSize: 80, color: "text.primary" }} />
        <Typography variant="h1">{message == "" ? "Empty Data" : message}</Typography>
        <Typography variant="h6">{description == "" ? "The data you're looking for might not available. Please try something else." : description}</Typography>
      </Box>
    );
  }
};

export default FallbackError;
