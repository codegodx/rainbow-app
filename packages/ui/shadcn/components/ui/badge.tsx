import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "godx-inline-flex godx-items-center godx-rounded-md godx-border godx-border-gray-200 godx-px-2.5 godx-py-0.5 godx-text-xs godx-font-semibold godx-transition-colors focus:godx-outline-none focus:godx-ring-2 focus:godx-ring-gray-950 focus:godx-ring-offset-2 dark:godx-border-gray-800 dark:focus:godx-ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "godx-border-transparent godx-bg-gray-900 godx-text-gray-50 godx-shadow hover:godx-bg-gray-900/80 dark:godx-bg-gray-50 dark:godx-text-gray-900 dark:hover:godx-bg-gray-50/80",
        secondary:
          "godx-border-transparent godx-bg-gray-100 godx-text-gray-900 hover:godx-bg-gray-100/80 dark:godx-bg-gray-800 dark:godx-text-gray-50 dark:hover:godx-bg-gray-800/80",
        destructive:
          "godx-border-transparent godx-bg-red-500 godx-text-gray-50 godx-shadow hover:godx-bg-red-500/80 dark:godx-bg-red-900 dark:godx-text-gray-50 dark:hover:godx-bg-red-900/80",
        outline: "godx-text-gray-950 dark:godx-text-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
