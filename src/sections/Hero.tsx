import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import ".././styles/contents.css"
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion"
import { FlipWords } from "../components/ui/shadcn-io/flip-words"
import LogoCloud from "../sections/LogoCloud"

const Hero = () => {
  const images = [
    {
      src: "/img/hero-img.png",
      alt: "hero image",
      containerClassName: "w-full h-full h-[75%] max-h-[600px] -ml-14 object-contain"
    },
    {
      src: "/img/wyre-monitor-1.png",
      alt: "hero image",
      containerClassName: "w-full h-full -ml-24 h-[70%] max-h-[580px] max-2xl:max-h-[500px] object-contain -ml-28 "
    },
    {
      src: "/img/solar-container.png",
      alt: "solar container",
      containerClassName: "w-full h-full h-[60%] max-h-[500px] -ml-24 object-contain rounded-2xl"
    },
    {
      src: "/img/energy-storage.png",
      alt: "energy storage",
      containerClassName: "w-full h-full h-[60%] max-h-[500px] -ml-24 heroImage object-contain rounded-2xl"
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [images.length])

  const heroHeadingVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.16 },
    },
  }

  const heroLetterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 8, stiffness: 100, duration: 0.5 },
    },
  }

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 0.98,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  return (
    <>
      <div className="min-h-[75vh] container relative overflow-hidden z-20 max-sm:px-6 max-2xl:px-12 w-full mx-auto flex items-center justify-center gap-8">
        <div className="flex flex-col flex-1 max-w-[60%] max-[599px]:max-w-full 2xl:px-0 2xl:ml-[10%]">
          <h1 className="flex gap-2 text-white text-[clamp(30px,4.5vw,65px)] not-italic font-bold leading-[clamp(3rem,6vw,6rem)] tracking-[-0.2rem] max-[700px]:text-[clamp(32px,5vw,75px)] max-[700px]:tracking-normal">
            <motion.span
              variants={heroHeadingVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex"
            >
              <motion.span variants={heroLetterVariants}>
                <FlipWords
                  words={["Digitalizing", "Accelerating"]}
                  duration={2000}
                  letterDelay={0.05}
                  wordDelay={0.3}
                  className="inline-block text-current"
                />
              </motion.span>
            </motion.span>
            Energy
          </h1>
          <h1 className="text-white text-[clamp(30px,4.5vw,65px)] not-italic font-bold sm:leading-[clamp(3.5rem,6.5vw,6.11rem)] tracking-[-0.2rem] max-[700px]:text-[clamp(32px,5vw,75px)] max-[700px]:tracking-normal">
            Efficiency and Solar
          </h1>
          <h1 className="text-white text-[clamp(30px,4.5vw,65px)] not-italic font-bold leading-[clamp(3.5rem,6.5vw,6.11rem)] tracking-[-0.2rem] max-[700px]:text-[clamp(32px,5vw,75px)] max-[700px]:tracking-normal">Transition <span
          // className="text-[#fcd642]"
          >  with AI</span>
          </h1>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }} className="mt-5 sm:mt-10 text-lg text-gray-700 max-w-lg leading-relaxed pb-12 max-[1199px]:max-w-none">
              Easily manage your energy use with a smart tool designed to lower utility bills, optimize consumption, and advance your sustainability goals.
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="button flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" asChild className="bg-gray-900 group hover:bg-gray-800 text-white rounded-full">
                  <a href="/get-started">
                    Request Demo <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-gray-700 group hover:text-gray-900 px-6 py-3">
                  <a href="/contact">
                    Contact Sales <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
                  </a>
                </Button>
              </motion.div>
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex-1 flex items-end justify-end max-w-[50%] max-md:hidden h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              className={"absolute top-[15%] -right-[18%] max-xl:max-w-[70%] xl:w-[65%] 2xl:w-[75%]"}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className={images[currentImageIndex].containerClassName}
              // className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="h-[25vh]">
        <LogoCloud />
      </motion.div>
    </>
  )
}

export default Hero
