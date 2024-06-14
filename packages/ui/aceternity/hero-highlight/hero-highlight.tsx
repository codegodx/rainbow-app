"use client";


import { cn } from "../../shadcn/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "godx-relative godx-h-[80vh] godx-rounded-2xl godx-flex godx-justify-center godx-w-full godx-group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className={cn(
          "godx-relative godx-top-20 godx-z-20 godx-py-auto",
          className
        )}
      >
        {children}
      </div>
      <div className="godx-absolute godx-inset-0 godx-bg-dot-thick-stone-800/80 dark:godx-bg-dot-thick-red-800 godx-pointer-events-none" />

      <motion.div
        className="godx-pointer-events-none godx-bg-dot-thick-indigo-500 dark:godx-bg-dot-thick-indigo-500 godx-absolute godx-inset-0 godx-opacity-0 godx-transition godx-duration-300 group-hover:godx-opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `godx-relative godx-inline-block godx-p-2 godx-rounded-lg godx-bg-gradient-to-r godx-from-indigo-500 godx-via-fuchsia-500  godx-to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
