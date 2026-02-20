import { Surface } from "@heroui/react";
import { FiPackage } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";

const stats = [
  {
    title: "Total Shipments",
    value: 24,
    icon: (
      <div className="flex size-12 items-center justify-center rounded-full bg-slate-200">
        <FiPackage className="size-5 text-slate-600" />
      </div>
    ),
  },
  {
    title: "In Transit",
    value: 15,
    icon: (
      <div className="bg-accent/10 flex size-12 items-center justify-center rounded-full">
        <RiTruckLine className="text-accent size-5" />
      </div>
    ),
  },
  {
    title: "Delivered",
    value: 19,
    icon: (
      <div className="bg-success/10 flex size-12 items-center justify-center rounded-full">
        <IoCheckmarkCircleOutline className="text-success size-5" />
      </div>
    ),
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <Surface
          key={i}
          className="flex items-center gap-5 rounded-xl border border-slate-300 p-6"
        >
          {stat.icon}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-600">
              {stat.title}
            </span>
            <h3 className="text-[30px] leading-none font-black">
              {stat.value}
            </h3>
          </div>
        </Surface>
      ))}
    </div>
  );
}
