import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { type AuthStateContext } from "../features/auth";

function RootLayout() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRouteWithContext<AuthStateContext>()({
  component: RootLayout,
  // notFoundComponent: () => <Navigate to="/chats" />,
});
