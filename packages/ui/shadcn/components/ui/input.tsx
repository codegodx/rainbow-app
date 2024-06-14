import * as React from "react"
import { cn } from "../../lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "godx-flex godx-h-9 godx-w-full godx-rounded-md godx-border godx-border-gray-200 godx-bg-transparent godx-px-3 godx-py-1 godx-text-sm godx-shadow-sm godx-transition-colors file:godx-border-0 file:godx-bg-transparent file:godx-text-sm file:godx-font-medium placeholder:godx-text-gray-500 focus-visible:godx-outline-none focus-visible:godx-ring-1 focus-visible:godx-ring-gray-950 disabled:godx-cursor-not-allowed disabled:godx-opacity-50 dark:godx-border-gray-800 dark:placeholder:godx-text-gray-400 dark:focus-visible:godx-ring-gray-300",
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
