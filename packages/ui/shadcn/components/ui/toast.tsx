"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { FaCross } from "@ui/icon/react-icons"
import { cn } from "@ui/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    className={cn(
      "godx-fixed godx-top-0 godx-z-[100] godx-flex godx-max-h-screen godx-w-full godx-flex-col-reverse godx-p-4 sm:godx-bottom-0 sm:godx-right-0 sm:godx-top-auto sm:godx-flex-col md:godx-max-w-[420px]",
      className
    )}
    ref={ref}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "godx-group godx-pointer-events-auto godx-relative godx-flex godx-w-full godx-items-center godx-justify-between godx-space-x-2 godx-overflow-hidden godx-rounded-md godx-border godx-border-gray-200 godx-p-4 godx-pr-6 godx-shadow-lg godx-transition-all data-[swipe=cancel]:godx-translate-x-0 data-[swipe=end]:godx-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:godx-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:godx-transition-none data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[swipe=end]:godx-animate-out data-[state=closed]:godx-fade-out-80 data-[state=closed]:godx-slide-out-to-right-full data-[state=open]:godx-slide-in-from-top-full data-[state=open]:sm:godx-slide-in-from-bottom-full dark:godx-border-gray-800",
  {
    variants: {
      variant: {
        default: "godx-border godx-bg-white godx-text-gray-950 dark:godx-bg-gray-950 dark:godx-text-gray-50",
        destructive:
          "godx-destructive godx-group godx-border-red-500 godx-bg-red-500 godx-text-gray-50 dark:godx-border-red-900 dark:godx-bg-red-900 dark:godx-text-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      className={cn(toastVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    className={cn(
      "godx-inline-flex godx-h-8 godx-shrink-0 godx-items-center godx-justify-center godx-rounded-md godx-border godx-border-gray-200 godx-bg-transparent godx-px-3 godx-text-sm godx-font-medium godx-transition-colors hover:godx-bg-gray-100 focus:godx-outline-none focus:godx-ring-1 focus:godx-ring-gray-950 disabled:godx-pointer-events-none disabled:godx-opacity-50 group-[.destructive]:godx-border-gray-100/40 group-[.destructive]:hover:godx-border-red-500/30 group-[.destructive]:hover:godx-bg-red-500 group-[.destructive]:hover:godx-text-gray-50 group-[.destructive]:focus:godx-ring-red-500 dark:godx-border-gray-800 dark:hover:godx-bg-gray-800 dark:focus:godx-ring-gray-300 dark:group-[.destructive]:godx-border-gray-800/40 dark:group-[.destructive]:hover:godx-border-red-900/30 dark:group-[.destructive]:hover:godx-bg-red-900 dark:group-[.destructive]:hover:godx-text-gray-50 dark:group-[.destructive]:focus:godx-ring-red-900",
      className
    )}
    ref={ref}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    className={cn(
      "godx-absolute godx-right-1 godx-top-1 godx-rounded-md godx-p-1 godx-text-gray-950/50 godx-opacity-0 godx-transition-opacity hover:godx-text-gray-950 focus:godx-opacity-100 focus:godx-outline-none focus:godx-ring-1 group-hover:godx-opacity-100 group-[.destructive]:godx-text-red-300 group-[.destructive]:hover:godx-text-red-50 group-[.destructive]:focus:godx-ring-red-400 group-[.destructive]:focus:godx-ring-offset-red-600 dark:godx-text-gray-50/50 dark:hover:godx-text-gray-50",
      className
    )}
    ref={ref}
    toast-close=""
    {...props}
  >
    <FaCross className="godx-h-4 godx-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    className={cn("godx-text-sm godx-font-semibold [&+div]:godx-text-xs", className)}
    ref={ref}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    className={cn("godx-text-sm godx-opacity-90", className)}
    ref={ref}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
