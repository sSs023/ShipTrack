import { ProgressBar } from "@heroui/react";
import { useSearch } from "@tanstack/react-router";

export default function CreateShipmentHeader() {
  const { step = 1 } = useSearch({ from: "/_auth/shipments/new" });
  const value = 90 - (3 - step) * 33;

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] font-black">Book Shipment</h1>
          <p className="text-muted text-base">
            Complete the details below to generate your shipping quote.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-accent text-sm font-semibold">
            Step {step} of 3: Details
          </span>
          <span className="text-muted text-xs">{value}%</span>
        </div>
      </div>
      <ProgressBar value={value} maxValue={100} className="h-2" />
    </div>
  );
}
