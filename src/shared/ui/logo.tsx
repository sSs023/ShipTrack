import { FaTruck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  orientation?: "horizontal" | "vertical";
}

export default function Logo({ orientation = "horizontal" }: LogoProps) {
  return (
    <div
      className={twMerge(
        "flex items-center gap-3",
        orientation === "vertical" ? "flex-col" : "p-6",
      )}
    >
      <div
        className={twMerge(
          "bg-primary flex items-center justify-center rounded-lg",
          orientation === "vertical" ? "shadow-accent mb-4 size-13" : "size-10",
        )}
      >
        <FaTruck
          className={twMerge(
            "text-white",
            orientation === "vertical" ? "size-6.5" : "size-4.5",
          )}
        />
      </div>
      <div
        className={twMerge(
          "flex flex-col gap-1",
          orientation === "vertical" && "items-center gap-2 text-center",
        )}
      >
        <h1
          className={twMerge(
            "leading-none font-bold tracking-tight",
            orientation === "vertical" ? "text-2xl" : "text-sm",
          )}
        >
          ShipTrack
        </h1>
        {orientation === "horizontal" ? (
          <p className="text-muted text-[10px] leading-none font-medium tracking-wide uppercase">
            Admin Console
          </p>
        ) : (
          <p className="text-muted text-base">
            Manage your shipments with intelligence.
          </p>
        )}
      </div>
    </div>
  );
}
