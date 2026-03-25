import {
  deliveryOptions,
  ShipmentStatusBadge,
  useShipments,
  type IShipment,
} from "@/entities/shipment";
import { Card, cn, Pagination, Skeleton, Table } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import { LuExternalLink } from "react-icons/lu";

export default function ShipmentsTable() {
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
      label: "Option",
      key: "deliveryOption",
      render: (key: string) => {
        const label = deliveryOptions.find((d) => d.plan === key)?.label;
        return <span className="text-muted text-sm">{label}</span>;
      },
    },
    {
      label: "Status",
      key: "status",
      render: (value: any) => <ShipmentStatusBadge status={value} />,
    },
    {
      label: "Date Created",
      key: "createdAt",
      render: (value: string) => dayjs(value).format("MMM D, YYYY"),
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

  const items = isFetching ? skeletonItems : data?.shipments || [];

  return (
    <Card className="space-y-5">
      <Table className="rounded-none p-0 shadow-none">
        <Table.Header>
          <Table.Collection items={columns}>
            {(column) => (
              <Table.Column
                key={column.key}
                className={cn(
                  column.key === "action" ? "w-0" : "w-max",
                  "text-muted rounded-none! text-xs font-bold tracking-wide uppercase first:pl-6! last:pr-6!",
                )}
              >
                {column.label}
              </Table.Column>
            )}
          </Table.Collection>
        </Table.Header>
        <Table.Body>
          <Table.Collection
            items={items?.map((val, i) => ({
              ...val,
              key: val?._id || `skeleton-${i}`,
            }))}
          >
            {(item) => (
              <Table.Row
                key={item._id}
                className="hover:bg-muted/5 h-14 cursor-pointer transition-all duration-100"
              >
                {(columnKey) => {
                  const col = columns.find((c) => c.key === String(columnKey));
                  return (
                    <Table.Cell className="first:pl-6! last:pr-6!">
                      {isFetching ? (
                        <Skeleton
                          className={cn(
                            "h-5 rounded-md",
                            skeletonWidths[String(columnKey)],
                          )}
                        />
                      ) : (
                        col?.render?.(
                          item[String(columnKey) as keyof IShipment],
                          item,
                        ) || (item as any)[String(columnKey)]
                      )}
                    </Table.Cell>
                  );
                }}
              </Table.Row>
            )}
          </Table.Collection>
        </Table.Body>
      </Table>
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-muted text-sm">Showing 1 to 5 of 24 results</span>
        <Pagination className="w-max">
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous>
                <Pagination.PreviousIcon />
              </Pagination.Previous>
            </Pagination.Item>
            {Array.from({ length: Math.min(data?.total || 1, 5) }, (_, i) => (
              <Pagination.Item key={i}>
                <Pagination.Link isActive={i === 0}>{i + 1}</Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next>
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </div>
    </Card>
  );
}
