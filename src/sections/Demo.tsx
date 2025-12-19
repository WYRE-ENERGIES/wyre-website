import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from "../components/magicui/border-beam"

export default function Feature() {
  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

  const images = {
    'item-1': {
      image: '/img/polaris-logo.png',
      alt: 'Database visualization',
    },
    'item-2': {
      image: '/img/polaris-logo.png',
      alt: 'Security authentication',
    },
    'item-3': {
      image: '/img/polaris-logo.png',
      alt: 'Identity management',
    },
    'item-4': {
      image: '/img/polaris-logo.png',
      alt: 'Analytics dashboard',
    },
  }

  return (
    <section className="py-12 md:py-20 lg:py-32">
      {/* <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div> */}
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">The foundation for AI</h2>
          <p>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Database Visualization
                </div>
              </AccordionTrigger>
              <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Advanced Authentication
                </div>
              </AccordionTrigger>
              <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Identity Management
                </div>
              </AccordionTrigger>
              <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Analytics Dashboard
                </div>
              </AccordionTrigger>
              <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                  <img
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}













// import { AnimatedList } from "../components/magicui/animated-list"

// import { cn } from "../lib/utils"


// interface Item {
//   name: string
//   description: string
//   icon: string
//   color: string
//   time: string
// }

// let notifications = [
//   {
//     name: "Payment received",
//     description: "Magic UI",
//     time: "15m ago",
//     icon: "💸",
//     color: "#00C9A7",
//   },
//   {
//     name: "User signed up",
//     description: "Magic UI",
//     time: "10m ago",
//     icon: "👤",
//     color: "#FFB800",
//   },
//   {
//     name: "New message",
//     description: "Magic UI",
//     time: "5m ago",
//     icon: "💬",
//     color: "#FF3D71",
//   },
//   {
//     name: "New event",
//     description: "Magic UI",
//     time: "2m ago",
//     icon: "🗞️",
//     color: "#1E86FF",
//   },
//   {
//     name: "File uploaded",
//     description: "Magic UI",
//     time: "1m ago",
//     icon: "📁",
//     color: "#8B5CF6",
//   },
//   {
//     name: "Task completed",
//     description: "Magic UI",
//     time: "30s ago",
//     icon: "✅",
//     color: "#10B981",
//   },
// ]

// notifications = Array.from({ length: 10 }, () => notifications).flat()

// const Notification = ({ name, description, icon, color, time }: Item) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
//         // animation styles
//         "transition-all duration-200 ease-in-out hover:scale-[103%]",
//         // light styles
//         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-10 items-center justify-center rounded-2xl"
//           style={{
//             backgroundColor: color,
//           }}
//         >
//           <span className="text-lg">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium ">
//             <span className="text-sm sm:text-lg">{name}</span>
//             <span className="mx-1">·</span>
//             <span className="text-xs text-gray-500">{time}</span>
//           </figcaption>
//           <p className="text-sm font-normal">{description}</p>
//         </div>
//       </div>
//     </figure>
//   )
// }

// export default function AnimatedListDemo({
//   className,
// }: {
//   className?: string
// }) {
//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-background p-6 shadow-lg",
//         className,
//       )}
//     >
//       <AnimatedList delay={1500}>
//         {notifications.map((item, idx) => (
//           <Notification {...item} key={idx} />
//         ))}
//       </AnimatedList>

//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
//     </div>
//   )
// }
