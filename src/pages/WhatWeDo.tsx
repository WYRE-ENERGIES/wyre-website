import { Check, ArrowRight, Target, Eye, Settings, TrendingUp, Shield, BarChart3, Zap, Globe, Users, DollarSign, Bell, Activity, Database, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from '../components/navbar/OtherNavbar'
import { Button } from '../components/ui/button'
import Footer from '../sections/Footer'
import { AnimatedGridPattern } from '../components/magicui/animated-grid-pattern'
import { cn } from '../lib/utils'

const WhatWeDo = () => {
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

  const workflowSteps = [
    {
      id: 1,
      title: "HARDWARE INSTALLATION",
      description: "Installation and configuration done within 30 mins.",
      icon: Settings,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "CLOUD INTEGRATION AND ACCOUNT SETUP",
      description: "Seamless integration with our cloud platform.",
      icon: Globe,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "REPORTS AND NOTIFICATIONS",
      description: "Real-time reports and intelligent notifications.",
      icon: FileText,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "OPTIMAL ENERGY SAVINGS",
      description: "Achieve maximum energy efficiency and cost savings.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const features = [
    { name: "Data Collection", icon: Database },
    { name: "Data Management", icon: Shield },
    { name: "Scorecard", icon: Target },
    { name: "Cost Tracker", icon: DollarSign },
    { name: "Billing", icon: FileText },
    { name: "Reports", icon: BarChart3 },
    { name: "Accessibility", icon: Users },
    { name: "Power quality", icon: Zap },
    { name: "Alerts & Alarms", icon: Bell },
    { name: "AI powered software", icon: Activity },
    { name: "Data integrity", icon: Shield },
    { name: "System reliability", icon: Target },
    { name: "Data accuracy", icon: Check }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <OtherNavbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20 pb-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={fadeUp} className="text-left">
              <p className="font-semibold text-brandColor mb-2 uppercase tracking-[0.2em]">What we do</p>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-heading mb-6"
              >
                Sustainable Power You Can Track
                <div className="h-1 w-24 bg-yellow-400 mt-2 rounded-full"></div>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Wyre is an energy management solution that utilizes data to improve operational efficiency in energy production and consumption. Enabling a cleaner and more affordable energy environment.
              </motion.p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center items-center"
            >
              <img src="https://www.wyreng.com/images/what-we-do900x-1.png" alt="Wyre" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why We Do It Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-6 bg-white border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div variants={fadeUp} className="flex justify-center items-center">
              <img src="https://www.wyreng.com/images/Asset-1900x-2.png" alt="Wyre" className="w-full h-full object-cover" />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={fadeUp} className="text-left">
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-heading mb-6"
              >
                Why we do it
                <div className="h-1 w-24 bg-yellow-400 mt-2 rounded-full"></div>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground mb-8"
              >
                Joining the world to achieve
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={fadeUp}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-heading">Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg ml-22">
                    To be the premier energy data company that positively affects energy planning, production, trade and utilization towards economic prosperity for Africa.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-heading">Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg ml-22">
                    Drive sustainable energy across Africa through innovative data driven solutions that truly democratizes energy management, transition, access and investment.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How We Do It Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              How we do it
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process to energy efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                custom={index}
                className="group"
              >
                <WorkflowCard step={step} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-6 bg-white"

      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive energy management capabilities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={fadeUp}
                className="group text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-4"
                >
                  <feature.icon className="h-6 w-6 text-brandColor" />
                </motion.div>
                <h3 className="text-sm font-medium text-heading">{feature.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Powered Software Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={fadeUp} className="text-left">
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold text-heading mb-6"
              >
                AI powered software
                <div className="h-1 w-24 bg-yellow-400 mt-2 rounded-full"></div>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground mb-8"
              >
                Advanced artificial intelligence ensures unparalleled reliability and accuracy in energy management.
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeUp} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">99%</div>
                    <div className="text-lg font-medium text-heading">Data integrity</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-lg font-medium text-heading">System reliability</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
                    <div className="text-lg font-medium text-heading">Data accuracy</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Dashboard Image */}
            <motion.div variants={fadeUp} className="flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                {/* Laptop Mockup */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    {/* Dashboard Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="bg-brandColor w-24 h-2 rounded"></div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-900 rounded-lg p-3">
                          <div className="text-green-400 text-sm font-medium">99% Data Integrity</div>
                          <div className="text-white text-lg font-bold">99%</div>
                        </div>
                        <div className="bg-blue-900 rounded-lg p-3">
                          <div className="text-blue-400 text-sm font-medium">98% Reliability</div>
                          <div className="text-white text-lg font-bold">98%</div>
                        </div>
                      </div>

                      {/* Charts Area */}
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-gray-400 text-sm mb-2">Energy Usage</div>
                          <div className="flex items-end space-x-1">
                            <div className="bg-brandColor w-4 h-12 rounded-t"></div>
                            <div className="bg-brandColor w-4 h-8 rounded-t"></div>
                            <div className="bg-brandColor w-4 h-16 rounded-t"></div>
                            <div className="bg-brandColor w-4 h-10 rounded-t"></div>
                            <div className="bg-brandColor w-4 h-14 rounded-t"></div>
                            <div className="bg-brandColor w-4 h-6 rounded-t"></div>
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-gray-400 text-sm mb-2">Cost Analytics</div>
                          <div className="flex items-center justify-between">
                            <div className="text-green-400 text-sm">₦585M</div>
                            <div className="text-yellow-400 text-sm">30% Savings</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative pb-24 my-12 lg:pb-32 flex h-[500px] max-w-[83rem] mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20"
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
            Ready to Transform Your Energy?
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-500"
          >
            Join Wyre's mission to revolutionize energy management across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6, delay: 0.15
            }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Button
              className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
              asChild
              size="lg"
            >
              <a href="/">
                <span>Get Started Free</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              className="z-10 border border-border"
              asChild
              size="lg"
              variant="secondary"
            >
              <a href="/">
                <span>Learn More</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

const WorkflowCard = ({ step }: { step: WorkflowStep }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brandColor/20 text-center relative"
  >
    {/* Step Number */}
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
      <div className="w-6 h-6 bg-brandColor text-white rounded-full flex items-center justify-center text-sm font-bold">
        {step.id}
      </div>
    </div>

    <motion.div
      whileHover={{ rotate: 5 }}
      transition={{ duration: 0.3 }}
      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-md mt-4`}
    >
      <step.icon className="h-8 w-8 text-white" />
    </motion.div>

    <h3 className="text-lg font-bold text-heading mb-3 uppercase tracking-wide">
      {step.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {step.description}
    </p>
  </motion.div>
)

export default WhatWeDo
