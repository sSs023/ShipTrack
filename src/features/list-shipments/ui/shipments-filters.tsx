import type { ShipmentStatus } from "@/entities/shipment";
import { shipmentStatusMap } from "@/entities/shipment/model/shipment-status-map";
import { Card, Input, Select, SelectItem } from "@heroui/react";
import { CiSearch } from "react-icons/ci";

export default function ShipmentsFilters() {
  return (
    <Card className="mb-7 flex-row items-center gap-2 p-4">
      <Input
        startContent={<CiSearch className="text-muted text-xl" />}
        placeholder="Search a shipment by tracking number or recipient"
      />
      <Select
        label={
          <span className="text-muted text-xs font-semibold uppercase">
            Status:
          </span>
        }
        labelPlacement="outside-left"
        items={[
          { key: "All statuses", label: "All" },
          ...Object.keys(shipmentStatusMap).map((key) => ({
            key,
            label: shipmentStatusMap[key as ShipmentStatus].label,
          })),
        ]}
        className="w-70"
      >
        {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
      </Select>
    </Card>
  );
}
