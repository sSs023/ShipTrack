import { Button } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { FiPlus } from "react-icons/fi";

export default function ShipmentsHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-[30px] font-extrabold">All Shipments</h1>
        <p className="text-muted text-base">
          Manage and track your active and historical freight orders.
        </p>
      </div>
      <Link to="/shipments/new">
        <Button variant="primary" className="text-base font-semibold">
          <FiPlus className="text-lg" />
          Create Shipment
        </Button>
      </Link>
    </div>
  );
}
