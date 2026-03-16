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
