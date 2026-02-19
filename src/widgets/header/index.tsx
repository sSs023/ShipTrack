import { Button } from "@heroui/react";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <div className="flex items-center gap-2 p-2 *:[&.active]:text-blue-600">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Button>sad</Button>
    </div>
  );
}
