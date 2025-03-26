import { Routes, Route, Navigate } from "react-router";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardPage from "@/pages/dashboard";
import NewChatbotPage from "@/pages/new-chatbot";
import TrainingPage from "@/pages/training";

function OtherPages({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{pageTitle}</h1>
      </div>
    </div>
  );
}

export default function RoutingPages() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="new-chatbot" element={<NewChatbotPage />} />
        <Route path="training" element={<TrainingPage />} />

        <Route path="chatbots" element={<OtherPages pageTitle="Chatbots" />} />
        <Route path="testing" element={<OtherPages pageTitle="Testing" />} />
        <Route path="history" element={<OtherPages pageTitle="History" />} />
        <Route path="analytics" element={<OtherPages pageTitle="Analytics" />} />
        <Route path="leads" element={<OtherPages pageTitle="Leads" />} />
        <Route path="actions" element={<OtherPages pageTitle="Actions" />} />
        <Route path="website" element={<OtherPages pageTitle="Add to website" />} />
        <Route path="account" element={<OtherPages pageTitle="Account" />} />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
