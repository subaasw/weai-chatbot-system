import { MessageSquareIcon, UploadIcon, UserIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CustomizationPanel() {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle className="text-lg">Customization</CardTitle>
        <CardDescription>
          Configure your chatbot's behavior and appearance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2 w-full">
            <Label htmlFor="model" className="mb-3">
              Model
            </Label>
            <Select defaultValue="gpt-4o-mini">
              <SelectTrigger id="model" className="w-full shadow-none">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="gpt-4o-mini">GPT-4o-mini</SelectItem>
                <SelectItem value="deepseek-r1">Deepseek R1</SelectItem>
                <SelectItem value="claude-3">Claude 3</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gemini-flash">Gemini Flash</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Temperature</Label>
              <span className="text-sm text-gray-600">0.7</span>
            </div>
            <Slider
              id="temperature"
              defaultValue={[0.7]}
              max={1}
              step={0.1}
              className="py-1"
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="system-prompt" className="mb-3">
              System Prompt
            </Label>
            <Textarea
              id="system-prompt"
              placeholder="Enter system instructions for your chatbot"
              className="min-h-[100px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="initial-message" className="mb-3">
              Initial Message
            </Label>
            <Input id="initial-message" placeholder="Enter initial message" />
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="mb-3">User Feedback</Label>

            <ToggleGroup type="single" className="border">
              <ToggleGroupItem
                className="px-4 border-r text-sm"
                value="feedbackYes"
                aria-label="Toggle Yes"
              >
                <span>Yes</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                className="px-4 text-sm"
                value="feedbackNo"
                aria-label="Toggle No"
              >
                <span>No</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="space-y-2">
            <Label className="mb-3">Regenerate Message</Label>

            <ToggleGroup type="single" className="border">
              <ToggleGroupItem
                className="px-4 border-r text-sm"
                value="regenerateYes"
                aria-label="Regenerate Yes"
              >
                <span>Yes</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                className="px-4 text-sm"
                value="regenerateNo"
                aria-label="Regenerate No"
              >
                <span>No</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-4 my-6">
            <Label>Profile Picture</Label>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border bg-background">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <UserIcon className="h-7 w-7" />
                </div>
              </div>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative shadow-none"
                >
                  <UploadIcon className="mr-1.5 h-4 w-4" />
                  Upload Picture
                  <input
                    type="file"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    accept="image/*"
                    onChange={(e) => console.log(e.target.files)}
                  />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Recommended: 512x512px JPG or PNG
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 my-6">
            <Label>Chat Icon</Label>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border bg-background">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <MessageSquareIcon className="h-7 w-7" />
                </div>
              </div>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative shadow-none"
                >
                  <UploadIcon className="mr-1.5 h-4 w-4" />
                  Upload Icon
                  <input
                    type="file"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    accept="image/*"
                    onChange={(e) => console.log(e.target.files)}
                  />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Recommended: 512x512px JPG or PNG
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme-color" className="mb-3">
              Theme Color
            </Label>
            <Select defaultValue="blue">
              <SelectTrigger id="theme-color" className="w-full shadow-none">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
                <SelectItem value="red">Red</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="chatbot-message-color" className="mb-3">
                Chatbot Message
              </Label>
              <Input
                id="chatbot-message-color"
                type="color"
                defaultValue="#f3f4f6"
                className="h-10 w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="user-message-color" className="mb-3">
                User Message
              </Label>
              <Input
                id="user-message-color"
                type="color"
                defaultValue="#ede9fe"
                className="h-10 w-full"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
