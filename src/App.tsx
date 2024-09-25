import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppTheme from "./theme/AppTheme";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </Provider>
  );
}

export default App;
