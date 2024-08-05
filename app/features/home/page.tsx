import React, { Component } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ArchiveIcon, CalendarCheckIcon, CalendarDaysIcon, CalendarIcon, ChevronRightIcon, FileIcon, InboxIcon, PowerIcon, SendIcon, SettingsIcon, Trash2Icon, UserIcon, UsersIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2">
        <Button variant="ghost" size="sm" className="justify-start gap-2" asChild>
          <Link href="#" className="gap-2" prefetch={false}>
            <InboxIcon className="w-4 h-4" />
            <span className="group-data-[collapsed=true]:hidden">Inbox</span>
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="justify-start gap-2" asChild>
          <Link href="#" className="gap-2" prefetch={false}>
            <FileIcon className="w-4 h-4" />
            <span className="group-data-[collapsed=true]:hidden">Drafts</span>
          </Link>
        </Button>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
            <SendIcon className="w-4 h-4" />
            <span className="group-data-[collapsed=true]:hidden">Sent</span>
            <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="grid gap-1 pl-6">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <ArchiveIcon className="w-4 h-4" />
              <span>Archived</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <Trash2Icon className="w-4 h-4" />
              <span>Trash</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
            <UsersIcon className="w-4 h-4" />
            <span className="group-data-[collapsed=true]:hidden">Contacts</span>
            <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="grid gap-1 pl-6">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <UserIcon className="w-4 h-4" />
              <span>Personal</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <UsersIcon className="w-4 h-4" />
              <span>Team</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
            <CalendarIcon className="w-4 h-4" />
            <span className="group-data-[collapsed=true]:hidden">Calendar</span>
            <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="grid gap-1 pl-6">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <CalendarDaysIcon className="w-4 h-4" />
              <span>Personal</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <CalendarCheckIcon className="w-4 h-4" />
              <span>Team</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="grid gap-1">
          <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
            <SettingsIcon className="w-4 h-4" />
            <span className="group-data-[collapsed=true]:hidden">Settings</span>
            <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="grid gap-1 pl-6">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <SettingsIcon className="w-4 h-4" />
              <span>Account</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <PowerIcon className="w-4 h-4" />
              <span>Preferences</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
      </nav>
    </div>
  )
}

