"use client";
import React, { useState } from "react";
import { motion } from "@repo/ui/fm";
import { cn } from "@repo/ui/utils.ts";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "godx-relative godx-group/pin godx-z-50  godx-cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="godx-absolute godx-left-1/2 godx-top-1/2 godx-ml-[0.09375rem] godx-mt-4 -godx-translate-x-1/2 -godx-translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="godx-absolute godx-left-1/2 godx-p-4 godx-top-1/2 godx-flex godx-justify-start godx-items-start godx-rounded-2xl godx-shadow-[0_8px_16px_rgb(0_0_0/0.4)] godx-bg-black godx-border godx-border-white/[0.1] group-hover/pin:godx-border-white/[0.2] godx-transition godx-duration-700 godx-overflow-hidden"
        >
          <div className={cn("godx-relative godx-z-50 ", className)}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} />
    </div>
  );
};

export const PinPerspective = ({
  title,
}: {
  title?: string;
}) => {
  return (
    <motion.div className="godx-pointer-events-none godx-w-96 godx-h-80 godx-flex godx-items-center godx-justify-center godx-opacity-0 group-hover/pin:godx-opacity-100 godx-z-[60] godx-transition godx-duration-500">
      <div className=" godx-w-full godx-h-full godx--mt-7 godx-flex-none godx-inset-0">
        <div className="godx-absolute godx-top-0 godx-inset-x-0 godx-flex godx-justify-center">
          <Link
            href="/"
            target={"_blank"}
            className="godx-relative godx-flex godx-space-x-2 godx-items-center godx-z-10 godx-rounded-full godx-bg-zinc-950 godx-py-0.5 godx-px-4 godx-ring-1 godx-ring-white/10 "
          >
            <span className="godx-relative godx-z-20 godx-text-white godx-text-xs godx-font-bold godx-inline-block godx-py-0.5">
              {title}
            </span>

            <span className="godx-absolute -godx-bottom-0 godx-left-[1.125rem] godx-h-px godx-w-[calc(100%-2.25rem)] godx-bg-gradient-to-r godx-from-emerald-400/0 godx-via-emerald-400/90 godx-to-emerald-400/0 godx-transition-opacity godx-duration-500 group-hover/btn:godx-opacity-40"></span>
          </Link>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="godx-absolute godx-left-1/2 godx-top-1/2 godx-ml-[0.09375rem] godx-mt-4 -godx-translate-x-1/2 -godx-translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="godx-absolute godx-left-1/2 godx-top-1/2 godx-h-[11.25rem] godx-w-[11.25rem] godx-rounded-[50%] godx-bg-sky-500/[0.08] godx-shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="godx-absolute godx-left-1/2 godx-top-1/2  godx-h-[11.25rem] godx-w-[11.25rem] godx-rounded-[50%] godx-bg-sky-500/[0.08] godx-shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="godx-absolute godx-left-1/2 godx-top-1/2  godx-h-[11.25rem] godx-w-[11.25rem] godx-rounded-[50%] godx-bg-sky-500/[0.08] godx-shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
     
          <motion.div className="godx-absolute godx-right-1/2 godx-bottom-1/2 godx-bg-gradient-to-b godx-from-transparent godx-to-cyan-500 godx-translate-y-[14px] godx-w-px godx-h-20 group-hover/pin:godx-h-40 godx-blur-[2px]" />
          <motion.div className="godx-absolute godx-right-1/2 godx-bottom-1/2 godx-bg-gradient-to-b godx-from-transparent godx-to-cyan-500 godx-translate-y-[14px] godx-w-px godx-h-20 group-hover/pin:godx-h-40  " />
          <motion.div className="godx-absolute godx-right-1/2 godx-translate-x-[1.5px] godx-bottom-1/2 godx-bg-cyan-600 godx-translate-y-[14px] godx-w-[4px] godx-h-[4px] godx-rounded-full godx-z-40 godx-blur-[3px]" />
          <motion.div className="godx-absolute godx-right-1/2 godx-translate-x-[0.5px] godx-bottom-1/2 godx-bg-cyan-300 godx-translate-y-[14px] godx-w-[2px] godx-h-[2px] godx-rounded-full godx-z-40 ">
        </motion.div>
        </>
      </div>
    </motion.div>
  );
};
