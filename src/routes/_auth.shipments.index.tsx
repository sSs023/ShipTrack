import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/shipments/")({
  component: Shipments,
});

function Shipments() {
  return (
    <div className="p-2">
      <h3>About ShipTrack</h3>
    </div>
  );
}
