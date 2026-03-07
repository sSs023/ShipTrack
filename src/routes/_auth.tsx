import Header from "@/widgets/header";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },

  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="bg-background flex h-screen flex-col overflow-hidden md:flex-row">
      <Header />
      <div className="flex flex-1 flex-col overflow-hidden pb-16 md:pb-0">
        <Outlet />
      </div>
    </div>
  );
}
