

import { Tracking } from "@repo/ui/aceternity";
import { HeroHighlights } from "@repo/ui/aceternity";
import { WobbleCard } from "@/components/card/cardwobble";
import { ShuffleHero } from "@/components/svg/widget";
import Link from "next/link";
import Image from "next/image";
import { TextSliceFade, TextFade } from "@/components/typograph/animateeffects";
import { ParalaxSection } from "@/components/paralax/paralaxsection";


export default function page() {
  return (
    <main className="godx-relative godx-min-h-screen">
      {/* <Image
       src={"/rainbowbg.jpg"}
       width={300}
       height={300}
       alt=""
       className="godx-fixed godx-opacity-10 godx-w-full godx--top-20 godx-object-contain"
     /> */}
      <div className="godx-relative godx-max-w-6xl godx-mx-auto godx-h-full">
        <Tracking>
          <HeroHighlights
            Title={text.title}
            Subtitle={text.description}
            link={<Link href="/">Pesan Sekarang</Link>}
          />
          <WobbleCard containerClassName="">
            <div className="godx-max-w-3xl">
              <h2 className="godx-max-w-sm md:godx-max-w-3xl godx-text-left godx-text-balance godx-text-base md:godx-text-xl lg:godx-text-4xl godx-font-semibold godx-tracking-[-0.015em] godx-text-white">
                {text.produktitle}
              </h2>
              <p className="godx-mt-4 godx-leading-tight godx-max-w-[26rem] godx-text-left godx-text-base/8 godx-text-neutral-200">
                {text.produkdeskripsi}
              </p>
            </div>
            <Image
              src={"/rainbowbg.jpg"}
              width={300}
              height={300}
              alt=""
              className="godx-absolute godx-w-[50%] godx--right-10 godx-bottom-0 godx-object-contain godx-rounded-ss-lg godx-opacity-70"
            />
          </WobbleCard>
          <div className="godx-w-full godx-flex godx-h-full godx-my-20 godx-space-x-4">
            <div className="godx-basis-1/2">
              <ShuffleHero />
            </div>
            <div className="godx-basis-1/2 godx-relative">
              <TextSliceFade
                className="!godx-text-8xl"
                text={textslicefade.text1}
              />
              <TextFade text={textfade.map((item) => item.text)} delay={0.3} />
              <TextFade
                className="!godx-h-20"
                y={-5}
                text={textfade.map((item) => item.text1)}
                delay={0.5}
              />
            </div>
          </div>
         <ParalaxSection />
        </Tracking>
      </div>
    </main>
  );
}

const textfade = [{
  text:"Roti Kukus &",
  text1:"Jajan Pasar.",
}];

const textslicefade = 
  {
    text1: "Aneka",
  }

const text = {
  title: "Java Rainbow.",
  description: "Tradisional Roti Kukus Sejak 2017.",
  produktitle: "Tersedia Dalam Berbagai Varian.",
  produkdeskripsi:
    "Disajikan fresh setiap hari untuk menciptakan rasa yang lebih baik.",
};
