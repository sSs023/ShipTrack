import ShipmentsFilters from "./shipments-filters";
import ShipmentsHeader from "./shipments-header";
import ShipmentsTable from "./shipments-table";

export default function ShipmentsPage() {
  return (
    <div className="bg-background p-8">
      <ShipmentsHeader />
      <ShipmentsFilters />
      <ShipmentsTable />
    </div>
  );
}
