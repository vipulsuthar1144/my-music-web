import FallbackErrorBoundary from "@components/FallbackErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRoutes from "./routes";
import { store } from "./store/store";
import AppTheme from "./theme/AppTheme";

function App() {
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
