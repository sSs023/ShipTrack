import { Chip } from "@heroui/react";
import type { ShipmentStatus } from "../model/types";
import { shipmentStatusMap } from "../model/shipment-status-map";

export interface ShipmentStatusBadgeProps {
  status: ShipmentStatus;
}

export default function ShipmentStatusBadge({
  status,
}: ShipmentStatusBadgeProps) {
  return (
    <Chip
      variant="flat"
      color={shipmentStatusMap?.[status]?.color || "default"}
      className="rounded-lg"
    >
      <span className="text-xs font-bold">
        {shipmentStatusMap?.[status]?.label || "N/A"}
      </span>
    </Chip>
  );
}
