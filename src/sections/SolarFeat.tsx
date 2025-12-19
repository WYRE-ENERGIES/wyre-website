import { ArrowUpRight } from "lucide-react"
import { Button } from "../components/ui/button"

type SolarSolution = {
  title: string
  description: string
  image: string
}

const solarSolutions: SolarSolution[] = [
  {
    title: "Custom Solar System Design",
    description:
      "Tailored solar power solutions for homes, offices, and industrial facilities to optimize your energy needs and site conditions.",
    image: "/img/custom-solar.png",
  },
  {
    title: "Installation & Commissioning",
    description:
      "End-to-end solar setup by certified professionals, ensuring safety, reliability, and long-term performance.",
    image: "/img/installation.png",
  },
  {
    title: "Monitoring & Solar Maintenance",
    description:
      "Real-time tracking of energy production, consumption, and system health for proactive maintenance and maximum uptime.",
    image: "/img/maintenance.png",
  },
  {
    title: "Performance Optimization",
    description:
      "Advanced analytics to boost energy yield and reduce power loss due to inefficiencies.",
    image: "/img/performance.png",
  },
  {
    title: "Energy Storage Solutions",
    description:
      "Optimize energy storage with intelligent battery management, ensuring peak performance and cost-effective operation.",
    image: "/img/energy-storage.png",
  },
  {
    title: "Hybrid & Off-Grid Solutions",
    description:
      "Versatile solutions for grid-connected, off-grid, or hybrid systems to meet your energy needs and site requirements.",
    image: "/img/hybrid.png",
  },
]

const SolarFeat = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-2xl:px-6 container mx-auto px-6">
        <header className="mb-20">
          <p className="text-gray-400 max-sm:text-sm mb-4">Solar</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-heading max-w-5xl">
              Commercial & Industrial
              Solar/ <br />Energy Storage Solutions
            </h1>
            <Button
              asChild
            >
              <a href="/what-we-do">
                <span>Get a Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </header>

        <div className="flex flex-col gap-8">
          {solarSolutions.map((solution, index) => (
            <div
              key={solution.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center"
            >
              <div className="rounded-lg h-[200px] flex flex-col justify-center items-center border-4 border-white bg-gradient-to-b from-[#EDF3FA]/80 via-white to-[#EDF3FA]/90 p-6 sm:p-8 shadow-[0_20px_50px_rgba(6,24,44,0.05)]">
                <div className="w-full text-left flex flex-col gap-5 item-start h-full">
                  <p className="text-lg font-semibold text-[#102043]">{solution.title}</p>
                  <p className="text-[#4C5A77] leading-relaxed">{solution.description}</p>
                </div>
              </div>

              <div className="rounded-lg h-[200px] overflow-hidden shadow-[0_20px_50px_rgba(6,24,44,0.08)]">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolarFeat

