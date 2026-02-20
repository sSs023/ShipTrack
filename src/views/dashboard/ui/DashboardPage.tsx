import DashboardStats from "./DashboardStats";
import DashboardWelcome from "./DashboardWelcome";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 px-10 py-9">
      <DashboardWelcome />
      <DashboardStats />
    </div>
  );
}
