
import { Tracking } from "@repo/ui/aceternity"
import { TextFade } from "@/components/typograph/animateeffects";

export default function MitraPage() {
  return (
    <Tracking className="godx-w-full godx-h-screen godx-flex godx-flex-col godx-justify-center godx-items-center">
      <div className="godx-flex godx-flex-col godx-text-center godx-container">
        <TextFade className="godx-w-full godx-text-center" text={textfade.map((item) => item.text)} delay={0.3} />
        <TextFade className="godx-w-full godx-text-cente" text={textfade.map((item) => item.text1)} delay={0.3} />
      </div>

    </Tracking>
  )
}

const textfade = [{
  text: "Product",
  text1: "Mitra UMKM",
}];
