import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../widgets/header";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function RootLayout() {
  return (
    <>
      <div className="flex gap-2 p-2">
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
