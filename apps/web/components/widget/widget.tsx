"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "@repo/ui/fm";
import Image from "next/image";

export const Widgets = ({

}:
{}
) => {
  const { scrollYProgress } = useScroll();
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, 200]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <div className="godx-flex godx-items-center godx-my-10 godx-w-full godx-h-full">
      <div className="godx-relative godx-grid-cols-4 godx-w-1/2 godx-bg-slate-400/80 godx-gap-4">
       
        
            <Image
            
              src="/rainbowcake.jpg"
              alt="Aceternity Logo"
              width={200}
              height={200}
              className="godx-rounded-3xl godx-col-span-2"
            />
         
       
      </div>

      <div className="godx-relative godx-place-content-center godx-px-20 godx-w-1/2">
        <h3 className="godx-text-6xl  godx-font-semibold godx-text-white">
          Lorem ipsum dolor sit.
        </h3>
      </div>
    </div>
  );
}


const content = [ 
  { 
 image : "/rainbowcake.jpg",
 title: "Lorem ipsum dolor sit.",
  },
  {
    image: "/rainbowbg.jpg",
    title: "Lorem ipsum dolor sit.",
  },
  {
    image: "/rainbowbg.jpg",
    title: "Lorem ipsum dolor sit.",
  },
  {
    image: "/rainbowbg.jpg",
    title: "Lorem ipsum dolor sit.",
  },
  {
    image: "/rainbowbg.jpg",
    title: "Lorem ipsum dolor sit.",
  },

 
];
