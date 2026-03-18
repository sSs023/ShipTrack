import { Card, Input, Select, SelectItem } from "@heroui/react";
import { CiSearch } from "react-icons/ci";

export default function ShipmentsFilters() {
  return (
    <Card className="flex-row items-center gap-2 p-4">
      <Input
        startContent={<CiSearch className="text-muted text-xl" />}
        placeholder="Search a shipment by tracking number or recipient"
      />
      <Select>
        <SelectItem></SelectItem>
      </Select>
    </Card>
  );
}
