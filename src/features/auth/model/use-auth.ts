import { useContext } from "react";
import type { AuthStateContext } from "./auth-types";
import { AuthContext } from "./auth-context";

export function useAuth(): AuthStateContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
