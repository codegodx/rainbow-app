"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { TbX } from "react-icons/tb";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils";

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "godx-fixed godx-inset-0 godx-z-50 godx-bg-black/80 godx- data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[state=closed]:godx-fade-out-0 data-[state=open]:godx-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "godx-fixed godx-z-50 godx-gap-4 godx-bg-white godx-p-6 godx-shadow-lg godx-transition godx-ease-in-out data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[state=closed]:godx-duration-300 data-[state=open]:godx-duration-500 dark:godx-bg-gray-950",
  {
    variants: {
      side: {
        top: "godx-inset-x-0 godx-top-0 godx-border-b data-[state=closed]:godx-slide-out-to-top data-[state=open]:godx-slide-in-from-top",
        bottom:
          "godx-inset-x-0 godx-bottom-0 godx-border-t data-[state=closed]:godx-slide-out-to-bottom data-[state=open]:godx-slide-in-from-bottom",
        left: "godx-inset-y-0 godx-left-0 godx-h-full godx-w-3/4 godx-border-r data-[state=closed]:godx-slide-out-to-left data-[state=open]:godx-slide-in-from-left sm:godx-max-w-sm",
        right:
          "godx-inset-y-0 godx-right-0 godx-h-full godx-w-3/4 godx-border-l data-[state=closed]:godx-slide-out-to-right data-[state=open]:godx-slide-in-from-right sm:godx-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="godx-absolute godx-right-4 godx-top-4 godx-rounded-sm godx-opacity-70 godx-ring-offset-white godx-transition-opacity hover:godx-opacity-100 focus:godx-outline-none focus:godx-ring-2 focus:godx-ring-gray-950 focus:godx-ring-offset-2 disabled:godx-pointer-events-none data-[state=open]:godx-bg-gray-100 dark:godx-ring-offset-gray-950 dark:focus:godx-ring-gray-300 dark:data-[state=open]:godx-bg-gray-800">
        <TbX className="godx-h-4 godx-w-4" />
        <span className="godx-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "godx-flex godx-flex-col godx-space-y-2 godx-text-center sm:godx-text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "godx-flex godx-flex-col-reverse sm:godx-flex-row sm:godx-justify-end sm:godx-space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("godx-text-lg godx-font-semibold godx-text-gray-950 dark:godx-text-gray-50", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("godx-text-sm godx-text-gray-500 dark:godx-text-gray-400", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
