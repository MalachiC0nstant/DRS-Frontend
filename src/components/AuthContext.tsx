import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  refreshAuthStatus: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshAuthStatus = () => {
    setLoading(true);
    axios
      .get("http://localhost:8081/api/user/isAuthenticated", {
        withCredentials: true,
      })
      .then((response) => {
        setIsAuthenticated(response.data === true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error refreshing authentication:", error);
        setIsAuthenticated(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, refreshAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
