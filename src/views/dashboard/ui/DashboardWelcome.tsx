import { Button, Description, Surface } from "@heroui/react";
import { FiPlusCircle } from "react-icons/fi";

export default function DashboardWelcome() {
  return (
    <Surface className="rounded-xl border border-slate-300 p-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold">Welcome back, Alex</h1>
          <Description className="text-base">
            Manage your global logistics, track shipments in real-time, and book{" "}
            <br />
            new deliveries with just a few clicks.
          </Description>
        </div>
        <Button
          variant="primary"
          className="h-auto rounded-lg px-8 py-3 text-base font-bold shadow-[0_10px_15px_-3px_rgb(var(--accent-rgb)/0.2),0_4px_6px_-4px_rgb(var(--accent-rgb)/0.2)]"
        >
          <FiPlusCircle className="size-5" />
          Book Shipment
        </Button>
      </div>
    </Surface>
  );
}
