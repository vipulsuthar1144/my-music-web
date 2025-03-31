import FallbackErrorBoundary from "@components/FallbackErrorBoundary";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRoutes from "./routes";
import { store } from "./store/store";
import AppTheme from "./theme/AppTheme";

function App() {
  // const { isOnline } = useNetworkStatus();
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("ServiceWorker registration failed:", error);
          });
      });
    }
  }, []);

  // useEffect(() => {
  //   if (isOnline) {
  //     showCustomToast("Back Online", "success");
  //   } else {
  //     showCustomToast("No Internet Connection", "error");
  //   }
  // }, [isOnline]);
  return (
    <ErrorBoundary fallback={<FallbackErrorBoundary />}>
      <Provider store={store}>
        <AppTheme>
          <AppRoutes />
        </AppTheme>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
