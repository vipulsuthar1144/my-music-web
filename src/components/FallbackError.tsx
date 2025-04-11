import useLocalStorage from "@/config/hooks/useLocalStorage.hooks";
import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { ListAlt } from "@mui/icons-material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Button, Typography } from "@mui/material";
import { LocalStorageKeys } from "@utils/constants";
import { Navigate, useNavigate } from "react-router-dom";
import ImageComp from "./design/Image";
import { appLogo, appLogoMyMusic } from "@assets/images";

type TErrorComponentType =
  | "page_not_found"
  | "something_went_wrong"
  | "data_not_found"
  | "error_boundary"
  | "access_denied";

interface IFallbackErrorProps {
  type: TErrorComponentType;
  message?: string;
  description?: string;
}

const FallbackError = ({
  type,
  message = "",
  description = "",
}: IFallbackErrorProps) => {
  const navigate = useNavigate();
  const [accessToken] = useLocalStorage(LocalStorageKeys.ACCESS_TOKEN, "");

  const listenerGoBack = () => {
    navigate("/", { replace: true });
  };

  if (type == "access_denied") {
    if (accessToken) {
      return <Navigate to="/" replace={true} />;
    }

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
        {/* <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} /> */}
        <ImageComp
          img={appLogoMyMusic}
          alt="My Music"
          style={{
            width: "200px",
            height: "auto",
            userSelect: "none",
            marginBottom: "10px",
          }}
        />
        <Typography variant="h1" color={"error.main"}>
          Access Denied
        </Typography>
        <Box
          component={"div"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          maxWidth={"600px"}
        >
          <Typography variant="h6">
            This application is currently in its{" "}
            <Box component={"strong"}>Beta Phase</Box> and is available
            exclusively for a limited group of users who have been granted
            access to test and provide feedback.
          </Typography>
          <Typography
            variant="h6"
            paddingInlineStart={"8px"}
            textAlign={"start"}
          >
            However, you can now <Box component={"strong"}>Sign in</Box> using
            the guest account:
            <br></br>
            Email:{" "}
            <Box
              component={"strong"}
              style={{
                userSelect: "text",
              }}
            >
              guest@mymusic.com
            </Box>
            <br></br>
            Password:{" "}
            <Box
              component={"strong"}
              style={{
                userSelect: "text",
              }}
            >
              Guest@mymusic.com
            </Box>
          </Typography>
          <Typography variant="h6">
            If you have any questions or need further assistance or problem,
            please contact on{" "}
            <Box
              component={"strong"}
              style={{
                userSelect: "text",
              }}
            >
              vipulsuthar1144@gmail.com
            </Box>{" "}
            and raise issue on{" "}
            <Box component={"strong"}>
              <a
                href="https://github.com/vipulsuthar1144/my-music-web"
                target="_blank"
              >
                Github
              </a>
            </Box>{" "}
          </Typography>
          <Typography variant="h6">
            Thank you for your understanding and interest in helping us improve
            the application!
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/auth", { replace: true })}
        >
          Go Back
        </Button>
      </Box>
    );
  }

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
        {/* <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} /> */}
        <ImageComp
          img={appLogo}
          alt="My Music"
          style={{
            width: "80px",
            height: "auto",
            userSelect: "none",
            marginBottom: "10px",
          }}
        />
        <Typography variant="h1" color={"error.main"}>
          Page Not Found
        </Typography>
        <Typography variant="h6">
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={listenerGoBack}>
          Go Back
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
        <Typography variant="h1">
          {message == "" ? "Something went wrong." : message}
        </Typography>
        <Typography variant="h6">
          {description == ""
            ? "Oops! It seems there was a problem with the server. Please try again later."
            : description}
        </Typography>
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
        <Typography variant="h3">
          {message == "" ? "Empty Data" : message}
        </Typography>
        <Typography variant="h6">
          {description == ""
            ? "The data you're looking for might not available. Please try something else."
            : description}
        </Typography>
      </Box>
    );
  }

  if (type === "error_boundary") {
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
        {/* <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main" }} /> */}
        <ImageComp
          img={appLogo}
          alt="My Music"
          style={{
            width: "80px",
            height: "auto",
            userSelect: "none",
            marginBottom: "10px",
          }}
        />
        <Typography variant="h1">
          {message == "" ? "Something went wrong with application." : message}
        </Typography>
        <Typography variant="h6">
          {description == "" ? "Oops! Please try again later." : description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Box>
    );
  }
};

export default FallbackError;
