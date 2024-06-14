"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "@repo/ui/fm";
import { cn } from "@repo/ui/utils.ts";



export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

       const Ref = React.useRef(null);
       const { scrollYProgress } = useScroll({
         target: Ref,
         offset: ["start start", "end end"],
       });
       const springConfig = { stiffness: 300, damping: 30 };

       const translateY = useSpring(
         useTransform(scrollYProgress, [0, 1], [0, 200]),
         springConfig
       );

  return (
    <motion.div
      ref={Ref}
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.5}}
    >
      
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        style={{
          transform: isHovering
            ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          transition: "transform 0.1s ease-out"
        }}
        className={cn(
          "godx-mx-auto godx-w-full godx-bg-cyan-500/60 godx-relative godx-rounded-2xl godx-overflow-hidden",
          containerClassName
        )}
      >
        <div
          className="godx-relative godx-z-10 godx-h-[70vh] [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:godx-mx-0 sm:godx-rounded-2xl godx-overflow-hidden"
          style={{
            boxShadow:
              "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
          }}
        >
          <motion.div
            style={{
              transform: isHovering
                ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
              transition: "transform 0.1s ease-out",
            }}
            className={cn(
              "godx-h-full godx-px-4 godx-py-20 sm:godx-px-10",
              className
            )}
          >
            <Noise />
            {children}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Noise = () => {
  return (
    <div
      className="godx-absolute godx-z-10 godx-inset-0 godx-w-full godx-h-full godx-scale-[1.2] godx-transform godx-opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
