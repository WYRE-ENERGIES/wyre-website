import { Button } from '../components/ui/button'
import { Star, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  client: string
  clientLogo: string
  category: string
  location: string
  completionDate: string
  description: string
  image: string
  review: {
    name: string
    role: string
    company: string
    rating: number
    text: string
  }
  stats?: {
    label: string
    value: string
  }[]
  technologies?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Energy Management System",
    client: "Polaris Bank",
    clientLogo: "/img/polaris-logo.png",
    category: "Energy Management",
    location: "Lagos, Nigeria",
    completionDate: "2024",
    description: "Comprehensive energy monitoring and management solution for multiple bank branches across Nigeria. Real-time visibility into energy consumption, automated billing, and intelligent alerts.",
    image: "https://tse4.mm.bing.net/th/id/OIP.rqte1mJwhvzbJfn2DgYcVAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    review: {
      name: "Seun Jimo",
      role: "Corporate Support",
      company: "Polaris Bank",
      rating: 5,
      text: "Wyre has provided an incredible enterprise service which gives remote visibility to optimize our energy operations. The data has proven extremely useful and the team is very responsive."
    },
    stats: [
      { label: "Sites Monitored", value: "50+" },
      { label: "Energy Savings", value: "30%" },
      { label: "Cost Reduction", value: "₦2.5M/month" }
    ],
    technologies: ["EMS Platform", "Smart Sensors", "Analytics Dashboard"]
  },
  {
    id: 2,
    title: "Smart Grid Network Monitoring",
    client: "Viathan",
    clientLogo: "https://th.bing.com/th/id/R.44a6fa733e4c19ab6180c926b8cc0347?rik=fSDYHsu49S%2bSeA&riu=http%3a%2f%2fwww.viathan-ng.com%2fwp-content%2fuploads%2f2019%2f06%2fsticky-logo.png&ehk=sxUeLOl739FxmfNUbN%2fE5ucWaAbdb7MfuGqHTUL13UA%3d&risl=&pid=ImgRaw&r=0",
    category: "Smart Grid",
    location: "Multiple Locations",
    completionDate: "2024",
    description: "Automated billing and network monitoring system with real-time fault detection and notification capabilities for distributed energy networks.",
    image: "/img/wyre-view.png",
    review: {
      name: "Yoloye Oyerinde",
      role: "Commercial/Projects Manager",
      company: "Viathan",
      rating: 5,
      text: "Wyre provides an invaluable solution of automated billing and network monitoring with real-time notifications for quick fault detection and action."
    },
    stats: [
      { label: "Network Nodes", value: "200+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Response Time", value: "< 5min" }
    ],
    technologies: ["Smart Metering", "IoT Sensors", "Billing System"]
  },
  {
    id: 3,
    title: "Solar Energy Analytics Platform",
    client: "Sterling Bank",
    clientLogo: "https://th.bing.com/th/id/R.37af980f525dda8d7731cfb4e99fe6f6?rik=uAp%2bXNbpNoMhLg&pid=ImgRaw&r=0",
    category: "Solar Analytics",
    location: "Nigeria",
    completionDate: "2023",
    description: "Advanced energy analytics software for solar home systems with comprehensive monitoring, reporting, and optimization capabilities.",
    image: "https://tse4.mm.bing.net/th/id/OIP.rqte1mJwhvzbJfn2DgYcVAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    review: {
      name: "Olabanjo Alimi",
      role: "Head: Renewables and Mobility",
      company: "Sterling",
      rating: 5,
      text: "Successfully developed an energy analytic software for solar home systems."
    },
    stats: [
      { label: "Systems Monitored", value: "5,000+" },
      { label: "Data Points", value: "1M+/day" },
      { label: "Accuracy", value: "99.5%" }
    ],
    technologies: ["Solar Analytics", "Mobile App", "Cloud Platform"]
  },
  {
    id: 4,
    title: "Multi-Site Energy Optimization",
    client: "Sapio Utilities",
    clientLogo: "https://www.wyreng.com/images/sapio-utility-logo.png",
    category: "Energy Optimization",
    location: "Nigeria",
    completionDate: "2024",
    description: "Comprehensive energy management solution reducing operational costs by 90% through remote monitoring and automated optimization across multiple utility sites.",
    image: "https://tse4.mm.bing.net/th/id/OIP.rqte1mJwhvzbJfn2DgYcVAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    review: {
      name: "Olumide Dare",
      role: "Managing Director",
      company: "Sapio Utilities",
      rating: 5,
      text: "Deciding to use Wyre has improved our operational efficiency, reduced physical visitations to customer sites and associated costs by up to 90%."
    },
    stats: [
      { label: "Cost Reduction", value: "90%" },
      { label: "Site Visits Saved", value: "500+/month" },
      { label: "Response Time", value: "Real-time" }
    ],
    technologies: ["Remote Monitoring", "Automation", "Analytics"]
  },
  {
    id: 5,
    title: "Bespoke Energy Tracking System",
    client: "The Good Beach",
    clientLogo: "https://www.wyreng.com/images/theGoodBeach-logo.png",
    category: "Custom Solution",
    location: "Lagos, Nigeria",
    completionDate: "2023",
    description: "Custom-built energy tracking solution for tracking all energy sources and loads, enabling consumption management, bill verification, and tenant billing apportionment.",
    image: "https://tse4.mm.bing.net/th/id/OIP.rqte1mJwhvzbJfn2DgYcVAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    review: {
      name: "Feyi Shasanya",
      role: "Director",
      company: "The Good Beach",
      rating: 5,
      text: "Wyre delivered a bespoke solution to track all energy sources and loads. This helps to manage our consumption, verify energy bills and apportion tenant bills."
    },
    stats: [
      { label: "Energy Sources", value: "Multiple" },
      { label: "Billing Accuracy", value: "100%" },
      { label: "Tenant Satisfaction", value: "95%" }
    ],
    technologies: ["Custom Platform", "Billing System", "Multi-source Tracking"]
  },
  {
    id: 6,
    title: "Carbon Footprint Reduction Initiative",
    client: "Lennox",
    clientLogo: "https://www.wyreng.com/images/Lennox.png",
    category: "Sustainability",
    location: "Nigeria",
    completionDate: "2024",
    description: "Energy management solution enabling 29% reduction in energy consumption and carbon footprint through intelligent HVAC scheduling and operational insights.",
    image: "https://tse4.mm.bing.net/th/id/OIP.rqte1mJwhvzbJfn2DgYcVAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    review: {
      name: "Nosa Otoghile",
      role: "Asset Manager",
      company: "Lennox",
      rating: 5,
      text: "Insights from Wyre has enabled us reduce our energy consumption and related carbon footprint by 29%. It pointed us to our HVAC and how to better schedule operations."
    },
    stats: [
      { label: "Energy Reduction", value: "29%" },
      { label: "Carbon Saved", value: "150T CO2" },
      { label: "Cost Savings", value: "₦1.8M/year" }
    ],
    technologies: ["HVAC Optimization", "Carbon Tracking", "Smart Scheduling"]
  }
]

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Header */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-[83rem] mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading">
              Wyre Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful energy management and solar solutions delivered to leading enterprises across Africa.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[83rem] mx-auto px-6 py-12">
        {/* Projects Grid - Staggered Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={cn(
                "group",

              )}
            >
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="overflow-hidden">
                  {/* Square Project Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brandColor/10 to-purple-500/10 rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/800x800/f3f4f6/6b7280?text=Project+Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brandColor text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{project.completionDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="mt-4 space-y-4">
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                        <img
                          src={project.clientLogo}
                          alt={project.client}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-semibold text-heading">{project.client}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-2xl font-bold text-brandColor">{stat.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Customer Review */}
                    <div className="pt-4 border-t border-gray-200 bg-gray-50/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(project.review.rating)}
                      </div>
                      <p className="text-sm text-gray-700 italic mb-3">
                        "{project.review.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-heading text-sm">{project.review.name}</p>
                          <p className="text-xs text-muted-foreground">{project.review.role}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{project.review.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
          <div className="text-center">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent">
              Ready to Start Your Project?
            </span>
            <p className="mt-4 text-gray-500">
              Let's discuss how Wyre can transform your energy management operations.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
                asChild
                size="lg">
                <a href="/contact">
                  <span>Get Started</span>
                </a>
              </Button>

              <Button
                className="z-10 border border-border"
                asChild
                size="lg"
                variant="secondary">
                <a href="/contact">
                  <span>Book Demo</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
