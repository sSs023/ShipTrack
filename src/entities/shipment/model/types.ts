export interface CreateShipmentPayload {
  sender: Sender;
  recipient: Recipient;
  cargo: Cargo;
  deliveryOption: DeliveryOption;
}

export type DeliveryOption = "standard" | "economy" | "express";

export interface Sender {
  name: string;
  address: string;
  phone: string;
}

export interface Recipient {
  name: string;
  address: string;
  phone: string;
}

export interface Cargo {
  description: string;
  weight: number;
  dimensions: string;
}

export type ShipmentStatus =
  | "pending"
  | "received"
  | "processing"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "failed";

export interface TrackingEntry {
  status: ShipmentStatus;
  timestamp: string;
  note: string;
  location: string;
}

export interface IShipment {
  _id: string;
  trackingNumber: string;
  customerId: string;
  sender: Sender;
  recipient: Recipient;
  cargo: Cargo;
  deliveryOption: DeliveryOption;
  status: ShipmentStatus;
  estimatedDelivery: string;
  trackingHistory: TrackingEntry[];
  createdAt: string;
  updatedAt: string;
}

export interface ShipmentListResponse {
  total: number;
  totalPages: number;
  page: number;
  shipments: IShipment[];
}
