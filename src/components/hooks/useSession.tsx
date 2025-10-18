import { useContext } from "react";
import { AuthContext, AuthContextType } from "../../components/providers/AuthProvider";

export const useSession = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
