import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { CookiesProvider } from "react-cookie";
import QueryProvider from "./app/providers/query-provider";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./features/auth";
import AuthProvider from "./app/providers/auth-provider";
import relativeTime from "dayjs/plugin/relativeTime";
import uz from "dayjs/locale/uz-latn";
import dayjs from "dayjs";

dayjs.locale(uz);
dayjs.extend(relativeTime);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const context = useAuth();
  return <RouterProvider router={router} context={context} />;
}

function App() {
  return (
    <HeroUIProvider disableRipple>
      <ToastProvider placement="top-center" />
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <QueryProvider>
          <AuthProvider>
            <InnerApp />
          </AuthProvider>
        </QueryProvider>
      </CookiesProvider>
    </HeroUIProvider>
  );
}

export default App;
