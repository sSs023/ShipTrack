import CreateShipmentPage from "@/views/create-shipment/ui/create-shipment-page";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const createSchema = z.object({
  step: z.number().min(1).max(3).optional(),
});

export const Route = createFileRoute("/_auth/shipments/new")({
  component: RouteComponent,
  validateSearch: (search) => {
    return createSchema.parse(search);
  },
});

function RouteComponent() {
  return <CreateShipmentPage />;
}
