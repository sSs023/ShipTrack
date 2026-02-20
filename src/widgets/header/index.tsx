import { Avatar, Button, Description, Separator } from "@heroui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CgBell } from "react-icons/cg";
import { FiTruck } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";

const links = [
  { name: "Dashboard", to: "/" },
  { name: "Reports", to: "/reports" },
  { name: "Shipments", to: "/shipments" },
  { name: "Tracking", to: "/tracking" },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between gap-2 border-b border-slate-300 bg-white px-10 py-3 *:[&.active]:text-blue-600">
      <div className="flex items-center gap-3">
        <div className="bg-accent flex size-10 items-center justify-center rounded-lg">
          <FiTruck className="text-xl text-white" />
        </div>
        <h1 className="text-xl font-bold">ShipTrack</h1>
      </div>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="relative text-sm font-medium [&.active]:text-blue-600"
          >
            {link.name}
            {pathname === link.to && (
              <motion.div
                layoutId="nav"
                className="bg-accent absolute -bottom-2 left-0 h-0.5 w-full rounded-t-full"
              ></motion.div>
            )}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="group relative">
          <CgBell className="size-5 text-slate-500" />
          <div className="absolute top-2.5 right-3 size-2 rounded-full border-2 border-white bg-red-500"></div>
        </Button>
        <Button variant="ghost">
          <GoQuestion className="size-5 text-slate-500" />
        </Button>
        <Separator orientation="vertical" className="h-8" />
        <div className="flex items-center gap-3 p-2">
          <div className="flex flex-col items-end gap-1">
            <div className="text-xs font-semibold">Alex Riviera</div>
            <Description className="text-[10px]">
              Operations Manager
            </Description>
          </div>
          <Avatar
            className="outline-success/70 outline-2 outline-offset-2"
            variant="soft"
          >
            <Avatar.Image src="https://i.pravatar.cc/150?img=9" />
            <Avatar.Fallback className="" color="success">
              AR
            </Avatar.Fallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
