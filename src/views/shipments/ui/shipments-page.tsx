import {
  ShipmentsFilters,
  ShipmentsHeader,
  ShipmentsTable,
} from "@/features/list-shipments";

export default function ShipmentsPage() {
  return (
    <div className="bg-background p-8">
      <ShipmentsHeader />
      <ShipmentsFilters />
      <ShipmentsTable />
    </div>
  );
}
