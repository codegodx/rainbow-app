import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "godx-inline-flex godx-items-center godx-justify-center godx-whitespace-nowrap godx-rounded-md godx-text-sm godx-font-medium godx-transition-colors focus-visible:godx-outline-none focus-visible:godx-ring-1 focus-visible:godx-ring-gray-950 disabled:godx-pointer-events-none disabled:godx-opacity-50 dark:focus-visible:godx-ring-gray-300",
  {
    variants: {
      variant: {
        default:
          "godx-bg-gray-900 godx-text-gray-50 godx-shadow hover:godx-bg-gray-900/90 dark:godx-bg-gray-50 dark:godx-text-gray-900 dark:hover:godx-bg-gray-50/90",
        destructive:
          "godx-bg-red-500 godx-text-gray-50 godx-shadow-sm hover:godx-bg-red-500/90 dark:godx-bg-red-900 dark:godx-text-gray-50 dark:hover:godx-bg-red-900/90",
        outline:
          "godx-border godx-border-gray-200 godx-bg-white godx-shadow-sm hover:godx-bg-gray-100 hover:godx-text-gray-900 dark:godx-border-gray-800 dark:godx-bg-gray-950 dark:hover:godx-bg-gray-800 dark:hover:godx-text-gray-50",
        secondary:
          "godx-bg-gray-100 godx-text-gray-900 godx-shadow-sm hover:godx-bg-gray-100/80 dark:godx-bg-gray-800 dark:godx-text-gray-50 dark:hover:godx-bg-gray-800/80",
        ghost: "hover:godx-bg-gray-100 hover:godx-text-gray-900 dark:hover:godx-bg-gray-800 dark:hover:godx-text-gray-50",
        link: "godx-text-gray-900 godx-underline-offset-4 hover:godx-underline dark:godx-text-gray-50",
      },
      size: {
        default: "godx-h-9 godx-px-4 godx-py-2",
        sm: "godx-h-8 godx-rounded-md godx-px-3 godx-text-xs",
        lg: "godx-h-10 godx-rounded-md godx-px-8",
        icon: "godx-h-9 godx-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode | React.ReactElement | React.JSX.Element; // Adjusted children prop type
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
