import { request } from "../../../shared/api/axios";

export async function getShipments() {
  return await request.get("/shipments");
}
