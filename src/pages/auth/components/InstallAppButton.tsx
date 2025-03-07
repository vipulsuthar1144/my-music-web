import { LoaderButton } from "@components/design/Button";
import { Download } from "@mui/icons-material";
import { ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

interface IInstallationProps {
  renderKey?: "IS_AUTH_SCREEN" | "IS_TOP_BAR" | "IS_BOTTOM_SHEET";
}

const InstallAppButton = ({
  renderKey = "IS_AUTH_SCREEN",
}: IInstallationProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Listen for the `beforeinstallprompt` event
    const handleBeforeInstallPrompt = (e: any) => {
      console.log("beforeinstallprompt event fired");
      e.preventDefault(); // Prevent the default automatic prompt
      setDeferredPrompt(e); // Save the event for later use
      setIsInstallable(true); // Enable the button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [renderKey]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt?.prompt(); // Show the install prompt
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      setDeferredPrompt(null); // Clear the deferred prompt after it is used
      setIsInstallable(false); // Disable the button if installation is complete
    }
  };

  return (
    <>
      {renderKey === "IS_AUTH_SCREEN" && (
        <LoaderButton
          startIcon={<Download />}
          label={"Download"}
          variant={"contained"}
          color={"primary"}
          disabled={!isInstallable}
          style={{
            cursor: isInstallable ? "pointer" : "not-allowed",
          }}
          onClick={handleInstallClick}
        />
      )}
      {renderKey === "IS_TOP_BAR" && (
        <LoaderButton
          startIcon={<Download />}
          label={"Install App"}
          variant={"outlined"}
          color={"primary"}
          disabled={!isInstallable}
          style={{
            marginLeft: 1.5,
            padding: "5px 18px",
            fontSize: "13px",
            borderRadius: "20px",
            cursor: isInstallable ? "pointer" : "not-allowed",
          }}
          onClick={handleInstallClick}
        />
      )}
      {renderKey === "IS_BOTTOM_SHEET" && (
        <ListItemButton
          disabled={!isInstallable}
          onClick={handleInstallClick}
          sx={{ padding: "10px", gap: "10px" }}
        >
          <Download />
          <ListItemText primary={"Install App"} />
        </ListItemButton>
      )}
    </>
  );
};

export default InstallAppButton;
