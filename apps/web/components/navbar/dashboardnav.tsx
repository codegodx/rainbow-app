"use client"


import Image from "next/image"
import Link from "next/link"
import {
    PanelLeft,
    Search,
} from "@repo/ui/lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@repo/ui/components/breadcrumb"
import { Button } from "@repo/ui/components/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu"
import { Input } from "@repo/ui/components/input"
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/components/sheet"
import {
    TooltipProvider,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@repo/ui/components/tooltip"
import LogOut from "@/components/auth/logout"
import type { Session } from "next-auth"
import { usePathname } from "next/navigation"
import { NextBreadcrumb } from "./breadcrumb"


export function DashboardNav({ children, navmenu, session }: {
    navmenu: {
        name: string;
        link: string;
        icon: JSX.Element;
    }[],
    session: Session | null,
    children: React.ReactNode,
}) {
    const currentPath = usePathname()
    return (
        <div className="godx-flex godx-w-full godx-flex-col godx-bg-muted/40">
            <aside className="godx-fixed godx-inset-y-0 godx-left-0 godx-z-10 godx-hidden godx-w-14 godx-flex-col godx-border-r godx-bg-background sm:godx-flex">
                <nav className="godx-flex godx-flex-col godx-items-center godx-gap-4 godx-px-2 sm:godx-py-5">
                    <Image
                        src="/logo.svg"
                        width={36}
                        height={25}
                        alt="Avatar"
                        className="godx-h-10 godx-w-15 godx-overflow-hidden godx-rounded-sm godx-bg-gradient-to-br godx-from-stone-400 godx-p-1"
                    />
                    <TooltipProvider>
                        {navmenu.map((item, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <Link

                                        href={item.link}
                                        className={`godx-flex godx-h-9 godx-w-9 godx-items-center godx-justify-center godx-rounded-lg godx-text-stone-200 godx-transition-colors hover:godx-text-stone-5500 md:godx-h-8 md:godx-w-8 ${currentPath === item.link ? "!godx-text-cyan-600 godx-scale-125" : ""}`}
                                    >
                                        {item.icon}
                                        <span className="godx-sr-only">{item.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.name}</TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="godx-flex godx-flex-col sm:godx-gap-4 sm:godx-py-4 sm:godx-pl-14">
                <header className="godx-sticky godx-top-0 godx-z-30 godx-flex godx-h-14 godx-items-center godx-gap-4 godx-bg-background godx-px-4 sm:godx-static sm:godxb-h-auto sm:godx-border-0 sm:godx-g-transparent sm:godx-px-6">
                    <div className="sm:godx-hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="icon" variant="outline">
                                    <PanelLeft className="godx-h-5 godx-w-5" />
                                    <span className="godx-sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="sm:godx-max-w-xs">
                                <nav className="godx-grid godx-gap-6 godx-text-lg godx-font-medium">
                                    {navmenu.map((item, index) => (
                                        <div key={index}>
                                            <Link

                                                href={item.link}
                                                className="godx-flex godx-h-9 godx-w-9 godx-items-center godx-justify-center godx-rounded-lg godx-text-muted-foreground godx-transition-colors hover:godx-text-foreground md:godx-h-8 md:godx-w-8"
                                            >
                                                {item.icon}
                                                <span className="godx-sr-only">{item.name}</span>
                                            </Link>
                                        </div>
                                    ))}

                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                   
                    <NextBreadcrumb
                        homeElement={'Home'}
                        separator={<span> | </span>}
                        activeClasses='text-amber-500'
                        containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                        listClasses='hover:underline mx-2 font-bold'
                        capitalizeLinks
                    />


                    <div className="godx-relative godx-mx-auto md:godx-max-w-xl">
                        <Search className="godx-absolute godx-left-2.5 godx-top-2.5 godx-h-4 godx-w-4 godx-text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="godx-w-full godx-rounded-lg godx-bg-background godx-pl-8 md:godx-w-[200px] lg:godx-w-[336px]"
                        />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="godx-overflow-hidden godx-rounded-full"
                            >
                                <Image
                                    src="/logo.svg"
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="godx-overflow-hidden godx-rounded-full"
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel >{session?.user.email}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem ></DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><LogOut /></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </header>

                {children}

            </div>
        </div>
    )
}





