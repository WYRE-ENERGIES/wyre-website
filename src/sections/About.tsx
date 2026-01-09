import { ArrowUpRight } from "lucide-react"
import { Button } from "../components/ui/button"

const About = () => {

  return (
    <section id="about" className="relative min-h-screen py-24 lg:py-32">
      <div className="max-2xl:px-6 container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24">
          <p className="text-gray-400 max-sm:text-sm mb-4">Empowering Africa with Solar Energy and E.M.S</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-heading">
              Who are we?
            </h1>
            <Button
              asChild
            >
              <a href="/what-we-do">
                <span>More About Us</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Main Content - Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -top-12 -left-12 overflow-hidden rounded-2xl scale-95">
              <img
                src="/img/wyre-solar.png"
                alt="Solar panel installer working on rooftop"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/img/wyre-commercial.png"
                alt="Solar panel installer working on rooftop"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6 text-gray-600">
            <p className="text-base lg:text-lg leading-relaxed">
              Wyre is more than an energy-tech solution. We provide Energy Management Systems (EMS) and solar power solutions for businesses across Africa. Built on innovation and sustainability, we have grown into a trusted partner for organizations seeking smarter energy operations, reduced costs, and long-term efficiency.
            </p>
            <p className="text-base lg:text-lg leading-relaxed">
              Wyre's EMS platform provides instant alerts for generator misuse, load deviations, and unauthorized operations. It verifies utility bills, generates automated remote billing, and forecasts revenue using time-of-use data. Businesses can track carbon footprints, monitor compliance with energy policies, and compare performance across multiple sites. We serve single facilities and multi-site operations, providing complete visibility and control over energy consumption and costs.
            </p>
            <p className="text-base lg:text-lg leading-relaxed">
              Wyre’s data analytics deliver unprecedented visibility to accelerate cost-efficient transitions to renewable energy. Through Tier 1 solar and battery energy storage systems (BESS), combined with advanced remote monitoring and AI-driven insights, Wyre maximizes performance, reliability, and lifetime value for commercial and industrial clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


