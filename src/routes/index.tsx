import { createFileRoute } from "@tanstack/react-router";
import DashboardPage from "../views/dashboard/ui/DashboardPage";

export const Route = createFileRoute("/")({
  component: MainPage,
});

function MainPage() {
  return (
    <div className="p-2">
      <DashboardPage />
    </div>
  );
}
