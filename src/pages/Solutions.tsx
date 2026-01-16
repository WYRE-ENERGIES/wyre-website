import React from 'react'
import { Check, Building2, Users, Settings, ArrowRight, TrendingUp, Globe, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNav from '../components/navbar/OtherNavbar'
import { Button } from '../components/ui/button'
import Footer from '../sections/Footer'
import { AnimatedGridPattern } from '../components/magicui/animated-grid-pattern'
import { cn } from '../lib/utils'

const solarSolutions = [
  {
    title: "Enterprise Solar System Design",
    description: "Tailored solar power solutions for large commercial and industrial facilities. Custom-designed systems optimized for enterprise energy requirements and operational efficiency.",
    image: "/img/custom-solar.png",
  },
  {
    title: "Installation & Commissioning",
    description: "Enterprise-grade solar installation by certified professionals. End-to-end project management ensuring safety, reliability, and long-term performance for large-scale deployments.",
    image: "/img/installation.png",
  },
  {
    title: "Monitoring & Solar Maintenance",
    description: "Advanced real-time tracking of energy production, consumption, and system health. Proactive maintenance protocols designed for enterprise operations.",
    image: "/img/maintenance.png",
  },
  {
    title: "Performance Optimization",
    description: "Enterprise-level analytics to maximize energy yield and minimize power loss. Data-driven optimization strategies for large-scale solar installations.",
    image: "/img/performance.png",
  },
  {
    title: "Energy Storage Solutions",
    description: "Enterprise energy storage systems with intelligent battery management. Optimized for peak performance, backup power, and demand response capabilities.",
    image: "/img/wyre-commercial.png",
  },
  {
    title: "Hybrid & Off-Grid Solutions",
    description: "Enterprise-grade solutions for grid-connected, off-grid, or hybrid systems. Designed to meet complex organizational energy requirements and reliability standards.",
    image: "/img/hybrid.png",
  },
]

const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <OtherNav />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20 pb-12 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-heading mb-4 leading-tight"
          >
            Enterprise Energy Solutions
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            Comprehensive energy management and solar solutions designed exclusively for large organizations
          </motion.p>
        </div>
      </motion.section>

      {/* EMS Service Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            {/* <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-heading mb-4">
              Energy Management <span className="text-brandColor">As A Service</span>
              <div className="h-1 w-32 bg-yellow-400 mt-2 rounded-full"></div>
            </motion.h2> */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6">
              <div>
                <motion.div variants={fadeUp} className="text-sm font-semibold text-brandColor uppercase tracking-wider mb-2">
                  E.M.S
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-heading">
                  Energy Management <span className="text-brandColor">As A Service</span>
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Button asChild size="lg" className="">
                  <a href="/#ems">
                    <span>Learn More</span>
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl">
              Enterprise-grade energy management solutions designed for large organizations. Save up to 30% on energy expenses with intelligent monitoring, analytics, and automated recommendations tailored for enterprise operations.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="mt-8 w-full">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden w-full">
              <div className="overflow-x-auto w-full">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-brandColor/10 to-purple-500/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-heading w-1/2">Core Features</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-heading w-1/2">Advanced Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Creates energy policy with measurable metrics</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Generator size efficiency</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Track compliance</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">A.I powered energy baseline and forecast</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Utility bill verification</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Carbon tracker</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Diesel utilization trend analysis and deviation</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Power quality logs</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Energy use analysis (Utility, Gas, Diesel or Solar)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Alerts & Alarms</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Power demand analysis</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Email notifications</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Detect Unauthorized generator and load operations</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">Time of use of energy Sources</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section >

      {/* Service Tiers */}
      < motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pb-16 px-6 bg-gray-50/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp}>
              <TierCard
                title="Enterprise Single Site"
                description="Comprehensive energy management for large facilities. Monitor 3 energy sources with 5 years historical archive, detailed analysis from 15 minutes to a year, and unlimited email alerts for deviation and budget performance."
                image="/img/single.png"
                fallbackIcon={<Building2 className="h-12 w-12 text-brandColor" />}
                features={[
                  "Real-time monitoring dashboard",
                  "5-year historical data archive",
                  "Advanced analytics & reporting",
                  "Unlimited alert notifications",
                  "Budget performance tracking"
                ]}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TierCard
                title="Enterprise Multi-Site"
                description="Centralized energy management across multiple enterprise locations. Set organizational goals, track performance, and optimize energy consumption across your entire portfolio."
                image="/img/multiple.png"
                fallbackIcon={<Users className="h-12 w-12 text-brandColor" />}
                features={[
                  "Centralized admin portal",
                  "Multi-site performance ranking",
                  "Organizational goal tracking",
                  "Multi-level reporting & analytics",
                  "Role-based access control",
                  "Cross-site energy optimization"
                ]}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TierCard
                title="Enterprise Bespoke"
                description="Custom-built energy management solutions tailored to your enterprise needs. Monitor unlimited energy sources and loads with advanced features designed for complex organizational requirements."
                image="/img/bespoke.png"
                fallbackIcon={<Settings className="h-12 w-12 text-brandColor" />}
                features={[
                  "Custom energy source monitoring",
                  "Advanced energy balance analysis",
                  "Significant energy user identification",
                  "Tailored reporting & dashboards",
                  "Dedicated support team",
                  "Custom integrations & APIs"
                ]}
              />
            </motion.div>
          </div>
        </div>
      </motion.section >

      {/* Enterprise Payment Options */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div variants={fadeUp} className="text-sm font-semibold text-brandColor uppercase tracking-wider mb-2">
              Enterprise Solutions
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Monitoring & Maintenance <span className="text-brandColor">Payment Plans</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible enterprise payment options designed for large organizations. Choose the monitoring and maintenance plan that fits your operational needs and budget.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-brandColor/5 to-purple-500/5 rounded-2xl p-8 border border-brandColor/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brandColor rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-heading">Continuous Monitoring</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Real-time energy monitoring and analytics with 24/7 system oversight. Perfect for enterprises requiring constant visibility into energy consumption and performance metrics.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 real-time monitoring dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated alerts & notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly performance reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Historical data access (5 years)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-2">Payment Options:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-brandColor font-semibold">•</span>
                    <span className="text-gray-700">Monthly subscription: Custom pricing based on site count</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brandColor font-semibold">•</span>
                    <span className="text-gray-700">Annual contract: 15% discount on monthly rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brandColor font-semibold">•</span>
                    <span className="text-gray-700">Multi-year agreement: Volume discounts available</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-purple-500/5 to-brandColor/5 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-heading">Maintenance & Support</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Comprehensive maintenance services including system updates, hardware support, and proactive issue resolution. Ensure optimal performance and minimize downtime.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regular system health checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hardware maintenance & repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Software updates & upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority technical support (24/7)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">On-site service visits (as needed)</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-2">Payment Options:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-semibold">•</span>
                    <span className="text-gray-700">Per-site maintenance fee: Custom pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-semibold">•</span>
                    <span className="text-gray-700">Annual maintenance contract: Fixed rate per site</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-semibold">•</span>
                    <span className="text-gray-700">Combined monitoring + maintenance: Bundle discount</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              All enterprise plans include dedicated account management, custom SLA agreements, and flexible payment terms.
            </p>
            <Button asChild size="lg" className="bg-brandColor hover:bg-brandColor/80 text-white">
              <a href="/contact">
                <span>Request Enterprise Quote</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* NEW: Solar Features Section */}
      < motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-[#F8FAFC]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div variants={fadeUp} className="text-sm font-semibold text-brandColor uppercase tracking-wider mb-2">
                Sustainable Solutions
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-heading">
                Solar & Energy <span className="text-brandColor">Storage Solutions</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="">
                <a href="/contact">
                  <span>Get a Quote</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solarSolutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-brandColor transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section >

      {/* Smart Grid Section */}
      < motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-heading mb-6">
              Smart Grid
              <div className="h-1 w-24 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wyre provides smart metering solutions for IPPs using natural gas as a green source of energy to provide reliable power for underserved communities.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left mb-20 bg-gray-50 p-8 rounded-3xl"
          >
            <div className="text-lg text-muted-foreground">
              Over <span className="text-4xl font-bold text-brandColor mx-2">9,000,000</span> kWh
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-300"></div>
            <div className="text-lg text-muted-foreground">
              billed for clients receiving over
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <span className="bg-yellow-400 text-heading font-bold px-4 py-2 rounded-lg text-2xl shadow-sm">
                ₦ 810,000,000
              </span>
              <span className="text-muted-foreground font-medium">OR</span>
              <span className="bg-yellow-400 text-heading font-bold px-4 py-2 rounded-lg text-2xl shadow-sm">
                $ 1,392,000
              </span>
            </div>
          </motion.div>

          {/* Grid Features + Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="space-y-6">
              <FeatureCheck text="Access to live and historical data" color="text-yellow-500" />
              <FeatureCheck text="Real time fault detection across network" color="text-yellow-500" />
              <FeatureCheck text="Automated remote billing" color="text-yellow-500" />
              <FeatureCheck text="Time of use billing (Demand response)" color="text-yellow-500" />
              <FeatureCheck text="Forecast of expected revenue" color="text-yellow-500" />
              <FeatureCheck text="Power quality monitoring" color="text-yellow-500" />
              <FeatureCheck text="Custom alerts and alarms for instant notification" color="text-yellow-500" />
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              {/* Placeholder for Phone Image in screenshot */}
              <div className="relative mx-auto max-w-sm">
                <div className="bg-gray-100 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-200">
                  <img
                    src="/img/wyre-app-holding.png"
                    alt="Smart Grid App"
                    className="rounded-[2.5rem] w-full h-auto shadow-inner"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/300x600/f3f4f6/6b7280?text=App+Preview";
                    }}
                  />
                </div>
                {/* Floating Icons */}
                <div className="absolute -left-8 top-20 bg-white p-3 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                  <Globe className="h-8 w-8 text-blue-500" />
                </div>
                <div className="absolute -right-4 bottom-32 bg-white p-3 rounded-2xl shadow-lg animate-pulse">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section >

      {/* CTA Section */}
      < motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative pb-24 my-12 lg:pb-32 flex h-[500px] container mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20"
      >
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        <div className="text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent"
          >
            Ready to Transform Your Energy Management?
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-500"
          >
            Join leading enterprises across Africa already saving costs and improving efficiency with Wyre's enterprise-grade energy management solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Button
              className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
              asChild
              size="lg"
            >
              <a href="/get-started">
                <span>Get Started with Us</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              className="z-10 border border-border"
              asChild
              size="lg"
              variant="secondary"
            >
              <a href="/contact?subject=demo">
                <span>Contact Sales Team</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section >

      <Footer />
    </div >
  )
}

