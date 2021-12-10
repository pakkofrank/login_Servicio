import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PanelPage from "./pages/PanelPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/panel"
          element={
            <PrivateRoute>
              <PanelPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
