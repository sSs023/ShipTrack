import ShipmentsPage from "@/views/shipments/ui/shipments-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/shipments/")({
  component: Shipments,
});

function Shipments() {
  return <ShipmentsPage />;
}
