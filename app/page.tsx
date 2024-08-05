import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Switch } from "@radix-ui/react-switch";
import { BellRing, Check } from "lucide-react";
import Image from "next/image";
import Login from "./features/auth/login";
import Home from "./features/home/page";
import V0 from "@/components/component/v0";
import Component from "./features/home/test";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function RootLayout({ className, ...props } : CardProps) {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        {/* <Login/> */}
        {/* <Home/> */}
        {/* <V0></V0> */}
        <Component/>
      </div>
    </>
  );
}
