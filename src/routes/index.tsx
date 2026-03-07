import { createFileRoute, redirect } from "@tanstack/react-router";
import DashboardPage from "../views/dashboard/ui/DashboardPage";

export const Route = createFileRoute("/")({
  component: MainPage,
  beforeLoad: ({ context: { isAuthenticated } }) => {
    if (!isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
});

function MainPage() {
  return (
    <div className="p-2">
      <DashboardPage />
    </div>
  );
}
