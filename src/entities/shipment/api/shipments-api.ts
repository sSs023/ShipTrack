import { request } from "@/shared/api/axios";
import type { CreateShipmentPayload } from "../model/types";

export async function getShipments() {
  return await request.get("/shipments");
}

export async function createShipment(data: CreateShipmentPayload) {
  return await request.post("/shipments", data);
}
