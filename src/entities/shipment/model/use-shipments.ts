import { useQuery } from "@tanstack/react-query";
import { getShipments } from "../api/shipments-api";

export function useShipments() {
  const query = useQuery({ queryKey: ["shipments"], queryFn: getShipments });
  return query;
}
