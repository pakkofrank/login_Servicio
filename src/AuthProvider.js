import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  const login = (accountNumber, password) => {
    setUser({ accountNumber, password });
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
    isLogged: () => !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
