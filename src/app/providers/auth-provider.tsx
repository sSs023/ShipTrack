import { AuthContext } from "@/features/auth";
import { useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cookies, setCookie, removeCookie] = useCookies(["access", "refresh"]);

  const login = useCallback(
    (access: string, refresh: string) => {
      setCookie("access", access, { path: "/" });
      setCookie("refresh", refresh, { path: "/" });
    },
    [setCookie],
  );

  const logout = useCallback(() => {
    removeCookie("access");
    removeCookie("refresh");
  }, [removeCookie]);

  const value = useMemo(
    () => ({ isAuthenticated: !!cookies.access, login, logout }),
    [cookies.access, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
