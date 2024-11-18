import { MGradientsDarkTheme } from "@/theme/utils/mGredient";
import { appLogoMyMusic } from "@assets/images";
import "@components/css/FallbackErrorBoundary.css";
import ImageComp from "./design/Image";

interface IFallbackErrorProps {
  message?: string;
  description?: string;
}

const FallbackErrorBoundary = ({
  message = "",
  description = "",
}: IFallbackErrorProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        width: "100%",
        height: "100vh",
        background: MGradientsDarkTheme.backroundBlue,
        textAlign: "center",
        padding: "10px",
      }}
    >
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
      <h2 style={{ fontSize: "35px" }}>
        {message == "" ? "Something went wrong with application." : message}
      </h2>
      <h6 style={{ fontSize: "20px" }}>
        {description == "" ? "Oops! Please try again later." : description}
      </h6>
      <button onClick={() => window.location.reload()} className="button">
        Try Again
      </button>
    </div>
  );
};

export default FallbackErrorBoundary;
