import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { CustomizationPanel } from "@/components/customization-panel";
import { ChatPlayground } from "@/components/chat-playground";
import { Card } from "@/components/ui/card";

export default function NewChatbotPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">New Chatbot</h1>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Save className="h-4 w-4" />
          Save Chatbot
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CustomizationPanel />

        <Card className="h-[600px] shadow-none">
          <ChatPlayground />
        </Card>
      </div>
    </div>
  );
}
