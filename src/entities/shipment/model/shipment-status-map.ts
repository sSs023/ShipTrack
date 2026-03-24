import type { ShipmentStatus } from "./types";

export const shipmentStatusMap: Record<
  ShipmentStatus,
  {
    color:
      | "secondary"
      | "default"
      | "primary"
      | "success"
      | "warning"
      | "danger";
    label: string;
  }
> = {
  pending: { color: "warning", label: "Pending" },
  delivered: { color: "default", label: "Delivered" },
  failed: { color: "danger", label: "Failed" },
  in_transit: { color: "secondary", label: "In Transit" },
  out_for_delivery: { color: "secondary", label: "Out For Delivery" },
  processing: { color: "primary", label: "Processing" },
  received: { color: "success", label: "Received" },
};
