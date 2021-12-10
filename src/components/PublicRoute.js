import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PublicRoute({ children }) {
  const { isLogged } = useAuth();

  return !isLogged() ? children : <Navigate replace to="/home" />;
}
