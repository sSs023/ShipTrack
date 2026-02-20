import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../widgets/footer";
import Header from "../widgets/header";

function RootLayout() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="grow bg-slate-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
