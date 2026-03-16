import { create } from "zustand";
import type { IDeliveryOption } from "./types";

interface DeliveryOptionState {
  selectedOption: IDeliveryOption;
  setSelectedOption: (option: IDeliveryOption) => void;
}

export const useDeliveryOptionStore = create<DeliveryOptionState>((set) => ({
  selectedOption: "standard",
  setSelectedOption: (option) => set({ selectedOption: option }),
}));
