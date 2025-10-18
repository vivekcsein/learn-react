import { createContext, useState, ReactNode } from "react";

// ----------------------
// Dummy User (for demo)
// ----------------------

interface UserType {
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}

const mockUser: UserType = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  role: "USER",
};

// ----------------------
// Types and Interfaces
// ----------------------
interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  signin: () => void;
  signup: () => void;
  signout: () => void;
}

// ----------------------
// Context Initialization
// ----------------------

export const AuthContext = createContext<AuthContextType | null>(null);

// ----------------------
// Provider Component
// ----------------------

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);

  // Simulate user import (e.g., from API or localStorage)
  const loadUser = () => {
    setTimeout(() => {
      setIsAuthenticated(true);
      setUser((prevUser) => prevUser ?? mockUser);
    }, 1000);
  };

  const signoutUser = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const signin = () => {
    try {
      loadUser();
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  const signup = () => {
    try {
      loadUser();
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const signout = () => {
    try {
      signoutUser();
    } catch (error) {
      console.error("Signout failed:", error);
    }
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    user,
    signin,
    signup,
    signout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// ----------------------
// Custom Hook (Optional)
// ----------------------

// export const useSession = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
