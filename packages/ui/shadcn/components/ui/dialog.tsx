"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "godx-fixed godx-inset-0 godx-z-50 godx-bg-slate-950/60  godx-backdrop-blur-md data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[state=closed]:godx-fade-out-0 data-[state=open]:godx-fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "godx-fixed godx-left-[50%] godx-top-[50%] godx-z-50 godx-grid godx-w-full godx-max-w-lg godx-translate-x-[-50%] godx-translate-y-[-50%] godx-gap-4 godx-border godx-border-gray-200 godx-bg-white godx-p-6 godx-shadow-lg godx-duration-200 data-[state=open]:godx-animate-in data-[state=closed]:godx-animate-out data-[state=closed]:godx-fade-out-0 data-[state=open]:godx-fade-in-0 data-[state=closed]:godx-zoom-out-95 data-[state=open]:godx-zoom-in-95 data-[state=closed]:godx-slide-out-to-left-1/2 data-[state=closed]:godx-slide-out-to-top-[48%] data-[state=open]:godx-slide-in-from-left-1/2 data-[state=open]:godx-slide-in-from-top-[48%] sm:godx-rounded-lg dark:godx-border-gray-800 dark:godx-bg-gray-950",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "godx-flex godx-flex-col godx-space-y-1.5 godx-text-center sm:godx-text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
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
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "godx-text-lg godx-font-semibold godx-leading-none godx-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "godx-text-sm godx-text-gray-500 dark:godx-text-gray-400",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
