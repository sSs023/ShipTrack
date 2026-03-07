export interface AuthStateContext {
  isAuthenticated: boolean;
  login: (access: string, refresh: string) => void;
  logout: () => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRoles;
}

export type UserRoles = "operator" | "customer";
