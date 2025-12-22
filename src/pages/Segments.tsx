import { useState } from 'react';
import { Check, ArrowRight, TrendingUp, Users, Target, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from '../components/navbar/OtherNavbar'
import { Button } from '../components/ui/button'
import Footer from '../sections/Footer'
import { AnimatedGridPattern } from '../components/magicui/animated-grid-pattern'
import { cn } from '../lib/utils'

const Segments = () => {
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

  const segments = [
    {
      id: 1,
      name: "Serviced Apartments/Estates",
      description: "Utility bills and track diesel utilization with comprehensive monitoring solutions.",
      category: "Residential",
      image: "/img/estate.webp",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Utility bills and track diesel utilization",
        "Common area monitoring",
        "Budget and plan expenses",
        "Key data to negotiate with energy developers",
        "Reduce carbon footprint",
        "Dynamic reports and access control",
        "Improve procurement of energy-efficient equipment, appliances and resources"
      ],
      stats: {
        label: "Properties Managed",
        value: "500+",
        description: "Across major cities"
      }
    },
    {
      id: 2,
      name: "Facility Management",
      description: "Turn hours of analysis into a simple click with advanced data management.",
      category: "Commercial",
      image: "/img/facility-management.jpg",
      gradient: "from-green-500 to-teal-500",
      features: [
        "Turn hours of analysis into a simple click",
        "Data management",
        "Performance ranking of managers",
        "Dynamic reports and access control",
        "Key data to negotiate with energy developers",
        "Reduce carbon footprint",
        "Alerts and Alarms for early fault detection",
        "Recommendations for energy optimization"
      ],
      stats: {
        label: "Facilities Optimized",
        value: "200+",
        description: "Commercial buildings"
      }
    },
    {
      id: 3,
      name: "Businesses",
      description: "Stay on top of your energy operations and improve your bottomline with Wyre.",
      category: "Enterprise",
      image: "/img/companies-building.avif",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Monitor up to 100,000 locations effortlessly",
        "Creates energy policy with measurable metrics",
        "Track compliance",
        "Optimize energy operations",
        "Budget and plan expenses",
        "Key data to negotiate with energy developers",
        "Reduce carbon footprint",
        "Performance ranking of all facilities",
        "Dynamic reports and Access Control",
        "Monitor operators",
        "Improve procurement of energy-efficient equipment, appliances, and resources"
      ],
      stats: {
        label: "Locations Supported",
        value: "100K+",
        description: "Maximum capacity"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <OtherNavbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20 px-6"
      >
        <div className="w-max mx-auto text-center">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold text-heading mb-8 leading-tight"
          >
            Segments
          </motion.h1>
          <div className="text-center w-full mx-auto">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl w-full font-semibold text-heading mb-6"
            >
              Service Apartments/Estates <span className="text-brandColor">|</span> Facility Management <span className="text-brandColor">|</span> Businesses
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-xl text-muted-foreground leading-relaxed mb-12"
            >
              Tailored energy management solutions for different industries and business types across Africa.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Segments Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.id}
                variants={fadeUp}
                custom={index}
                className="group"
              >
                <SegmentCard segment={segment} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">
              Universal Benefits Across All Segments
            </h2>
            <p className="text-muted-foreground">
              Core advantages that every industry segment enjoys with Wyre
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeUp} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                <Bot className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-heading mb-2">AI Insight</h3>
              <p className="text-sm text-muted-foreground">Use Wyre AI to get advance insight on all sites and facilities data</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">Save up to 30% on energy expenses</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Data Insights</h3>
              <p className="text-sm text-muted-foreground">Comprehensive analytics and reporting</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Compliance</h3>
              <p className="text-sm text-muted-foreground">Track and maintain regulatory compliance</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Monitoring</h3>
              <p className="text-sm text-muted-foreground">Real-time operations management</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
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
            Ready to Optimize Your Industry?
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-500"
          >
            Discover how Wyre's tailored solutions can transform energy management in your specific industry segment.
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
                <span>Schedule Demo</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

interface Segment {
  id: number
  name: string
  description: string
  category: string
  image: string
  gradient: string
  features: string[]
  stats: {
    label: string
    value: string
    description: string
  }
}

const SegmentCard = ({ segment }: { segment: Segment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedFeatures = isExpanded ? segment.features : segment.features.slice(0, 6);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brandColor/20 h-full flex flex-col"
    >
      <div
        className="mb-4 rounded-lg overflow-hidden"
      >
        <img src={segment.image} className="w-full h-full" alt={segment.name} />
      </div>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-heading mb-2">{segment.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{segment.description}</p>
        <div className="inline-block bg-brandColor/10 text-brandColor px-3 py-1 rounded-full text-xs font-medium">
          {segment.category}
        </div>
      </div>

      {/* Stats */}
      <div className="text-center p-4 bg-gray-50 rounded-lg mb-6">
        <div className="text-2xl font-bold text-brandColor mb-1">{segment.stats.value}</div>
        <div className="text-sm font-medium text-heading">{segment.stats.label}</div>
        <div className="text-xs text-muted-foreground">{segment.stats.description}</div>
      </div>

      {/* Features */}
      <div className="flex-grow">
        <h4 className="text-sm font-semibold text-heading mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {displayedFeatures.map((feature: string, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-2"
            >
              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </motion.li>
          ))}
          {segment.features.length > 6 && (
            <li className="">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-brandColor font-medium mt-2 hover:underline focus:outline-none flex items-center gap-1"
              >
                {isExpanded ? (
                  <>Show Less</>
                ) : (
                  <>+{segment.features.length - 6} more features</>
                )}
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className="mt-6 pt-4">
        <Button
          className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
          size="sm"
          asChild
        >
          <a href="/contact">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export default Segments





// import { useState } from 'react'
// import { Card, CardContent, CardHeader } from '../components/ui/card'
// import { Button } from '../components/ui/button'
// import { Badge } from '../components/ui/badge'
// import {
//   Building2,
//   Home,
//   Briefcase,
//   BarChart3,
//   Shield,
//   TrendingUp,
//   Users,
//   Target,
//   Zap,
//   Globe,
//   CheckCircle,
//   ChevronRight,
//   Settings,
//   AlertTriangle,
//   DollarSign,
//   Lightbulb,
//   Gauge,
//   Activity
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import OtherNavbar from "../components/navbar/OtherNavbar"
// import Footer from "../sections/Footer"
// import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
// import { cn } from '../lib/utils'

// const segments = [
//   {
//     id: 1,
//     name: "Serviced Apartments/Estates",
//     description: "Utility bills and track diesel utilization with comprehensive monitoring solutions.",
//     category: "Residential",
//     icon: Home,
//     color: "from-blue-500 to-cyan-500",
//     features: [
//       "Utility bills and track diesel utilization",
//       "Common area monitoring",
//       "Budget and plan expenses",
//       "Key data to negotiate with energy developers",
//       "Reduce carbon footprint",
//       "Dynamic reports and access control",
//       "Improve procurement of energy-efficient equipment, appliances and resources"
//     ],
//     stats: {
//       label: "Properties Managed",
//       value: "500+",
//       description: "Across major cities"
//     }
//   },
//   {
//     id: 2,
//     name: "Facility Management",
//     description: "Turn hours of analysis into a simple click with advanced data management.",
//     category: "Commercial",
//     icon: Building2,
//     color: "from-green-500 to-emerald-500",
//     features: [
//       "Turn hours of analysis into a simple click",
//       "Data management",
//       "Performance ranking of managers",
//       "Dynamic reports and access control",
//       "Key data to negotiate with energy developers",
//       "Reduce carbon footprint",
//       "Alerts and Alarms for early fault detection",
//       "Recommendations for energy optimization"
//     ],
//     stats: {
//       label: "Facilities Optimized",
//       value: "200+",
//       description: "Commercial buildings"
//     }
//   },
//   {
//     id: 3,
//     name: "Businesses",
//     description: "Stay on top of your energy operations and improve your bottomline with Wyre.",
//     category: "Enterprise",
//     icon: Briefcase,
//     color: "from-purple-500 to-pink-500",
//     features: [
//       "Monitor up to 100,000 locations effortlessly",
//       "Creates energy policy with measurable metrics",
//       "Track compliance",
//       "Optimize energy operations",
//       "Budget and plan expenses",
//       "Key data to negotiate with energy developers",
//       "Reduce carbon footprint",
//       "Performance ranking of all facilities",
//       "Dynamic reports and Access Control",
//       "Monitor operators",
//       "Improve procurement of energy-efficient equipment, appliances, and resources"
//     ],
//     stats: {
//       label: "Locations Supported",
//       value: "100K+",
//       description: "Maximum capacity"
//     }
//   }
// ]

// const categories = ["All", "Residential", "Commercial", "Enterprise"]

// const Segments = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All')

//   const filteredSegments = selectedCategory === 'All'
//     ? segments
//     : segments.filter(segment => segment.category === selectedCategory)

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
//               Industry Segments
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Tailored energy management solutions for different industries and business types across Africa.
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
//                 <Home className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">500+</div>
//               <div className="text-sm text-muted-foreground">Properties</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <Building2 className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">200+</div>
//               <div className="text-sm text-muted-foreground">Facilities</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <Briefcase className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">100K+</div>
//               <div className="text-sm text-muted-foreground">Locations</div>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-brandColor/10 rounded-full mx-auto mb-3">
//                 <TrendingUp className="h-6 w-6 text-brandColor" />
//               </div>
//               <div className="text-2xl font-bold text-heading">30%</div>
//               <div className="text-sm text-muted-foreground">Avg. Savings</div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Segments Section */}
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

//         {/* Segments Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
//         >
//           {filteredSegments.map((segment) => (
//             <motion.div
//               key={segment.id}
//               variants={cardVariants}
//               className="group"
//             >
//               <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
//                 <CardHeader className="text-center pb-6">
//                   <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${segment.color} flex items-center justify-center`}>
//                     <segment.icon className="h-10 w-10 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-heading mb-2">{segment.name}</h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">{segment.description}</p>
//                   <Badge variant="secondary" className="mt-3 w-fit mx-auto">
//                     {segment.category}
//                   </Badge>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   {/* Stats */}
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <div className="text-2xl font-bold text-brandColor mb-1">{segment.stats.value}</div>
//                     <div className="text-sm font-medium text-heading">{segment.stats.label}</div>
//                     <div className="text-xs text-muted-foreground">{segment.stats.description}</div>
//                   </div>

//                   {/* Features */}
//                   <div>
//                     <h4 className="text-sm font-semibold text-heading mb-3">Key Features:</h4>
//                     <ul className="space-y-2">
//                       {segment.features.map((feature, index) => (
//                         <li key={index} className="flex items-start space-x-2">
//                           <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                           <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Button
//                     className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
//                     size="lg"
//                   >
//                     Learn More
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Benefits Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="bg-white rounded-2xl p-8 shadow-sm mb-16"
//         >
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-heading mb-4">
//               Universal Benefits Across All Segments
//             </h2>
//             <p className="text-muted-foreground">
//               Core advantages that every industry segment enjoys with Wyre
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
//                 <DollarSign className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="font-semibold text-heading mb-2">Cost Reduction</h3>
//               <p className="text-sm text-muted-foreground">Save up to 30% on energy expenses</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
//                 <BarChart3 className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold text-heading mb-2">Data Insights</h3>
//               <p className="text-sm text-muted-foreground">Comprehensive analytics and reporting</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4">
//                 <Shield className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="font-semibold text-heading mb-2">Compliance</h3>
//               <p className="text-sm text-muted-foreground">Track and maintain regulatory compliance</p>
//             </div>
//             <div className="text-center">
//               <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-4">
//                 <Globe className="h-6 w-6 text-orange-600" />
//               </div>
//               <h3 className="font-semibold text-heading mb-2">Sustainability</h3>
//               <p className="text-sm text-muted-foreground">Reduce carbon footprint effectively</p>
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
//             Ready to Optimize Your Industry?
//           </span>
//           <p data-aos="fade-up"
//             data-aos-delay="100" className="mt-4 text-gray-500">
//             Discover how Wyre's tailored solutions can transform energy management in your specific industry segment.
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

// export default Segments
