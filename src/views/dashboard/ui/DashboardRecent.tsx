import type { IShipment } from "@/entities/shipment/model/types";
import ShipmentStatusBadge from "@/entities/shipment/ui/shipment-status-badge";
import {
  Card,
  cn,
  getKeyValue,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { LuExternalLink } from "react-icons/lu";
import { useShipments } from "../../../entities/shipment/model/use-shipments";

export default function DashboardRecent() {
  const { data, isFetching } = useShipments();

  const skeletonItems = Array.from(
    { length: 10 },
    (_, i) => ({ _id: `skeleton-${i}` }) as IShipment,
  );

  const skeletonWidths: Record<string, string> = {
    trackingNumber: "w-28",
    recipient: "w-24",
    status: "w-20",
    action: "w-12",
  };

  const columns = [
    {
      label: "Tracking number",
      key: "trackingNumber",
      render: (value: any) => (
        <span className="bg-muted-light/20 rounded-sm px-2 py-0.5 font-mono font-bold">
          {value}
        </span>
      ),
    },
    {
      label: "Recipient",
      key: "recipient",
      render: (value: any) => (
        <span className="text-sm font-medium">{value?.name}</span>
      ),
    },
    {
      label: "Status",
      key: "status",
      render: (value: any) => <ShipmentStatusBadge status={value} />,
    },
    {
      label: "Action",
      key: "action",
      render: (_: any, record: IShipment) => (
        <Link
          to="/shipments/$shipmentId"
          params={{ shipmentId: record?.trackingNumber }}
          className="text-accent flex items-center gap-1 text-sm font-medium"
        >
          View
          <LuExternalLink />
        </Link>
      ),
    },
  ];

  return (
    <Card className="space-y-5">
      <h2 className="px-6 pt-6 text-lg font-bold">Recent Shipments</h2>
      <Table
        classNames={{ wrapper: "shadow-none p-0 rounded-none" }}
        bottomContent={
          <div className="text-muted bg-muted-light/10 hover:bg-muted-light/20 flex cursor-pointer items-center justify-center py-4! text-sm font-bold transition-all">
            Load More History
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className={cn(
                column.key === "action" ? "w-0" : "w-max",
                "text-muted rounded-none! text-xs font-bold tracking-wide uppercase first:pl-6! last:pr-6!",
              )}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={isFetching ? skeletonItems : data?.shipments || []}>
          {(item) => (
            <TableRow
              key={item._id}
              className="hover:bg-muted/5 h-14 cursor-pointer transition-all duration-100"
            >
              {(columnKey) => {
                const column = columns.find((col) => col.key === columnKey);
                return (
                  <TableCell className="first:pl-6! last:pr-6!">
                    {isFetching ? (
                      <Skeleton
                        className={cn(
                          "h-5 rounded-md",
                          skeletonWidths[columnKey as string],
                        )}
                      />
                    ) : (
                      column?.render?.(
                        item[columnKey as keyof IShipment],
                        item,
                      ) || getKeyValue(item, columnKey)
                    )}
                  </TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