const FeatureCheck = ({ text, color = "text-yellow-500" }: { text: string, color?: string }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-1 bg-yellow-100 rounded-full p-0.5`}>
      <Check className={`h-4 w-4 ${color}`} />
    </div>
    <span className="text-gray-600 font-medium leading-relaxed">{text}</span>
  </div>
)

const TierCard = ({ title, description, image, fallbackIcon, features }: { title: string, description: string, image?: string, fallbackIcon?: React.ReactNode, features?: string[] }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center">
    <div className="mb-6 relative w-48 h-48 flex items-center justify-center">
      {/* Attempt to use image if available, else icon */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.nextSibling) (target.nextSibling as HTMLElement).style.display = 'flex';
          }}
        />
      ) : null}
      <div className="hidden items-center justify-center w-full h-full bg-gray-50 rounded-full">
        {fallbackIcon}
      </div>
    </div>

    <h3 className="text-2xl font-bold text-brandColor mb-3">{title}</h3>
    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
      {description}
    </p>

    {features && (
      <div className="w-full text-left bg-gray-50 rounded-xl p-5 mt-auto">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-0.5 text-brandColor">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

export default Solutions




// import { useState } from 'react'
// import { Card, CardContent, CardHeader } from '../components/ui/card'
// import { Button } from '../components/ui/button'
// import { Badge } from '../components/ui/badge'
// import {
//   Zap,
//   Shield,
//   BarChart3,
//   Clock,
//   Mail,
//   AlertTriangle,
//   TrendingUp,
//   Users,
//   Building2,
//   Settings,
//   Globe,
//   DollarSign,
//   Lightbulb,
//   ChevronRight,
//   CheckCircle,
//   Target,
//   Gauge,
//   Activity
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import OtherNavbar from "../components/navbar/OtherNavbar"
// import Footer from "../sections/Footer"
// import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
// import { cn } from '../lib/utils'

// const solutions = [
//   {
//     id: 1,
//     name: "Energy Management As A Service",
//     description: "Save up to 30% on your energy expenses by simply following prompts and recommendations.",
//     category: "Core Service",
//     features: [
//       "Creates energy policy with measurable metrics",
//       "Track compliance",
//       "Utility bill verification",
//       "Diesel utilization trend analysis and deviation",
//       "Energy use analysis (Utility, Gas, Diesel or Solar)",
//       "Power demand analysis",
//       "Generator size efficiency",
//       "A.I powered energy baseline and forecast",
//       "Carbon tracker",
//       "Power quality logs"
//     ],
//     icon: Zap,
//     color: "from-blue-500 to-cyan-500",
//     popular: true
//   },
//   {
//     id: 2,
//     name: "Alerts & Alarms",
//     description: "Stay informed with intelligent notifications and real-time monitoring.",
//     category: "Monitoring",
//     features: [
//       "Email notifications",
//       "Unauthorized generator and load operations",
//       "Time of use of energy Sources",
//       "Real-time fault detection",
//       "Custom alerts and alarms for instant notification"
//     ],
//     icon: AlertTriangle,
//     color: "from-red-500 to-orange-500",
//     popular: false
//   },
//   {
//     id: 3,
//     name: "Single Site",
//     description: "Monitor 3 energy sources with 5 years historical archive.",
//     category: "Deployment",
//     features: [
//       "Monitor 3 energy sources with 5 years historical archive",
//       "Analysis from 15 minutes to a year",
//       "Unlimited email prompts on deviation alerts and budget performance"
//     ],
//     icon: Building2,
//     color: "from-green-500 to-emerald-500",
//     popular: false
//   },
//   {
//     id: 4,
//     name: "Multi Site",
//     description: "Set organizational goals & track performance across multiple locations.",
//     category: "Enterprise",
//     features: [
//       "Set organizational goals & track performance",
//       "Get periodic reports",
//       "Performance ranking of all sites/managers",
//       "Admin Portal",
//       "Multi level reporting",
//       "Access control"
//     ],
//     icon: Users,
//     color: "from-purple-500 to-pink-500",
//     popular: false
//   },
//   {
//     id: 5,
//     name: "Bespoke",
//     description: "Build your solution, monitor as many sources and loads as you need.",
//     category: "Custom",
//     features: [
//       "Build your solution, monitor as many sources and loads as you need",
//       "Energy balance",
//       "Identify significant energy users",
//       "Smart Grid"
//     ],
//     icon: Settings,
//     color: "from-indigo-500 to-purple-500",
//     popular: false
//   },
//   {
//     id: 6,
//     name: "Smart Grid",
//     description: "Smart metering solutions for IPPs using natural gas as a green source of energy.",
//     category: "Grid Solutions",
//     features: [
//       "Wyre provides smart metering solutions for IPPs using natural gas as a green source of energy",
//       "Provide reliable power for underserved communities",
//       "Access to live and historical data",
//       "Real time fault detection across network",
//       "Automated remote billing",
//       "Time of use billing (Demand response)",
//       "Forecast of expected revenue",
//       "Power quality monitoring"
//     ],
//     icon: Globe,
//     color: "from-teal-500 to-blue-500",
//     popular: false
//   }
// ]

// const categories = ["All", "Core Service", "Monitoring", "Deployment", "Enterprise", "Custom", "Grid Solutions"]

// const Solutions = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All')

//   const filteredSolutions = selectedCategory === 'All'
//     ? solutions
//     : solutions.filter(solution => solution.category === selectedCategory)

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
//       <OtherNavbar />

//       {/* Header */}
//       <div className="bg-white py-6 border-b border-gray-200">
//         <div className="container mx-auto px-6 py-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-heading">
//               Energy Solutions & Segments
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Comprehensive energy management solutions designed for businesses of all sizes across Africa.
//             </p>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
//           >
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <Zap className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">30%</div>
//               <div className="text-sm text-muted-foreground">Avg. Energy Savings</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <Globe className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">6</div>
//               <div className="text-sm text-muted-foreground">Solution Categories</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <Building2 className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">500+</div>
//               <div className="text-sm text-muted-foreground">Sites Managed</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <TrendingUp className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">24/7</div>
//               <div className="text-sm text-muted-foreground">Monitoring</div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Solutions Section */}
//       <div className="container mx-auto px-6 py-12">
//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-wrap justify-center gap-2 mb-8"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
//                 ? 'bg-brandColor text-white'
//                 : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Solutions Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
//         >
//           {filteredSolutions.map((solution) => (
//             <motion.div
//               key={solution.id}
//               variants={cardVariants}
//               className="group"
//             >
//               <Card className={`h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] ${solution.popular ? 'ring-2 ring-brandColor/20 bg-gradient-to-br from-brandColor/5 to-purple-500/5' : ''
//                 }`}>
//                 {solution.popular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
//                     <Badge className="bg-brandColor text-white px-4 py-1">
//                       <Target className="h-3 w-3 mr-1" />
//                       MOST POPULAR
//                     </Badge>
//                   </div>
//                 )}

//                 <CardHeader className="text-center pb-6 relative">
//                   <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center`}>
//                     <solution.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-heading mb-2">{solution.name}</h3>
//                   <p className="text-muted-foreground text-sm">{solution.description}</p>
//                   <Badge variant="secondary" className="mt-2 w-fit mx-auto">
//                     {solution.category}
//                   </Badge>
//                 </CardHeader>

//                 <CardContent className="space-y-4">
//                   <ul className="space-y-2">
//                     {solution.features.slice(0, 4).map((feature, index) => (
//                       <li key={index} className="flex items-start space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                         <span className="text-xs text-muted-foreground">{feature}</span>
//                       </li>
//                     ))}
//                     {solution.features.length > 4 && (
//                       <li className="text-xs text-brandColor font-medium">
//                         +{solution.features.length - 4} more features
//                       </li>
//                     )}
//                   </ul>

//                   <Button
//                     className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
//                     size="sm"
//                   >
//                     Learn More
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Revenue Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="bg-white rounded-2xl p-8 shadow-sm mb-16"
//         >
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-heading mb-4">
//               Proven Results
//             </h2>
//             <p className="text-muted-foreground">
//               Real impact delivered to our clients across Africa
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
//                 <Gauge className="h-8 w-8 text-green-600" />
//               </div>
//               <div className="text-3xl font-bold text-heading mb-2">9,000,000+</div>
//               <div className="text-sm text-muted-foreground">kWh billed for our clients</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
//                 <DollarSign className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-3xl font-bold text-heading mb-2">₦585,000,000</div>
//               <div className="text-sm text-muted-foreground">Revenue generated</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
//                 <Activity className="h-8 w-8 text-purple-600" />
//               </div>
//               <div className="text-3xl font-bold text-heading mb-2">$1,392,000</div>
//               <div className="text-sm text-muted-foreground">USD equivalent</div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* CTA Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.6 }}
//         className="relative pb-24 my-12 lg:pb-32 flex h-[500px] container mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20"
//       >
//         <AnimatedGridPattern
//           numSquares={30}
//           maxOpacity={0.1}
//           duration={3}
//           repeatDelay={1}
//           className={cn(
//             "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
//             "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
//           )}
//         />
//         <div className="text-center">
//           <span data-aos="fade-up"
//             data-aos-delay="50" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent ">
//             Ready to Transform Your Energy Management?
//           </span>
//           <p data-aos="fade-up"
//             data-aos-delay="100" className="mt-4 text-gray-500">
//             Join hundreds of businesses already saving costs and improving efficiency with Wyre's comprehensive solutions.
//           </p>

//           <div data-aos="fade-up"
//             data-aos-delay="150" className="mt-12 flex flex-wrap justify-center gap-4">
//             <Button
//               className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
//               asChild
//               size="lg">
//               <a href="/">
//                 <span>Get Started Free</span>
//               </a>
//             </Button>

//             <Button
//               className="z-10 border border-border"
//               asChild
//               size="lg"
//               variant="secondary">
//               <a href="/">
//                 <span>Schedule Demo</span>
//               </a>
//             </Button>
//           </div>
//         </div>
//       </motion.div>

//       <Footer />
//     </div>
//   )
// }

// export default Solutions
