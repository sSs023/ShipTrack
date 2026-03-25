import type { ShipmentStatus } from "@/entities/shipment";
import { shipmentStatusMap } from "@/entities/shipment/model/shipment-status-map";
import { Card, InputGroup, Label, ListBox, Select } from "@heroui/react";
import { CiSearch } from "react-icons/ci";

export default function ShipmentsFilters() {
  return (
    <Card className="mb-7 flex-row items-center gap-2 p-4">
      <InputGroup>
        <InputGroup.Prefix>
          <CiSearch className="text-muted text-xl" />
        </InputGroup.Prefix>
        <InputGroup.Input placeholder="Search a shipment by tracking number or recipient" />
      </InputGroup>
      <Select className="w-70">
        <Label className="text-muted text-xs font-semibold uppercase">
          Status:
        </Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="All statuses" textValue="All">
              All
              <ListBox.ItemIndicator />
            </ListBox.Item>
            {Object.keys(shipmentStatusMap).map((key) => (
              <ListBox.Item
                key={key}
                id={key}
                textValue={shipmentStatusMap[key as ShipmentStatus].label}
              >
                {shipmentStatusMap[key as ShipmentStatus].label}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </Card>
  );
}
