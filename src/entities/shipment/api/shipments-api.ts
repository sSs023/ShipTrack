import { request } from "@/shared/api/axios";
import type {
  CreateShipmentPayload,
  ShipmentListResponse,
} from "../model/types";

export async function getShipments(params: any): Promise<ShipmentListResponse> {
  return await request.get("/shipments", { params });
}

export async function createShipment(data: CreateShipmentPayload) {
  return await request.post("/shipments", data);
}
