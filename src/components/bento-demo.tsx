import { FileTextIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon } from "lucide-react"

import AnimatedBeamMultipleOutputDemo from "../components/animated-beam-multiple-outputs"
import AnimatedListDemo from "../components/animated-list-demo"
import { BentoCard, BentoGrid } from "../components/magicui/bento-grid"
import { HorizontalScroll } from "./HorizontalScroll"
import AiChatPreview from "./AiChatPreview"

const features = [
  {
    Icon: FileTextIcon,
    name: "Scheduled reports",
    description: "we automatically generate summaries and analyses of your energy usage.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <HorizontalScroll
        repeat={3}
        duration="30s"
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_10%,#000_40%)]"
      >
        <img
          src="/img/wyre-report.jpeg"
          alt="Periodic Energy Usage Report"
          className="relative h-48 w-auto cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] transform-gpu transition-all duration-300 ease-out hover:blur-none object-contain shadow-sm"
        />
      </HorizontalScroll>
    ),
  },
  {
    Icon: BellIcon,
    name: "Get Notified",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_20%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Live Tracking",
    description: "Track all your energy usage from your source or devices",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: "" as unknown as React.ElementType,
    name: "Wyre AI",
    description: "Wyre AI analyzes your data and gives you quick insights",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <AiChatPreview className="absolute [mask-image:linear-gradient(to_top,transparent_5%,#b9b9b9_5%)] inset-x-4 top-4 bottom-4 rounded-xl shadow-sm transition-all duration-300 ease-out" />
    ),
  },
]

export default function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard data-aos="fade-left"
          data-aos-delay={idx + 100} key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
