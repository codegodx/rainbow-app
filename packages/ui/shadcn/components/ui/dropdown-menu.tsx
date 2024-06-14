"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  CgCheck,
  CgChevronRight 
} from "react-icons/cg"
import { cn } from "../../lib/utils"
import { GoDotFill } from "react-icons/go"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      "godx-flex godx-cursor-default godx-select-none godx-items-center godx-rounded-sm godx-px-2 godx-py-1.5 godx-text-sm godx-outline-none focus:godx-bg-gray-100 data-[state=open]:godx-bg-gray-100 dark:focus:godx-bg-gray-800 dark:data-[state=open]:godx-bg-gray-800",
      inset && "godx-pl-8",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <CgChevronRight className="godx-ml-auto godx-h-4 godx-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      "godx-z-50 godx-min-w-[8rem] godx-overflow-hidden godx-rounded-md godx-border godx-border-gray-200 godx-bg-white godx-p-1 godx-text-gray-950 godx-shadow-lg data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[state=closed]:godx-fade-out-0 data-[state=open]:godx-fade-in-0 data-[state=closed]:godx-zoom-out-95 data-[state=open]:godx-zoom-in-95 data-[side=bottom]:godx-slide-in-from-top-2 data-[side=left]:godx-slide-in-from-right-2 data-[side=right]:godx-slide-in-from-left-2 data-[side=top]:godx-slide-in-from-bottom-2 dark:godx-border-gray-800 dark:godx-bg-gray-950 dark:godx-text-gray-50",
      className
    )}
    ref={ref}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        "godx-z-50 godx-min-w-[8rem] godx-overflow-hidden godx-rounded-md godx-border godx-border-gray-200 godx-bg-white godx-p-1 godx-text-gray-950 godx-shadow-md dark:godx-border-gray-800 dark:godx-bg-gray-950 dark:godx-text-gray-50",
        "data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[state=closed]:godx-fade-out-0 data-[state=open]:godx-fade-in-0 data-[state=closed]:godx-zoom-out-95 data-[state=open]:godx-zoom-in-95 data-[side=bottom]:godx-slide-in-from-top-2 data-[side=left]:godx-slide-in-from-right-2 data-[side=right]:godx-slide-in-from-left-2 data-[side=top]:godx-slide-in-from-bottom-2",
        className
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "godx-relative godx-flex godx-cursor-default godx-select-none godx-items-center godx-rounded-sm godx-px-2 godx-py-1.5 godx-text-sm godx-outline-none godx-transition-colors focus:godx-bg-gray-100 focus:godx-text-gray-900 data-[disabled]:godx-pointer-events-none data-[disabled]:godx-opacity-50 dark:focus:godx-bg-gray-800 dark:focus:godx-text-gray-50",
      inset && "godx-pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      "godx-relative godx-flex godx-cursor-default godx-select-none godx-items-center godx-rounded-sm godx-py-1.5 godx-pl-8 godx-pr-2 godx-text-sm godx-outline-none godx-transition-colors focus:godx-bg-gray-100 focus:godx-text-gray-900 data-[disabled]:godx-pointer-events-none data-[disabled]:godx-opacity-50 dark:focus:godx-bg-gray-800 dark:focus:godx-text-gray-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="godx-absolute godx-left-2 godx-flex godx-h-3.5 godx-w-3.5 godx-items-center godx-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CgCheck className="godx-h-4 godx-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      "godx-relative godx-flex godx-cursor-default godx-select-none godx-items-center godx-rounded-sm godx-py-1.5 godx-pl-8 godx-pr-2 godx-text-sm godx-outline-none godx-transition-colors focus:godx-bg-gray-100 focus:godx-text-gray-900 data-[disabled]:godx-pointer-events-none data-[disabled]:godx-opacity-50 dark:focus:godx-bg-gray-800 dark:focus:godx-text-gray-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="godx-absolute godx-left-2 godx-flex godx-h-3.5 godx-w-3.5 godx-items-center godx-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <GoDotFill className="godx-h-4 godx-w-4 godx-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      "godx-px-2 godx-py-1.5 godx-text-sm godx-font-semibold",
      inset && "godx-pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn("godx--mx-1 godx-my-1 godx-h-px godx-bg-gray-100 dark:godx-bg-gray-800", className)}
    ref={ref}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("godx-ml-auto godx-text-xs godx-tracking-widest godx-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
