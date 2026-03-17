import { Chip } from "@heroui/react";
import type { ShipmentStatus } from "../model/types";

export interface ShipmentStatusBadgeProps {
  status: ShipmentStatus;
}

const colorMap: Record<
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

export default function ShipmentStatusBadge({
  status,
}: ShipmentStatusBadgeProps) {
  return (
    <Chip
      variant="flat"
      color={colorMap?.[status]?.color || "default"}
      className="rounded-lg"
    >
      <span className="text-xs font-bold">
        {colorMap?.[status]?.label || "N/A"}
      </span>
    </Chip>
  );
}
