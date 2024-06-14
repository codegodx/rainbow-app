"use client"

import * as React from 'react'
import { PinContainer } from "@/components/card/pincard";
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "@repo/ui/fm";

export const ParalaxSection = () => {

     const containref = React.useRef(null);
      const { scrollYProgress } = useScroll({
        target: containref,
        offset: ["start start", "end end"],
      });
       const springConfig = { stiffness: 300, damping: 30};

    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 200]),springConfig
        );

  return (
    <div className="godx-w-full godx-h-[30rem] godx-flex godx-items-center godx-justify-center"
    ref={containref}
    >
      <div className="godx-basis-1/2">
        <PinContainer
          title="Yogyakarta kota dan sekitarnya."
          href="javarainbow.com"
          className=""
        >
          <div className="godx-flex godx-basis-full godx-flex-col godx-p-4 godx-tracking-tight godx-text-slate-100/50 sm:godx-basis-1/2 godx-w-[20rem] godx-h-[20rem] ">
            <h3 className="godx-max-w-xs !godx-pb-2 !godx-m-0 godx-font-bold  godx-text-3xl godx-text-slate-100">
              Gratis Antar.
            </h3>
            <div className="godx-text-base !godx-m-0 !godx-p-0 godx-font-normal">
              <span className="godx-text-slate-500 ">
                Untuk wilayah jogyakarta kota dan sekitarnya.
              </span>
            </div>
            <div className="godx-flex godx-relative godx-flex-1 godx-w-full godx-p-10">
              <Image
                src={"/tugu.png"}
                width={400}
                height={300}
                alt=""
                className="godx-absolute godx-w-full godx-h-full godx-opacity-65 godx-rounded-ss-[5rem]"
              />
              <div className="godx-absolute godx-w-full godx-h-10 godx-from-black -godx-bottom-8 godx-bg-gradient-to-t "></div>
              <div className="godx-absolute godx-w-10 godx-h-full godx-from-black -godx-right-9 godx-bg-gradient-to-l godx-blur-sm "></div>
            </div>
          </div>
        </PinContainer>
      </div>
      <div className="godx-basis-1/2">
        <motion.div
        style={{ translateY }}
        >
        <Image src={"/kurirs.png"} width={500} height={500} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
