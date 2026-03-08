import LoginPage from "@/views/login/ui/login-page";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
  beforeLoad: ({ context: { isAuthenticated } }) => {
    if (isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
});

function RouteComponent() {
  return <LoginPage />;
}
