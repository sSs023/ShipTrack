import { LoginForm } from "@/features/auth";
import Logo from "@/shared/ui/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-8 overflow-auto">
      <Logo orientation="vertical" />
      <LoginForm />
    </div>
  );
}
