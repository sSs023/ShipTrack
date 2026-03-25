import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { type AuthStateContext } from "../features/auth";
import ErrorPage from "../shared/ui/error-page";
import NotFound from "../shared/ui/not-found";

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
  errorComponent: ErrorPage,
  notFoundComponent: NotFound,
});
