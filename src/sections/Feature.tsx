import BentoDemo from "../components/bento-demo"
// import { useState } from "react"
// import { ChartBarIncreasingIcon, ChartLine, Eye, Newspaper, Share2, Target } from 'lucide-react'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
// import { motion, AnimatePresence } from 'motion/react'
// import { BorderBeam } from "../components/magicui/border-beam"

const Feature = () => {
  // type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
  // const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

  // const images = {
  //   'item-1': {
  //     image: '/img/wyre-monitor.png',
  //     alt: 'Database visualization',
  //   },
  //   'item-2': {
  //     image: '/img/wyre-view.png',
  //     alt: 'Security authentication',
  //   },
  //   'item-3': {
  //     image: '/img/wyre-app-holding.png',
  //     alt: 'Identity management',
  //   },
  //   'item-4': {
  //     image: '/img/wyre-monitor.png',
  //     alt: 'Analytics dashboard',
  //   },
  //   'item-5': {
  //     image: '/img/wyre-report.jpeg',
  //     alt: 'Analytics dashboard',
  //   },
  //   'item-6': {
  //     image: '/img/wyre-access.png',
  //     alt: 'Analytics dashboard',
  //   },
  // }

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-24 lg:py-32 space-y-[150px] lg:space-y-[200px]">
      <div className="max-2xl:px-6 container gap-12 mx-auto flex flex-col max-xl:flex-col items-center">
        <article className="text-center">
          <h3
            data-aos="fade-right"
            data-aos-delay="0"
            className="text-gray-400 max-sm:text-sm mb-4">Monitor and manage your facility’s energy performance from anywhere</h3>
          <h1 data-aos="fade-right"
            data-aos-delay="50" className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-heading max-w-5xl">
            All Your Energy Data, Insights, and Tools, Right at Your Fingertips
          </h1>
        </article>
        <div className="max-w-7xl">
          <BentoDemo />
        </div>
      </div>
    </section>
  )
}

export default Feature
