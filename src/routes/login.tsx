import LoginPage from "@/views/login/ui/login-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}
