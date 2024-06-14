

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const alertVariants = cva(
  "godx-relative godx-w-full godx-rounded-lg godx-border godx-border-gray-200 godx-px-4 godx-py-3 godx-text-sm [&>svg+div]:godx-translate-y-[-3px] [&>svg]:godx-absolute [&>svg]:godx-left-4 [&>svg]:godx-top-4 [&>svg]:godx-text-gray-950 [&>svg~*]:godx-pl-7 dark:godx-border-gray-800 dark:[&>svg]:godx-text-gray-50",
  {
    variants: {
      variant: {
        default: "godx-bg-white godx-text-gray-950 dark:godx-bg-gray-950 dark:godx-text-gray-50",
        destructive:
          "godx-border-red-500/50 godx-text-red-500 dark:godx-border-red-500 [&>svg]:godx-text-red-500 dark:godx-border-red-900/50 dark:godx-text-red-900 dark:dark:godx-border-red-900 dark:[&>svg]:godx-text-red-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    ref={ref}
    role="alert"
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => ( 

  // eslint-disable-next-line jsx-a11y/heading-has-content -- disCGKLXZ;JM;KLXZFJGKL;DSXZ
  <h5
    className={cn("godx-mb-1 godx-font-medium godx-leading-none godx-tracking-tight", className)}
    ref={ref}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("godx-text-sm [&_p]:godx-leading-relaxed", className)}
    ref={ref}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
