import { Tracking } from "@repo/ui/aceternity"
import { TextFade } from "@/components/typograph/animateeffects";

export default function ProductPage() {
  return (
   <Tracking className="godx-w-full godx-h-screen godx-flex godx-flex-col godx-justify-center godx-items-center">
    <div className="godx-flex godx-container godx-space-x-8">
      <TextFade text={textfade.map((item) => item.text1)} delay={0.3} />
      <TextFade text={textfade.map((item) => item.text)} delay={0.3} />
      </div>
    
   </Tracking>
  )
}

const textfade = [{
  text: "Menu",
  text1: "Product",
}];