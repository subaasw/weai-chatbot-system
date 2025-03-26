import type React from "react";

import { useState, useRef } from "react";
import {
  FileIcon,
  LinkIcon,
  MessageSquareIcon,
  UploadIcon,
  PencilIcon,
  Trash2Icon,
  XIcon,
  CheckIcon,
  FileIcon as FileDocIcon,
  TextIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type TrainingMethod = "files" | "text" | "website" | "qa";

const dummyFiles = [
  {
    id: "1",
    name: "product-manual.pdf",
    size: "2.4 MB",
    date: "2023-05-15",
    status: "Processed",
    progress: 100,
    characters: 24500,
  },
  {
    id: "2",
    name: "faq-document.docx",
    size: "1.2 MB",
    date: "2023-05-14",
    status: "Processing",
    progress: 65,
    characters: 12800,
  },
  {
    id: "3",
    name: "company-policies.txt",
    size: "450 KB",
    date: "2023-05-12",
    status: "Processed",
    progress: 100,
    characters: 8200,
  },
];

const dummyWebsites = [
  {
    id: "1",
    url: "https://example.com/about",
    date: "2023-05-15",
    status: "Processed",
    pages: 5,
  },
  {
    id: "2",
    url: "https://example.com/faq",
    date: "2023-05-14",
    status: "Processing",
    pages: 3,
  },
  {
    id: "3",
    url: "https://example.com/products",
    date: "2023-05-12",
    status: "Failed",
    pages: 0,
  },
];

const dummyTexts = [
  {
    id: "1",
    title: "Product Description",
    content: "Our product is designed to...",
    date: "2023-05-15",
    status: "Processed",
    characters: 1250,
  },
  {
    id: "2",
    title: "Company Overview",
    content: "Founded in 2010, our company...",
    date: "2023-05-14",
    status: "Processed",
    characters: 2340,
  },
];

const dummyQA = [
  {
    id: "1",
    question: "What are your business hours?",
    answer: "We are open Monday to Friday, 9 AM to 5 PM.",
    date: "2023-05-15",
  },
  {
    id: "2",
    question: "Do you offer refunds?",
    answer: "Yes, we offer full refunds within 30 days of purchase.",
    date: "2023-05-14",
  },
  {
    id: "3",
    question: "How can I contact support?",
    answer:
      "You can reach our support team via email at support@example.com or by phone at (555) 123-4567.",
    date: "2023-05-12",
  },
];

const chatMethods = [
  {
    label: "Files",
    value: "files" as TrainingMethod,
    icon: FileIcon,
  },
  {
    label: "Text",
    value: "text" as TrainingMethod,
    icon: TextIcon,
  },
  {
    label: "Website",
    value: "website" as TrainingMethod,
    icon: LinkIcon,
  },
  {
    label: "Q&A",
    value: "qa" as TrainingMethod,
    icon: MessageSquareIcon,
  },
];

export default function TrainingPage() {
  const [activeMethod, setActiveMethod] = useState<TrainingMethod>("files");
  const [editingQA, setEditingQA] = useState<string | null>(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [textContent, setTextContent] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startEditQA = (id: string) => {
    const qa = dummyQA.find((item) => item.id === id);
    if (qa) {
      setEditQuestion(qa.question);
      setEditAnswer(qa.answer);
      setEditingQA(id);
    }
  };

  const cancelEditQA = () => {
    setEditingQA(null);
    setEditQuestion("");
    setEditAnswer("");
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Files selected:", e.target.files);
  };

  const addWebsite = () => {
    if (websiteUrl.trim()) {
      console.log("Adding website:", websiteUrl);
      setWebsiteUrl("");
    }
  };

  const addText = () => {
    if (textTitle.trim() && textContent.trim()) {
      console.log("Adding text:", textTitle, textContent);
      setTextTitle("");
      setTextContent("");
    }
  };

  const addQA = () => {
    if (question.trim() && answer.trim()) {
      console.log("Adding Q&A:", question, answer);
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Training</h1>
      </div>

      <Card className="shadow-none py-12">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Train Your Chatbot</CardTitle>
          <CardDescription>
            Add knowledge to your chatbot using different methods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {chatMethods.map((method) => (
              <Badge
                key={method.value}
                variant={activeMethod === method.value ? "default" : "outline"}
                className="cursor-pointer text-sm py-2 px-5 rounded-full"
                onClick={() => setActiveMethod(method.value)}
              >
                <method.icon size={16} className="mr-1" />
                {method.label}
              </Badge>
            ))}
          </div>

          {activeMethod === "files" && (
            <div className="space-y-6">
              <div className="flex items-start justify-between max-w-4xl mx-auto relative">
                <div className="rounded-lg border border-dashed p-8 text-center max-w-lg mx-auto">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.md,.csv"
                    onChange={handleFileChange}
                  />
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <UploadIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium">Select Files</h3>
                  <p className="mb-4 text-xs text-muted-foreground">
                    PDF, DOC, TXT, MD, CSV files supported (max 10MB per file)
                  </p>
                  <Button
                    onClick={handleFileUploadClick}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload Files
                  </Button>
                </div>

                <Card className="p-5 shadow-none border border-double absolute -top-12 right-0 gap-5">
                  <CardTitle>
                    <Label htmlFor="characterLimits">Character Limits</Label>
                  </CardTitle>
                  <CardContent className="px-0">
                    <Progress
                      value={65}
                      max={100}
                      className="w-full [&>*]:bg-amber-500"
                    />
                    <span className="text-xs inline-block mt-1.5 mx-auto ">
                      350 of 500
                    </span>
                  </CardContent>
                </Card>
              </div>

              <Table className="max-w-5xl mx-auto">
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-4">Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right px-4">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyFiles.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell className="font-medium px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <FileDocIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                            {file.name}
                          </div>
                          <span className="text-xs text-zinc-400">
                            ({file.size})
                          </span>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="space-y-1">
                          <Badge
                            variant={
                              file.status === "Processed"
                                ? "default"
                                : file.status === "Processing"
                                ? "outline"
                                : "destructive"
                            }
                          >
                            {file.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete the file and remove
                                it from your training data.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {activeMethod === "text" && (
            <div className="space-y-6">
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="text-title">Title</Label>
                  <Input
                    id="text-title"
                    placeholder="Enter a title for this text"
                    value={textTitle}
                    onChange={(e) => setTextTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="training-text">Content</Label>
                    <span className="text-xs text-muted-foreground">
                      {textContent.length} characters
                    </span>
                  </div>
                  <Textarea
                    id="training-text"
                    placeholder="Enter text to train your chatbot..."
                    className="min-h-[200px]"
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                  />
                </div>

                <Button
                  onClick={addText}
                  className="bg-primary hover:bg-primary/90"
                  disabled={!textTitle.trim() || !textContent.trim()}
                >
                  Add Text
                </Button>
              </div>

              <div className="border-t max-w-5xl mx-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6">Title</TableHead>
                      <TableHead>Characters</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyTexts.map((text) => (
                      <TableRow key={text.id}>
                        <TableCell className="font-medium">
                          {text.title}
                        </TableCell>
                        <TableCell>
                          {text.characters.toLocaleString()}
                        </TableCell>
                        <TableCell>{text.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              text.status === "Processed"
                                ? "default"
                                : "outline"
                            }
                          >
                            {text.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                >
                                  <Trash2Icon className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Are you sure?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete this text and
                                    remove it from your training data.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {activeMethod === "website" && (
            <div className="space-y-6">
              <div className="flex gap-2 max-w-2xl mx-auto">
                <Input
                  placeholder="https://example.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
                <Button
                  onClick={addWebsite}
                  className="bg-primary hover:bg-primary/90"
                  disabled={!websiteUrl.trim()}
                >
                  Train
                </Button>
              </div>

              <div className="border-t max-w-5xl mx-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6">URL</TableHead>
                      <TableHead>Pages</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyWebsites.map((website) => (
                      <TableRow key={website.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center hover:underline">
                            <LinkIcon className="mr-2 h-3 w-3 text-muted-foreground" />
                            {website.url}
                          </div>
                        </TableCell>
                        <TableCell>{website.pages}</TableCell>
                        <TableCell>{website.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              website.status === "Processed"
                                ? "default"
                                : website.status === "Processing"
                                ? "outline"
                                : "destructive"
                            }
                          >
                            {website.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                              >
                                <Trash2Icon className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete this URL and
                                  remove it from your training data.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {activeMethod === "qa" && (
            <div className="space-y-6">
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="question">Question</Label>
                  <Input
                    id="question"
                    placeholder="Enter a question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="answer">Answer</Label>
                    <span className="text-xs text-muted-foreground">
                      {answer.length} characters
                    </span>
                  </div>
                  <Textarea
                    id="answer"
                    placeholder="Enter the answer"
                    className="min-h-[150px]"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>

                <Button
                  onClick={addQA}
                  className="bg-primary hover:bg-primary/90"
                  disabled={!question.trim() || !answer.trim()}
                >
                  Add Q&A Pair
                </Button>
              </div>

              <div className="border-t max-w-5xl mx-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-6">Question</TableHead>
                      <TableHead>Answer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right px-6">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyQA.map((qa) => (
                      <TableRow key={qa.id}>
                        {editingQA === qa.id ? (
                          <>
                            <TableCell className="px-6">
                              <Input
                                value={editQuestion}
                                onChange={(e) =>
                                  setEditQuestion(e.target.value)
                                }
                                className="w-full"
                              />
                            </TableCell>
                            <TableCell>
                              <Textarea
                                value={editAnswer}
                                onChange={(e) => setEditAnswer(e.target.value)}
                                className="w-full h-20"
                              />
                            </TableCell>
                            <TableCell>{qa.date}</TableCell>
                            <TableCell className="text-right px-6">
                              <div className="flex justify-end gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                  onClick={() => cancelEditQA()}
                                >
                                  <XIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-green-600 hover:bg-green-50 hover:text-green-700"
                                  onClick={() => setEditingQA(null)}
                                >
                                  <CheckIcon className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell className="font-medium">
                              {qa.question}
                            </TableCell>
                            <TableCell className="max-w-[200px] truncate">
                              {qa.answer}
                            </TableCell>
                            <TableCell>{qa.date}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                  onClick={() => startEditQA(qa.id)}
                                >
                                  <PencilIcon className="h-4 w-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                    >
                                      <Trash2Icon className="h-4 w-4" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Are you sure?
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        This will permanently delete this Q&A
                                        pair and remove it from your training
                                        data.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>
                                        Cancel
                                      </AlertDialogCancel>
                                      <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                                        Delete
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </TableCell>
                          </>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
