import { Button } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <TbError404 className="text-muted-light mb-6 size-28" />
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p className="text-muted mt-2 text-center text-base">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button
          variant="primary"
          className="bg-accent font-medium text-white"
          onPress={() => window.history.back()}
        >
          Go Back
        </Button>
        <Link to="/">
          <Button variant="secondary" className="border font-medium">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
