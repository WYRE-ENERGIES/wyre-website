import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Calendar, MapPin, Building2, CheckCircle, TrendingUp, Zap, Shield } from 'lucide-react'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

// This would typically come from an API or shared data file
const projectsData = {
  1: {
    id: 1,
    title: "Whitestone - Perchstone & Graeys CL 1",
    client: "Whitestone",
    clientLogo: "",
    category: "Solar Installation",
    location: "Perchstone & Graeys CL 1 Lagos, Nigeria",
    completionDate: "2025",
    description: "Integrated solar power and centralized energy management platform for whitestone delivering reliable, sustainable, and efficient operations.",
    fullDescription: "Wyre partnered with Whitestone to install a custom solar installation for Perchstone & Graeys CL 1, Lagos, Nigeria. The installation is a 100kWp solar system with a capacity to generate 100,000kWh of energy per year. The system is designed to power the entire building and is expected to reduce the energy bill by 30%.",
    image: "/img/whitestone.jpeg",
    review: {
      name: "Olaoluwa Ajayi",
      role: "CEO",
      company: "Whitestone",
      rating: 5,
      text: "Wyre has provided an incredible solar installation service which has delivered reliable, sustainable, and efficient operations for Whitestone."
    },
    stats: [
      { label: "System Size", value: "100kWp", icon: Building2 },
      { label: "Energy Production", value: "100,000kWh/year", icon: TrendingUp },
      { label: "Energy Savings", value: "30%", icon: Zap }
    ],
    technologies: ["Solar Panels", "Inverters", "Batteries", "Smart Sensors", "Analytics Dashboard"],
    challenges: [
      "Finding the right location for the solar installation",
      "Getting the necessary permits and approvals",
      "Installing the solar panels and inverters",
      "Connecting the solar panels to the grid"
    ],
    solutions: [
      "Found the right location for the solar installation",
      "Got the necessary permits and approvals",
      "Installed the solar panels and inverters",
      "Connected the solar panels to the grid"
    ],
    results: [
      "30% reduction in overall energy costs",
      "100,000kWh of energy production per year",
      "Real-time visibility into energy consumption patterns",
      "Automated alerts reducing response time to energy issues by 80%",
      "Improved compliance with energy efficiency standards",
      "Reduced carbon emissions by 100 tonnes per year"
    ]
  },
  2: {
    id: 2,
    title: "Smart Grid Network Monitoring",
    client: "Viathan",
    clientLogo: "https://th.bing.com/th/id/R.44a6fa733e4c19ab6180c926b8cc0347?rik=fSDYHsu49S%2bSeA&riu=http%3a%2f%2fwww.viathan-ng.com%2fwp-content%2fuploads%2f2019%2f06%2fsticky-logo.png&ehk=sxUeLOl739FxmfNUbN%2fE5ucWaAbdb7MfuGqHTUL13UA%3d&risl=&pid=ImgRaw&r=0",
    category: "Smart Grid",
    location: "Multiple Locations",
    completionDate: "2024",
    description: "Automated billing and network monitoring system with real-time fault detection and notification capabilities for distributed energy networks.",
    fullDescription: "Viathan required a comprehensive smart grid monitoring solution to manage their distributed energy network across multiple locations. The system needed to provide automated billing, real-time fault detection, and instant notifications for network issues. Wyre delivered a scalable platform that monitors 200+ network nodes with 99.9% uptime and sub-5-minute response times.",
    image: "/img/wyre-view.png",
    review: {
      name: "Yoloye Oyerinde",
      role: "Commercial/Projects Manager",
      company: "Viathan",
      rating: 5,
      text: "Wyre provides an invaluable solution of automated billing and network monitoring with real-time notifications for quick fault detection and action."
    },
    stats: [
      { label: "Network Nodes", value: "200+", icon: Building2 },
      { label: "Uptime", value: "99.9%", icon: Shield },
      { label: "Response Time", value: "< 5min", icon: Zap }
    ],
    technologies: ["Smart Metering", "IoT Sensors", "Billing System", "Network Monitoring", "Cloud Platform"],
    challenges: [
      "Managing billing for distributed energy network",
      "Detecting and responding to network faults quickly",
      "Lack of real-time visibility across network nodes",
      "Manual monitoring processes"
    ],
    solutions: [
      "Implemented automated billing system with real-time calculations",
      "Deployed IoT sensors across all network nodes",
      "Created centralized monitoring dashboard with instant alerts",
      "Developed mobile app for field technicians"
    ],
    results: [
      "99.9% network uptime achieved",
      "Sub-5-minute response time to network faults",
      "Automated billing reducing manual errors by 95%",
      "Real-time visibility across 200+ network nodes",
      "Improved customer satisfaction through faster issue resolution"
    ]
  }
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = projectsData[Number(id) as keyof typeof projectsData]

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
        <OtherNavbar />
        <div className="max-w-[83rem] mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-heading mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/1600x800/f3f4f6/6b7280?text=Project+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-[83rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Link to="/projects">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link> <br />
            <Badge className="bg-brandColor text-white mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{project.completionDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[83rem] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Client Info */}
            <Card className="p-6 border-none shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-3">
                  {project.clientLogo ? (
                    <img
                      src={project.clientLogo}
                      alt={project.client}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/1600x800/f3f4f6/6b7280?text=Project+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-2xl font-bold text-heading">{project.client.charAt(0)}</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="text-2xl font-bold text-heading">{project.client}</p>
                </div>
              </div>
            </Card>

            {/* Full Description */}
            <Card className="p-6 border-none shadow-sm">
              <h2 className="text-2xl font-bold text-heading mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </Card>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-none shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-xs font-bold">!</span>
                      </div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border-none shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-4">Our Solutions</h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Results */}
            <Card className="p-6 border-none shadow-sm bg-gradient-to-br from-brandColor/5 to-purple-500/5">
              <h3 className="text-xl font-bold text-heading mb-4">Key Results</h3>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-brandColor flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="p-6 border-none shadow-sm">
              <h3 className="text-xl font-bold text-heading mb-6">Project Stats</h3>
              <div className="space-y-4">
                {project.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-brandColor/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-brandColor" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-heading">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Technologies */}
            <Card className="p-6 border-none shadow-sm">
              <h3 className="text-xl font-bold text-heading mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-brandColor/10 text-brandColor">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Customer Review */}
            <Card className="p-6 border-none shadow-sm bg-gray-50/50">
              <h3 className="text-xl font-bold text-heading mb-4">Client Testimonial</h3>
              <div className="flex items-center gap-2 mb-3">
                {renderStars(project.review.rating)}
              </div>
              <p className="text-muted-foreground italic mb-4">
                "{project.review.text}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-heading">{project.review.name}</p>
                <p className="text-sm text-muted-foreground">{project.review.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{project.review.company}</p>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 border-none shadow-sm bg-gradient-to-br from-brandColor to-purple-500 text-white">
              <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
              <p className="text-white/90 mb-6">
                Ready to transform your energy management? Let's discuss your project.
              </p>
              <Button asChild className="w-full bg-white text-brandColor hover:bg-gray-100">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetail
