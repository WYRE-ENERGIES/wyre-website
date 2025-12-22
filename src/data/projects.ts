import { Building2, TrendingUp, Zap, Shield } from 'lucide-react'

export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  client?: string
  clientLogo?: string
  location?: string
  completionDate?: string
  fullDescription?: string
  review?: {
    name: string
    role: string
    company: string
    rating: number
    text: string
  }
  stats?: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
  technologies?: string[]
  challenges?: string[]
  solutions?: string[]
  results?: string[]
}

// Featured projects for ProjectsSection
export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Whitestone by Schlepp",
    category: "Commercial Solar & Energy Management",
    description: "Integrated solar power and centralized energy management platform for whitestone delivering reliable, sustainable, and efficient operations.",
    image: "/img/whitestone.jpeg",
    client: "Schlepp Properties",
    clientLogo: "",
    location: "Lagos, Nigeria",
    completionDate: "2024",
    fullDescription: "Wyre partnered with Schlepp Properties to install a comprehensive solar power and energy management solution for Whitestone. The integrated system combines solar power generation with a centralized energy management platform, delivering reliable, sustainable, and efficient operations. This commercial installation provides real-time energy monitoring, automated optimization, and sustainable power generation for the entire facility.",
    review: {
      name: "Schlepp Properties",
      role: "Property Management",
      company: "Schlepp Properties",
      rating: 5,
      text: "The integrated solar power and energy management platform has delivered reliable, sustainable, and efficient operations for Whitestone. Wyre's solution has exceeded our expectations in terms of performance and energy savings."
    },
    stats: [
      { label: "System Size", value: "100kWp", icon: Building2 },
      { label: "Energy Production", value: "120,000kWh/year", icon: TrendingUp },
      { label: "Energy Savings", value: "35%", icon: Zap }
    ],
    technologies: ["Solar Panels", "Energy Management Platform", "Smart Sensors", "Analytics Dashboard", "Battery Storage"],
    challenges: [
      "Integrating solar power with existing energy infrastructure",
      "Implementing centralized energy management across multiple systems",
      "Ensuring reliable and sustainable operations",
      "Optimizing energy consumption in a commercial setting"
    ],
    solutions: [
      "Designed and installed custom solar power system",
      "Deployed centralized energy management platform",
      "Integrated smart sensors for real-time monitoring",
      "Implemented automated optimization algorithms"
    ],
    results: [
      "35% reduction in overall energy costs",
      "120,000kWh of clean energy production per year",
      "Real-time visibility into energy consumption patterns",
      "Automated energy optimization reducing waste by 25%",
      "Improved sustainability with reduced carbon footprint",
      "Centralized control and monitoring of all energy systems"
    ]
  },
  {
    id: 2,
    title: "Beach Resort by Schlepp Properties",
    category: "Solar Installation",
    description: "A premium beachfront rental property powered by our custom solar installation, enabling sustainable, reliable energy for both hospitality and residential comfort by the sea.",
    image: "/img/beach-resort.jpeg",
    client: "Schlepp Properties",
    clientLogo: "",
    location: "Beachfront, Nigeria",
    completionDate: "2024",
    fullDescription: "Wyre designed and installed a premium solar power system for a beachfront rental property by Schlepp Properties. This custom solar installation enables sustainable, reliable energy for both hospitality and residential comfort by the sea. The system is designed to handle the unique energy demands of a beachfront property, providing consistent power even in remote coastal locations while maintaining the aesthetic appeal of the premium property.",
    review: {
      name: "Schlepp Properties",
      role: "Property Management",
      company: "Schlepp Properties",
      rating: 5,
      text: "The custom solar installation has transformed our beachfront property, providing sustainable and reliable energy for both our hospitality and residential guests. The system works flawlessly in the coastal environment and has significantly reduced our operational costs."
    },
    stats: [
      { label: "System Size", value: "50kWp", icon: Building2 },
      { label: "Energy Production", value: "65,000kWh/year", icon: TrendingUp },
      { label: "Energy Independence", value: "90%", icon: Shield }
    ],
    technologies: ["Solar Panels", "Inverters", "Battery Storage", "Smart Monitoring", "Grid Backup System"],
    challenges: [
      "Installing solar in a coastal/beachfront environment",
      "Meeting energy demands for both hospitality and residential use",
      "Ensuring reliability in a remote location",
      "Maintaining aesthetic appeal of premium property"
    ],
    solutions: [
      "Designed weather-resistant solar installation for coastal conditions",
      "Installed hybrid system with battery storage for reliability",
      "Implemented smart monitoring for remote management",
      "Customized mounting solution to preserve property aesthetics"
    ],
    results: [
      "90% energy independence achieved",
      "65,000kWh of clean energy production annually",
      "Significant reduction in operational costs",
      "Reliable power supply even in remote coastal location",
      "Enhanced guest experience with sustainable energy",
      "Reduced environmental impact while maintaining premium standards"
    ]
  }
]

// Projects data for detail pages (with all fields)
export const projectsData: Record<number, Project> = {
  1: featuredProjects[0],
  2: featuredProjects[1]
}