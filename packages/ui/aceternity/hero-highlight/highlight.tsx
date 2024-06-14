"use client";

import * as React from "react";

import { motion} from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { HoverGradient } from "../hover/gradienthover";


export function HeroHighlights({
    Title,
    Subtitle,
    link
}:{
    Title?: string;
    Subtitle?: string;
    link?: React.ReactNode;
}
) {
  
  return (
    <HeroHighlight containerClassName="godx-rounded-xl godx-overflow-hidden godx-my-10  ">
      <div className="godx-flex godx-justify-center godx-items-center godx-flex-col godx-space-y-5">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="godx-flex godx-bg-gradient-to-tr godx-bg-clip-text godx-text-transparent godx-from-orange-500 godx-to-yellow-200 godx-flex-col godx-tracking-tighter godx-text-2xl godx-px-4 md:godx-text-6xl lg:godx-text-9xl godx-font-bold godx-text-neutral-700 dark:godx-text-white godx-max-w-4xl godx-leading-relaxed lg:godx-leading-0 godx-text-center godx-mx-auto "
        >
          {Title}
          <Highlight className="godx-text-slate-950 godx-text-xl md:godx-text-4xl lg:godx-text-5xl godx-tracking-tighter godx-dark:text-white">
            {Subtitle}
          </Highlight>
        </motion.h1>

        
      <HoverGradient
        containerClassName="godx-rounded-full"
      >
        {link}
       
      </HoverGradient>
      
      </div>
    </HeroHighlight>
  );
}
