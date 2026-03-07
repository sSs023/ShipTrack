import { Button, Card } from "@heroui/react";
import { FiPlusCircle } from "react-icons/fi";

export default function DashboardWelcome() {
  return (
    <Card className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] font-bold">Welcome back, Alex</h1>
          <p className="text-base">
            Manage your global logistics, track shipments in real-time, and book{" "}
            <br />
            new deliveries with just a few clicks.
          </p>
        </div>
        <Button
          variant="solid"
          className="bg-accent shadow-accent h-auto rounded-lg px-8 py-3 text-base font-bold text-white"
        >
          <FiPlusCircle className="size-5" />
          Book Shipment
        </Button>
      </div>
    </Card>
  );
}
