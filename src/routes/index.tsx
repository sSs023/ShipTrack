import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: MainPage,
});

function MainPage() {
  return (
    <div className="p-2">
      <h3>Welcome to ShipTrack</h3>
    </div>
  );
}
