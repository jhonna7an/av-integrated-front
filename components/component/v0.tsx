/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/HZlsgU8ORfw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { CalendarIcon, FileIcon, HandHelpingIcon, HomeIcon, InboxIcon, LockIcon, LogInIcon, LogOutIcon, MenuIcon, SettingsIcon } from "lucide-react"

export default function V0() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-14 flex-col items-center justify-between border-r bg-background transition-all duration-300 hover:w-60 group">
        <nav className="flex flex-col items-start gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground group-hover:rounded-md group-hover:px-3 group-hover:py-2"
                  prefetch={false}
                >
                  <InboxIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only group-hover:not-sr-only group-hover:text-base">Inbox</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Inbox</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground group-hover:rounded-md group-hover:px-3 group-hover:py-2"
                  prefetch={false}
                >
                  <CalendarIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only group-hover:not-sr-only group-hover:text-base">Calendar</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Calendar</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground group-hover:rounded-md group-hover:px-3 group-hover:py-2"
                  prefetch={false}
                >
                  <FileIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only group-hover:not-sr-only group-hover:text-base">Files</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Files</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground group-hover:rounded-md group-hover:px-3 group-hover:py-2"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only group-hover:not-sr-only group-hover:text-base">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <LogInIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Acme Inc</span>
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <LockIcon className="h-4 w-4" />
                  Reset Password
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <LogOutIcon className="h-4 w-4" />
                  Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 bg-muted/40 p-4 sm:p-6" />
      </div>
    </div>
  )
}
