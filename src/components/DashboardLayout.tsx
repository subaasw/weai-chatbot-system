import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-gray-50">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
