import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppTheme from "./theme/AppTheme";
import AppRoutes from "./routes";
function App() {
  return (
    <AppTheme>
      <AppRoutes />
    </AppTheme>
  );
}

export default App;
