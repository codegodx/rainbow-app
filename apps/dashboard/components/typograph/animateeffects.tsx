"use client"

import {motion} from "@repo/ui/fm"
import { cn } from "@repo/ui/utils.ts";
import * as React from "react";


export const TextSliceFade = ({ text, className }: { text: string, className?: string }) => {
    const targetref = React.useRef<HTMLDivElement | null>(null);
    return (
      <motion.div
        ref={targetref}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 1.5, type: "spring" }}

        className="godx-flex godx-justify-end godx-overflow-hidden godx-relative godx-w-full godx-h-20 godx-bg-blue-600 godx-rounded-md hover:godx-bg-cyan-300"
      >
        {text.split("").map((char, idx) => (
          <motion.h2
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: -5 }}
            transition={{
              delay: idx * 0.2,
              ease: "easeInOut",
              duration: 0.2,
            }}
            className={cn(
              "godx-text-6xl godx-font-extrabold godx-text-white hover:godx-text-purple-700",
              className
            )}
          >
            {char}
          </motion.h2>
        ))}
      </motion.div>
    );
}


export const TextFade = ({
  text,
  className,
  delay,
  y,
}: {
  text: string[];
  className?: string;
  delay?: number;
  y?: number;
}) => {
  const targetref = React.useRef<HTMLDivElement | null>(null);
  return (
    <motion.div
      className="godx-w-full godx-p-0.5"
      ref={targetref}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      initial={{ clipPath: "inset(0 0 100% 50%)" }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      {text.map((char, idx) => (
        <motion.h2
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: y || 0 }}
          transition={{ delay, ease: "easeInOut" }}
          className={cn(
            "godx-text-6xl godx-w-full godx-text-right godx-font-extrabold godx-text-white hover:godx-text-purple-700",
            className
          )}
        >
          {char}
        </motion.h2>
      ))}
    </motion.div>
  );
};
