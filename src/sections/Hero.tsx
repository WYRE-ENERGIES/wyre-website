import { ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import ".././styles/contents.css"
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion"
import img1 from "/img/hero-img.png"
import img2 from "/img/wyre-monitor-1.png"
import img3 from "/img/wyre-commercial.png"
import { FlipWords } from "../components/ui/shadcn-io/flip-words"
import LogoCloud from "../sections/LogoCloud"

const Hero = () => {
  const images = [
    {
      src: img1,
      alt: "hero image",
      containerClassName: "w-full h-full h-[75%] max-h-[600px] -ml-14 object-contain"
    },
    {
      src: img2,
      alt: "hero image",
      containerClassName: "w-full h-full -ml-24 h-[70%] max-h-[580px] max-2xl:max-h-[500px] object-contain -ml-28 "
    },
    {
      src: img3,
      alt: "solar container",
      containerClassName: "w-full h-full h-[60%] max-h-[500px] -ml-24 object-contain rounded-2xl"
    },
  ]


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
            <motion.div
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
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex-1 flex items-end justify-end max-w-[50%] max-md:hidden h-full">
          {images.map((image, index) => (
            <div key={index} className={`absolute top-[15%] -right-[18%] max-xl:max-w-[70%] xl:w-[65%] 2xl:w-[75%] animate-hero-image-${index + 1}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={image.containerClassName}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
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
