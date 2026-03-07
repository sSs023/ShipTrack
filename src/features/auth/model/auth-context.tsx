import { createContext } from "react";
import type { AuthStateContext } from "./auth-types";

export const AuthContext = createContext<AuthStateContext | null>(null);
