"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "@repo/ui/fm";
import { cn } from "@repo/ui/utils.ts";
import Link from "next/link";
import { pressStart } from "@/config/fonts";
import { usePathname } from "next/navigation";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
   const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <nav className={`${pressStart.className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "godx-flex godx-max-w-fit godx-fixed godx-top-10 godx-inset-x-0 godx-mx-auto godx-border godx-border-transparent godx-rounded-full godx-bg-slate-800/50 godx-backdrop-blur-md godx-shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_2px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] godx-z-[5000] godx-pr-2 godx-pl-8  godx-items-center godx-justify-center godx-space-x-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={`godx-relative dark:godx-text-neutral-50 godx-items-center godx-flex godx-space-x-1 godx-text-neutral-200 hover:godx-text-cyan-500 ${pathname === navItem.link ? "godx-underline godx-underline-offset-1 godx-decoration-cyan-500 " : ""} `}
            >
              <span className="godx-block sm:godx-hidden">{navItem.icon}</span>
              <span className="godx-hidden sm:godx-block godx-text-sm">
                {navItem.name}
              </span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};
