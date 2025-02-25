import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
const token = localStorage.getItem("token");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const loginAuth = async (answer) => {
    if (token) {
      setIsAuthenticated(true);
      return;
    }
    if (answer) {
      localStorage.setItem("token", answer);
      setIsAuthenticated(true);
    }
  };

  const logoutAuth = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
