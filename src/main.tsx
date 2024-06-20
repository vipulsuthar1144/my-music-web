import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppTheme from "./theme/AppTheme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AppTheme>
    <App />
  </AppTheme>

  // </React.StrictMode>
);
