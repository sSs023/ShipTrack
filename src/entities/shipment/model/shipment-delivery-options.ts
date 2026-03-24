import { FaPiggyBank, FaThumbsUp } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import type { DeliveryOption } from "./types";

export const deliveryOptions = [
  {
    plan: "economy" as DeliveryOption,
    label: "Economy",
    description: "Best value for money",
    duration: "7-10 Days",
    price: 45,
    Icon: FaPiggyBank,
  },
  {
    plan: "standard" as DeliveryOption,
    label: "Standard",
    description: "Balanced speed & cost",
    duration: "3-5 days",
    price: 89,
    Icon: FaThumbsUp,
  },
  {
    plan: "express" as DeliveryOption,
    label: "Express",
    description: "Next flight available",
    duration: "1-2 days",
    price: 155,
    Icon: MdOutlineRocketLaunch,
  },
];
