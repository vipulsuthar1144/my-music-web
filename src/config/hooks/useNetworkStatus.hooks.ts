import { useEffect, useState } from "react";

const getOnLineStatus = () =>
  typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;

const useNetworkStatus = () => {
  const [isOnline, setOnline] = useState<boolean>(getOnLineStatus());

  const updateNetworkStatus = () => {
    setOnline(getOnLineStatus());
  };

  useEffect(() => {
    updateNetworkStatus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("load", updateNetworkStatus, {
      signal: controller.signal,
    });
    window.addEventListener("online", updateNetworkStatus, {
      signal: controller.signal,
    });
    window.addEventListener("offline", updateNetworkStatus, {
      signal: controller.signal,
    });

    return () => {
      // window.removeEventListener("load", updateNetworkStatus);
      // window.removeEventListener("online", updateNetworkStatus);
      // window.removeEventListener("offline", updateNetworkStatus);
      controller.abort();
    };
  }, [navigator.onLine]);

  return { isOnline };
};

export default useNetworkStatus;
