import AppRouter from "./AppRouter";
import AuthProvider from "./AuthProvider";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <AppRouter />
    </AuthProvider>
  );
}
