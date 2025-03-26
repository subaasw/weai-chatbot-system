import { Link } from "react-router";
import {
  PlusIcon,
  MessageSquareIcon,
  BrainIcon,
  BarChart3Icon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const chatbots = [
    {
      id: "1",
      name: "Customer Support Bot",
      messages: 1243,
      lastActive: "2h ago",
      avatar: "/placeholder.svg?height=40&width=40",
      color: "bg-blue-50",
    },
    {
      id: "2",
      name: "Sales Assistant",
      messages: 567,
      lastActive: "1d ago",
      avatar: "/placeholder.svg?height=40&width=40",
      color: "bg-purple-50",
    },
    {
      id: "3",
      name: "FAQ Bot",
      messages: 890,
      lastActive: "3h ago",
      avatar: "/placeholder.svg?height=40&width=40",
      color: "bg-green-50",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Link to="/dashboard/new-chatbot">
            <Button className="gap-2">
              <PlusIcon className="h-4 w-4" />
              New Chatbot
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="gap-2 pb-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Chatbots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">{chatbots.length}</div>
                <div className="rounded-full bg-blue-50 p-2">
                  <MessageSquareIcon className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <p className="mt-2 text-xs">+1 from last month</p>
            </CardContent>
          </Card>

          <Card className="gap-2 shadow-none">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">2,700</div>
                <div className="rounded-full bg-purple-50 p-2">
                  <BrainIcon className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">+18% from last month</p>
            </CardContent>
          </Card>

          <Card className="gap-2 pb-0 shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                User Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">94%</div>
                <div className="rounded-full bg-green-50 p-2">
                  <BarChart3Icon className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">+2% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
          <Card className="shadow-none py-3">
            <CardContent className="p-0">
              <div className="divide-y">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-4"
                  >
                    <div>
                      <p className="font-medium">New conversation started</p>
                      <p className="text-xs text-muted-foreground">
                        Customer Support Bot • 2 hours ago
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
