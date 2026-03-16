import { useMutation } from "@tanstack/react-query";
import { createShipment } from "../api/shipments-api";

export function useCreateShipment() {
  const mutation = useMutation({
    mutationFn: createShipment,
    mutationKey: ["create-shipment"],
  });

  return mutation;
}
