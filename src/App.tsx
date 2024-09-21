import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppTheme from "./theme/AppTheme";
import AppRoutes from "./routes";
import LoadingBar from "react-top-loading-bar";
import { mColors } from "./theme/utils/mColors";
function App() {
  return (
    <AppTheme>
      <LoadingBar color={mColors.loaderPrimary} progress={80} transitionTime={1000} loaderSpeed={1500} />
      <AppRoutes />
    </AppTheme>
  );
}

export default App;
