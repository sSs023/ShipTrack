import { Button } from "@heroui/react";
import { type ErrorComponentProps, useRouter } from "@tanstack/react-router";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorPage({ error, reset }: ErrorComponentProps) {
  const router = useRouter();

  const handleRetry = () => {
    reset();
    router.invalidate();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <MdErrorOutline className="text-danger mb-6 size-20" />
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-muted mt-2 max-w-md text-center text-base">
        An unexpected error occurred. You can try again or go back to the home
        page.
      </p>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="bg-danger/5 text-danger mt-6 max-w-xl overflow-auto rounded-lg p-4 text-xs">
          {error.message}
        </pre>
      )}
      <div className="mt-8 flex gap-3">
        <Button
          variant="primary"
          className="bg-accent font-medium text-white"
          onPress={handleRetry}
        >
          Try Again
        </Button>
        <a href="/">
          <Button variant="secondary" className="border font-medium">
            Home
          </Button>
        </a>
      </div>
    </div>
  );
}
