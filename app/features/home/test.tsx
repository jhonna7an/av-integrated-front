import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClipboardIcon,
  FileIcon,
  FolderIcon,
  HomeIcon,
  KanbanIcon,
  LayoutGridIcon,
  Link,
  LockIcon,
  MountainIcon,
  PowerIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

export default function Component() {
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    //   <aside
    //     className="fixed inset-y-0 left-0 z-10 flex w-14 flex-col items-center border-r bg-background transition-all duration-300 hover:w-64 group"
    //     data-collapsed="true"
    //   >
    //     <nav className="flex flex-col items-start gap-4 px-2 py-5">
    //       <Link
    //         href="#"
    //         className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
    //         prefetch={false}
    //       >
    //         <MountainIcon className="h-4 w-4 transition-all group-hover:scale-110" />
    //         <span className="sr-only">Acme Inc</span>
    //       </Link>
    //       <div className="grid w-full gap-1">
    //         <Button
    //           variant="ghost"
    //           size="sm"
    //           className="justify-start gap-2 group"
    //           asChild
    //         >
    //           <Link
    //             href="#"
    //             className="flex items-center gap-2"
    //             prefetch={false}
    //           >
    //             <HomeIcon className="h-4 w-4" />
    //             <span className="opacity-0 transition-opacity group-hover:opacity-100">
    //               Home
    //             </span>
    //           </Link>
    //         </Button>
    //         <Button
    //           variant="ghost"
    //           size="sm"
    //           className="justify-start gap-2 group"
    //           asChild
    //         >
    //           <Link
    //             href="#"
    //             className="flex items-center gap-2"
    //             prefetch={false}
    //           >
    //             <BriefcaseIcon className="h-4 w-4" />
    //             <span className="opacity-0 transition-opacity group-hover:opacity-100">
    //               Projects
    //             </span>
    //           </Link>
    //         </Button>
    //         <Collapsible className="grid gap-1">
    //           <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group [&[data-state=open]>svg]:rotate-90">
    //             <LayoutGridIcon className="h-4 w-4" />
    //             <span className="opacity-0 transition-opacity group-hover:opacity-100">
    //               Tasks
    //             </span>
    //             <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
    //           </CollapsibleTrigger>
    //           <CollapsibleContent className="grid gap-1 pl-6">
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <ClipboardIcon className="h-4 w-4" />
    //               <span>My Tasks</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <CalendarIcon className="h-4 w-4" />
    //               <span>Calendar</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <KanbanIcon className="h-4 w-4" />
    //               <span>Kanban</span>
    //             </Link>
    //           </CollapsibleContent>
    //         </Collapsible>
    //         <Collapsible className="grid gap-1">
    //           <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group [&[data-state=open]>svg]:rotate-90">
    //             <UsersIcon className="h-4 w-4" />
    //             <span className="opacity-0 transition-opacity group-hover:opacity-100">
    //               Team
    //             </span>
    //             <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
    //           </CollapsibleTrigger>
    //           <CollapsibleContent className="grid gap-1 pl-6">
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <UserIcon className="h-4 w-4" />
    //               <span>Members</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <UsersIcon className="h-4 w-4" />
    //               <span>Groups</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <SettingsIcon className="h-4 w-4" />
    //               <span>Settings</span>
    //             </Link>
    //           </CollapsibleContent>
    //         </Collapsible>
    //         <Collapsible className="grid gap-1">
    //           <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group [&[data-state=open]>svg]:rotate-90">
    //             <FileIcon className="h-4 w-4" />
    //             <span className="opacity-0 transition-opacity group-hover:opacity-100">
    //               Files
    //             </span>
    //             <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
    //           </CollapsibleTrigger>
    //           <CollapsibleContent className="grid gap-1 pl-6">
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <FileIcon className="h-4 w-4" />
    //               <span>My Files</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <FolderIcon className="h-4 w-4" />
    //               <span>Shared</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <TrashIcon className="h-4 w-4" />
    //               <span>Trash</span>
    //             </Link>
    //           </CollapsibleContent>
    //         </Collapsible>
    //         <Collapsible className="grid gap-1">
    //           <CollapsibleTrigger className="flex items-center justify-start gap-2 rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground group [&[data-state=open]>svg]:rotate-90">
    //             <SettingsIcon className="h-4 w-4" />
    //             <span className="opacity-0 transition-opacity group-hover:opacity-100">
    //               Settings
    //             </span>
    //             <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
    //           </CollapsibleTrigger>
    //           <CollapsibleContent className="grid gap-1 pl-6">
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <UserIcon className="h-4 w-4" />
    //               <span>Profile</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <LockIcon className="h-4 w-4" />
    //               <span>Security</span>
    //             </Link>
    //             <Link
    //               href="#"
    //               className="flex items-center gap-2 text-sm"
    //               prefetch={false}
    //             >
    //               <PowerIcon className="h-4 w-4" />
    //               <span>Preferences</span>
    //             </Link>
    //           </CollapsibleContent>
    //         </Collapsible>
    //       </div>
    //     </nav>
    //   </aside>
    //   <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    //     <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button
    //             variant="outline"
    //             size="icon"
    //             className="overflow-hidden rounded-full"
    //           >
    //             Hola
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuItem>Recover Key</DropdownMenuItem>
    //           <DropdownMenuItem>Sign Out</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     </header>
    //     <main className="flex-1 p-4 sm:px-6 sm:py-0" />
    //   </div>
    // </div>
    <>
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-14 flex-col items-center justify-between border-r bg-white transition-all duration-300 hover:w-60 group">
    <nav className="flex flex-col items-start gap-4 px-2 py-5">
      <a href="#" className="flex items-center w-full h-9 p-2 rounded-lg text-gray-500 transition-colors hover:bg-gray-200 hover:text-black group-hover:w-full">
        <svg className="h-5 w-5 transition-transform group-hover:transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10l-7 7-7-7"></path></svg>
        <span className="ml-2 hidden group-hover:inline-block">Inbox</span>
      </a>
      <a href="#" className="flex items-center w-full h-9 p-2 rounded-lg text-gray-500 transition-colors hover:bg-gray-200 hover:text-black group-hover:w-full">
        <svg className="h-5 w-5 transition-transform group-hover:transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8"></path></svg>
        <span className="ml-2 hidden group-hover:inline-block">Add</span>
      </a>
      <a href="#" className="flex items-center w-full h-9 p-2 rounded-lg text-gray-500 transition-colors hover:bg-gray-200 hover:text-black group-hover:w-full">
        <svg className="h-5 w-5 transition-transform group-hover:transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 14.158V11.5a6.5 6.5 0 10-13 0v2.658c0 .548-.215 1.073-.595 1.464L3 17h5"></path></svg>
        <span className="ml-2 hidden group-hover:inline-block">Notifications</span>
      </a>
      <a href="#" className="flex items-center w-full h-9 p-2 rounded-lg text-gray-500 transition-colors hover:bg-gray-200 hover:text-black group-hover:w-full">
        <svg className="h-5 w-5 transition-transform group-hover:transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16 3.423A12.042 12.042 0 0112 21.5c-2.75 0-5.299-.858-7.16-2.334L12 14zm0-13.5v6l-9 5"></path></svg>
        <span className="ml-2 hidden group-hover:inline-block">Settings</span>
      </a>
    </nav>
  </aside>
  <div className="flex-1 p-10">
    <h1 className="text-3xl font-bold">Main Content Area</h1>
    <p>This is the main content area.</p>
  </div>
    </>
  );
}
