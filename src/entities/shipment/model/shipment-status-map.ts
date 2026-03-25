import type { ShipmentStatus } from "./types";

export const shipmentStatusMap: Record<
  ShipmentStatus,
  {
    color: "default" | "accent" | "success" | "warning" | "danger";
    label: string;
  }
> = {
  pending: { color: "warning", label: "Pending" },
  delivered: { color: "default", label: "Delivered" },
  failed: { color: "danger", label: "Failed" },
  in_transit: { color: "accent", label: "In Transit" },
  out_for_delivery: { color: "accent", label: "Out For Delivery" },
  processing: { color: "accent", label: "Processing" },
  received: { color: "success", label: "Received" },
};
