import { Battery, Building2, Sun, TrendingUp, Zap } from 'lucide-react'

export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  gallery?: string[]
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
      { label: "System Size", value: "97.6kWp", icon: Building2 },
      { label: "Energy Production", value: "143,809.0 kWh/year", icon: TrendingUp },
      // { label: "Energy Savings", value: "35%", icon: Zap }
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
      "143,809 kWh of clean energy production annually",
      "Real-time visibility into energy consumption patterns",
      "Automated energy optimization reducing operational waste",
      "Improved sustainability with reduced carbon footprint",
      "Centralized control and monitoring of all energy systems",
      "Reliable and sustainable operations for commercial facility"
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
      { label: "System Size", value: "49.6kWp", icon: Building2 },
      { label: "Energy Production", value: "72,335.0 kWh/year", icon: TrendingUp },
      // { label: "Energy Independence", value: "90%", icon: Shield }
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
      "72,335 kWh of clean energy production annually",
      "Significant reduction in operational costs",
      "Reliable power supply even in remote coastal location",
      "Enhanced guest experience with sustainable energy",
      "Weather-resistant system designed for coastal conditions",
      "Reduced environmental impact while maintaining premium standards"
    ]
  },
  {
    id: 3,
    title: "State Specialist Hospital, Okitipupa",
    category: "Hybrid Solar & Battery Storage",
    description: "A 73.8kWp hybrid solar installation powering a state secondary referral hospital in Ondo State with 24/7 clean electricity, keeping wards, theatres and clinics running around the clock.",
    image: "/img/okitipupa-hospital.png",
    gallery: [
      "/img/okitipupa-hospital.png",
      "/img/okitipupa-commissioning.png",
      "/img/okitipupa-inverters.png",
      "/img/okitipupa-battery-rack.png",
      "/img/okitipupa-energy-room.png"
    ],
    client: "State Specialist Hospital, Okitipupa",
    clientLogo: "",
    location: "Okitipupa, Ondo State, Nigeria",
    completionDate: "March 2026",
    fullDescription: "In March 2026, Wyre energised the State Specialist Hospital in Okitipupa, Ondo State with a fully hybrid solar and battery storage system engineered for 24/7 clinical operations. Delivered in partnership with the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) and Forshore Energy Limited (FSEL), the installation pairs 120 high-efficiency 615W solar panels (73.8kWp) with a 40kVA inverter stack and 120kWh of lithium battery storage, giving the hospital stable, grid-independent power for wards, theatres, consulting rooms, the pharmacy and cold-chain storage. As a state-run secondary referral facility serving the Ikale region, uninterrupted electricity is mission-critical for life-saving care, and this system now removes the hospital's dependency on unreliable grid supply and costly diesel generators.",
    review: {
      name: "State Specialist Hospital, Okitipupa",
      role: "Hospital Management",
      company: "Delivered in partnership with NMDPRA & Forshore Energy Limited (FSEL)",
      rating: 5,
      text: "Wyre delivered a complete energy transformation for our hospital. Our wards, theatres and clinics now run on clean, reliable power day and night, and our reliance on the generator has dropped dramatically. It has genuinely changed how we deliver care to our community."
    },
    stats: [
      { label: "System Size", value: "73.8kWp", icon: Sun },
      { label: "Inverter Capacity", value: "40kVA", icon: Zap },
      { label: "Battery Storage", value: "120kWh", icon: Battery },
      { label: "Solar Panels", value: "120 × 615W", icon: Building2 },
      { label: "Est. Annual Output", value: "~108,000 kWh/year", icon: TrendingUp }
    ],
    technologies: [
      "615W Monocrystalline Solar Panels",
      "40kVA Hybrid Inverter Stack",
      "120kWh Lithium Battery Bank",
      "Automatic Transfer Switch (ATS)",
      "Grid + Generator Integration",
      "Remote Monitoring & Analytics"
    ],
    challenges: [
      "Delivering 24/7 power for a secondary referral hospital with zero tolerance for downtime",
      "Sizing storage to ride through long grid outages common in Okitipupa",
      "Integrating with existing hospital distribution, generator and critical clinical loads",
      "Installing 120 panels across multiple roof sections without disrupting hospital operations",
      "Meeting tight commissioning window to minimise impact on patient care"
    ],
    solutions: [
      "Designed a 73.8kWp hybrid array with 120 × 615W panels optimised for the hospital's roof layout",
      "Deployed a 40kVA inverter stack paired with 120kWh of lithium storage for deep, reliable backup",
      "Integrated solar, battery, grid and generator into a single automated power architecture",
      "Commissioned the system in phases to keep wards, theatres and clinics live throughout installation",
      "Configured remote monitoring so the Wyre team can proactively support the hospital"
    ],
    results: [
      "24/7 clean, uninterrupted electricity for wards, theatres, consulting rooms and pharmacy",
      "Approximately 108,000 kWh of clean energy generated per year",
      "Sharp reduction in diesel generator runtime and fuel costs",
      "Significantly lower monthly grid electricity expenditure for the hospital",
      "Improved patient care through reliable lighting, cold-chain and medical equipment power",
      "Lower carbon footprint for a public healthcare facility serving the Ikale region"
    ]
  }
]

// Projects data for detail pages (with all fields)
export const projectsData: Record<number, Project> = {
  1: featuredProjects[0],
  2: featuredProjects[1],
  3: featuredProjects[2]
}