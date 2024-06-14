"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "godx-inline-flex godx-h-9 godx-items-center godx-justify-center godx-rounded-lg godx-bg-gray-100 godx-p-1 godx-text-gray-500 dark:godx-bg-gray-800 dark:godx-text-gray-400",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "godx-inline-flex godx-items-center godx-justify-center godx-whitespace-nowrap godx-rounded-md godx-px-3 godx-py-1 godx-text-sm godx-font-medium godx-ring-offset-white godx-transition-all focus-visible:godx-outline-none focus-visible:godx-ring-2 focus-visible:godx-ring-gray-950 focus-visible:godx-ring-offset-2 disabled:godx-pointer-events-none disabled:godx-opacity-50 data-[state=active]:godx-bg-white data-[state=active]:godx-text-gray-950 data-[state=active]:godx-shadow dark:godx-ring-offset-gray-950 dark:focus-visible:godx-ring-gray-300 dark:data-[state=active]:godx-bg-gray-950 dark:data-[state=active]:godx-text-gray-50",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "godx-mt-2 godx-ring-offset-white focus-visible:godx-outline-none focus-visible:godx-ring-2 focus-visible:godx-ring-gray-950 focus-visible:godx-ring-offset-2 dark:godx-ring-offset-gray-950 dark:focus-visible:godx-ring-gray-300",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
