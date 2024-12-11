import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { registerSW } from "virtual:pwa-register";
registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <BrowserRouter basename="/">
  <App />
  // </BrowserRouter>
  // </React.StrictMode>
);
