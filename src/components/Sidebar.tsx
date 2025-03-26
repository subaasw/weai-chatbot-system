import { Link, NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import {
  BarChart3Icon,
  ClockIcon,
  UsersIcon,
  ZapIcon,
  GlobeIcon,
  UserIcon,
  HomeIcon,
  BrainIcon,
  TestTubeIcon,
  MessageSquareIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

const sidebarItems = [
  {
    group: "Home",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "Chatbots",
        href: "/dashboard/chatbots",
        icon: MessageSquareIcon,
      },
    ],
  },
  {
    group: "Development",
    items: [
      {
        title: "Training",
        href: "/dashboard/training",
        icon: BrainIcon,
      },
      {
        title: "Testing",
        href: "/dashboard/testing",
        icon: TestTubeIcon,
      },
    ],
  },
  {
    group: "Analytics",
    items: [
      {
        title: "History",
        href: "/dashboard/history",
        icon: ClockIcon,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3Icon,
      },
      {
        title: "Leads",
        href: "/dashboard/leads",
        icon: UsersIcon,
      },
    ],
  },
  {
    group: "Management",
    items: [
      {
        title: "Actions",
        href: "/dashboard/actions",
        icon: ZapIcon,
      },
      {
        title: "Add to Website",
        href: "/dashboard/website",
        icon: GlobeIcon,
      },
      {
        title: "Account",
        href: "/dashboard/account",
        icon: UserIcon,
      },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <h1 className="text-xl font-semibold">WeAI Chat</h1>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          <Link to="/dashboard/new-chatbot">
            <Button className="justify-start w-full" size="default">
              <PlusIcon className="h-4 w-4" />
              <span>New Chatbot</span>
            </Button>
          </Link>
        </div>

        <div className="space-y-6 mt-3">
          {sidebarItems.map((group) => (
            <div key={group.group} className="px-3">
              <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">
                {group.group}
              </h3>
              <nav className="grid gap-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                      item.href === location.pathname
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.title}</span>
                  </NavLink>
                ))}
              </nav>
              {group.group !== "Management" && (
                <Separator className="my-1.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
