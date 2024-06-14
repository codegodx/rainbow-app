"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "../../lib/utils";

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "godx-z-50 godx-overflow-hidden godx-rounded-md godx-bg-gray-900 godx-px-3 godx-py-1.5 godx-text-xs godx-text-gray-50 godx-animate-in godx-fade-in-0 godx-zoom-in-95 data-[state=closed]:godx-animate-out data-[state=closed]:godx-fade-out-0 data-[state=closed]:godx-zoom-out-95 data-[side=bottom]:godx-slide-in-from-top-2 data-[side=left]:godx-slide-in-from-right-2 data-[side=right]:godx-slide-in-from-left-2 data-[side=top]:godx-slide-in-from-bottom-2 dark:godx-bg-gray-50 dark:godx-text-gray-900",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
