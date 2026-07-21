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
    gallery: [
      "/img/beach-resort.jpeg",
      "/img/beach-resort-aerial-compound.png",
      "/img/beach-resort-aerial-coastline.png"
    ],
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
  },
  {
    id: 4,
    title: "Ashforte by Schlepp Properties",
    category: "Commercial Solar & Energy Storage",
    description: "A 96.7kWp rooftop solar installation paired with 240kWh of battery storage, delivering quiet, 24/7 clean power and full backup to a premium Lagos commercial development.",
    image: "/img/ashforte.png",
    gallery: [
      "/img/ashforte.png",
      "/img/ashforte-rooftop-array.png",
      "/img/ashforte-aerial-side.png",
      "/img/ashforte-aerial-street.png"
    ],
    client: "Schlepp Properties",
    clientLogo: "",
    location: "Lagos, Nigeria",
    completionDate: "2025",
    fullDescription: "Wyre partnered with Schlepp Properties again to power Ashforte, a premium commercial development in Lagos, with a high-capacity rooftop solar and energy storage system. The installation features 156 monocrystalline 620W panels (96.7kWp) feeding an 80kVA hybrid inverter stack and a 240kWh lithium battery bank, giving residents fully silent, generator-free electricity and seamless backup through grid outages. Optimised for the building's twin-block roof layout, the system powers apartments, shared amenities and the rooftop pool while maintaining the architectural cleanliness Schlepp's properties are known for.",
    review: {
      name: "Schlepp Properties",
      role: "Property Management",
      company: "Schlepp Properties",
      rating: 5,
      text: "After the success at Whitestone, choosing Wyre for Ashforte was an easy decision. The system is silent, intelligent and effortlessly reliable. Our residents enjoy 24/7 power without ever hearing a generator, and our running costs have dropped dramatically."
    },
    stats: [
      { label: "System Size", value: "96.7kWp", icon: Sun },
      { label: "Inverter Capacity", value: "80kVA", icon: Zap },
      { label: "Battery Storage", value: "240kWh", icon: Battery },
      { label: "Solar Panels", value: "156 × 620W", icon: Building2 },
      { label: "Est. Annual Output", value: "~141,000 kWh/year", icon: TrendingUp }
    ],
    technologies: [
      "620W Monocrystalline Solar Panels",
      "80kVA Hybrid Inverter Stack",
      "240kWh Lithium Battery Bank",
      "Energy Management Platform",
      "Automatic Grid + Battery Switching",
      "Remote Monitoring & Analytics"
    ],
    challenges: [
      "Maximising rooftop generation across a split twin-block roof with limited usable surface",
      "Powering a high-density residential building with 24/7 expectations and zero generator noise",
      "Sizing battery storage to bridge long Lagos grid outages without compromising comfort",
      "Preserving the architectural aesthetics of a premium residential property",
      "Coordinating installation around an active construction and finishing schedule"
    ],
    solutions: [
      "Designed a 96.7kWp split-array layout using 156 × 620W panels optimised for both roof sections",
      "Deployed an 80kVA hybrid inverter stack paired with 240kWh of lithium storage for deep backup",
      "Integrated solar, battery and grid into a single automated, generator-free power architecture",
      "Implemented a low-profile mounting system that complements the building's modern lines",
      "Delivered remote monitoring so Schlepp's facility team can track performance in real time"
    ],
    results: [
      "Approximately 141,000 kWh of clean energy generated per year",
      "Truly silent, generator-free electricity for every apartment around the clock",
      "Seamless backup that rides through Lagos grid outages without resident impact",
      "Major reduction in diesel and grid electricity costs for the building",
      "Premium resident experience with stable power for AC, lifts, water and rooftop pool",
      "A scalable energy template Schlepp can replicate across future developments"
    ]
  },
  {
    id: 5,
    title: "Arzeh Integrated ColdRoom",
    category: "Retail Solar & Energy Storage",
    description: "A hybrid solar and battery storage system for a Victoria Island wine retail outlet, delivering silent, climate-stable power for premium wines, refrigeration and showroom lighting.",
    image: "/img/jads.png",
    gallery: [
      "/img/jads.png"
    ],
    client: "Arzeh Integrated ColdRoom",
    clientLogo: "",
    location: "2B Isiola Oyekan Street, Victoria Island, Lagos",
    completionDate: "2025",
    fullDescription: "Wyre designed and installed a tailored solar and battery storage system for Jads, a wine retail outlet on Victoria Island, Lagos. The setup combines a rooftop solar array with a 20kVA hybrid inverter and 75kWh of lithium battery storage, giving the store stable, generator-free power around the clock. For a premium wine business, uninterrupted electricity is critical — wine refrigeration, climate control and ambient showroom lighting all depend on it — and this installation removes the store's exposure to Lagos's frequent grid outages while cutting reliance on noisy, polluting diesel.",
    review: {
      name: "Arzeh Integrated ColdRoom",
      role: "Store Management",
      company: "Arzeh Integrated ColdRoom, Victoria Island",
      rating: 5,
      text: "Wyre delivered exactly what we needed: silent, reliable power for our store. Our wines stay perfectly chilled, our showroom always looks its best, and we no longer worry about generator noise or fuel costs disrupting the customer experience."
    },
    stats: [
      { label: "Inverter Capacity", value: "20kVA", icon: Zap },
      { label: "Battery Storage", value: "75kWh", icon: Battery },
      { label: "Power Mode", value: "Generator-Free", icon: Sun },
      { label: "Operation", value: "24/7 Backup", icon: TrendingUp }
    ],
    technologies: [
      "Monocrystalline Solar Panels",
      "20kVA Hybrid Inverter",
      "75kWh Lithium Battery Bank",
      "Automatic Grid + Battery Switching",
      "Climate-Aware Load Management",
      "Remote Monitoring & Analytics"
    ],
    challenges: [
      "Powering a premium wine retail space where temperature stability is non-negotiable",
      "Mounting a meaningful solar array on a constrained Victoria Island rooftop",
      "Sizing storage to ride through extended grid outages without affecting refrigeration",
      "Eliminating generator noise and exhaust in a high-end customer-facing environment",
      "Integrating with the store's existing electrical and refrigeration loads cleanly"
    ],
    solutions: [
      "Designed a rooftop solar array spread across the available roof sections for maximum yield",
      "Deployed a 20kVA hybrid inverter paired with 75kWh of lithium storage for deep, silent backup",
      "Configured automatic switching between solar, battery and grid with zero-interruption transfer",
      "Prioritised refrigeration and climate-critical loads in the energy management configuration",
      "Set up remote monitoring so the Wyre team can proactively support the store"
    ],
    results: [
      "Stable, climate-controlled power for wine storage and refrigeration around the clock",
      "Silent operation with no generator noise disrupting the in-store experience",
      "Significant reduction in diesel and grid electricity expenses",
      "Improved customer experience with reliable lighting and ambience at all hours",
      "Lower carbon footprint for a premium retail brand on Victoria Island",
      "A repeatable energy blueprint for boutique retail across Lagos"
    ]
  },
  {
    id: 6,
    title: "Caring Habitat",
    category: "Residential Solar & Energy Storage",
    description: "A 49.65kWp three-phase hybrid solar installation with 120kWh of lithium storage and 60kW of inverter capacity, delivering silent, generator-free power to a modern residential estate off the Lekki-Epe Expressway.",
    image: "/img/caring-habitat.png",
    gallery: [
      "/img/caring-habitat.png",
      "/img/caring-habitat-install.png",
      "/img/caring-habitat-aerial.png",
      "/img/caring-habitat-technician.png",
      "/img/caring-habitat-estate.png"
    ],
    client: "Caring Habitat",
    clientLogo: "",
    location: "Lekki-Epe Expressway, Lagos, Nigeria",
    completionDate: "May 2026",
    fullDescription: "Wyre delivered a 60kW three-phase hybrid solar installation for Caring Habitat, a modern residential development located on Block D, Plot 1 Caring Habitat Street — off the Lekki-Epe Expressway, just after Abraham Adesanya and before Lagos Business School. The system pairs 80 monocrystalline 615W panels (49.65kWp) with three 20kW hybrid inverters and a 120kWh lithium battery bank, giving residents fully silent, generator-free electricity and seamless backup through Lagos grid outages. Delivered under Project Number SPC-2026-001 and commissioned on 21 May 2026, the installation cleared all 34 ITP inspection hold points, achieved a 10/10 client satisfaction score and is now monitored 24/7 via the Wyre Dashboard.",
    review: {
      name: "Caring Habitat",
      role: "Facility Management",
      company: "Caring Habitat Residential Estate",
      rating: 5,
      text: "Wyre's team delivered exactly as promised — the system is clean, quiet and completely reliable. Our residents enjoy uninterrupted power without ever hearing a generator, and the Wyre Dashboard gives our facility team full visibility over performance. A genuine 10 out of 10 experience."
    },
    stats: [
      { label: "System Size", value: "49.65kWp", icon: Sun },
      { label: "Inverter Capacity", value: "60kW", icon: Zap },
      { label: "Battery Storage", value: "120kWh", icon: Battery },
      { label: "Solar Panels", value: "80 × 615W", icon: Building2 },
      { label: "Est. Annual Output", value: "~72,500 kWh/year", icon: TrendingUp }
    ],
    technologies: [
      "615W Monocrystalline Solar Panels",
      "3 × 20kW Hybrid Inverters (3-Phase)",
      "120kWh Lithium Battery Bank",
      "5-String DC Configuration (4 × 15 + 1 × 20 panels)",
      "Automatic Grid + Battery Switching",
      "Wyre Dashboard Remote Monitoring"
    ],
    challenges: [
      "Delivering a full 60kW three-phase hybrid system on a tight 7-working-day plan",
      "Optimising a multi-pitch roof layout for maximum solar yield without visual clutter",
      "Sizing storage to bridge extended Lagos grid outages across a multi-unit estate",
      "Maintaining 34 ITP inspection hold points with zero NCRs raised during the build",
      "Coordinating panel logistics and rooftop lifts on an active residential estate"
    ],
    solutions: [
      "Designed a 49.65kWp array split across 5 DC strings (4 × 15 panels + 1 × 20 panels)",
      "Deployed 3 × 20kW hybrid inverters for a fully balanced three-phase configuration",
      "Integrated 12 × 10kWh lithium modules (120kWh) for deep, silent overnight backup",
      "Ran daily toolbox talks, full PPE compliance and 100% site inductions across the build",
      "Commissioned the system with earth resistance <1 Ohm and all string VOCs within 5%"
    ],
    results: [
      "Practical Completion Certificate issued on 21 May 2026 — project delivered in 8 working days",
      "System performance of 41.98 kW recorded at commissioning, monitored live via Wyre Dashboard",
      "All 34 ITP inspection hold points cleared with zero non-conformance reports (NCRs)",
      "10/10 client satisfaction score at handover",
      "Silent, generator-free electricity for the estate with seamless outage backup",
      "Backed by 12-year panel product, 25-year performance and 10-year mounting warranties"
    ]
  },
  {
    id: 7,
    title: "BR Space Event Centre",
    category: "Events Solar & Energy Storage",
    description: "A 37.2kWp three-phase hybrid solar installation with 100kWh of lithium storage and 40kW of inverter capacity, engineered to power a Victoria Island event centre primarily from solar with minimal generator support.",
    image: "/img/br-space.png",
    gallery: [
      "/img/br-space.png",
      "/img/br-space-inverters.png",
      "/img/br-space-aerial-pool.png",
      "/img/br-space-aerial-side.png",
      "/img/br-space-aerial-context.png"
    ],
    client: "BR Space",
    clientLogo: "",
    location: "8 Oju Olobun Close, Victoria Island, Lagos",
    completionDate: "June 2026",
    fullDescription: "Wyre delivered a 37.2kWp grid-tied three-phase hybrid solar and battery system for BR Space, an event centre on Oju Olobun Close in Victoria Island, Lagos. Designed to serve as the venue's primary power source with little to no reliance on the generator, the system combines 60 × Jinko 620W monocrystalline panels with two 20kW Deye LV three-phase hybrid inverters (40kW combined) and a 100kWh Deye battery bank arranged in two protected 51kWh clusters. Delivered end-to-end in 9 working days across two phases — panel installation followed by inverter, battery, wiring and commissioning — BR Space now runs quietly on solar self-consumption, drastically cutting fuel costs and generator noise during live events.",
    review: {
      name: "BR Space",
      role: "Venue Management",
      company: "BR Space Event Centre, Victoria Island",
      rating: 5,
      text: "Wyre transformed how we run BR Space. Our events now flow without a single generator interruption, we've cut our fuel spend dramatically, and guests get a genuinely quiet, premium experience. The team delivered exactly to plan in just nine days."
    },
    stats: [
      { label: "System Size", value: "37.2kWp", icon: Sun },
      { label: "Inverter Capacity", value: "40kW", icon: Zap },
      { label: "Battery Storage", value: "100kWh", icon: Battery },
      { label: "Solar Panels", value: "60 × 620W", icon: Building2 },
      { label: "Est. Annual Output", value: "~54,300 kWh/year", icon: TrendingUp }
    ],
    technologies: [
      "Jinko 620W Monocrystalline Solar Panels",
      "2 × Deye 20kW LV Three-Phase Hybrid Inverters",
      "10 × Deye 10.2kWh Lithium Battery Modules (100kWh)",
      "Dual-Cluster DC Architecture with 400A Cluster Breakers",
      "1200A DC Bus Bar with Grid + Generator Interlock",
      "3-Phase Hybrid, Grid-Tied Configuration"
    ],
    challenges: [
      "Making solar the primary power source for a live event venue that cannot tolerate downtime",
      "Delivering a full 40kW three-phase hybrid system end-to-end in just 9 working days",
      "Designing a battery architecture that stays serviceable and safe across long event nights",
      "Interlocking grid and generator sources cleanly on a busy commercial site",
      "Coordinating panel logistics and rooftop works around ongoing venue bookings"
    ],
    solutions: [
      "Sized the 37.2kWp array on the venue's roof to cover most operational load from solar alone",
      "Deployed 2 × Deye 20kW three-phase hybrid inverters feeding a shared 1200A DC bus bar",
      "Split 10 × 10.2kWh batteries into two 51kWh clusters with dedicated 400A DC 2-pole breakers",
      "Built a two-panel electrical setup (Input Panel A + Output Panel B) with grid/gen interlock",
      "Phased the build into 4 days of solar and 5 days of inverter, battery and commissioning works"
    ],
    results: [
      "Approximately 54,300 kWh of clean solar energy generated per year",
      "Primary power supply for the venue now comes from solar, with minimal generator support",
      "Silent, uninterrupted power during live events — no more generator noise for guests",
      "Major reduction in monthly diesel spend and grid electricity costs",
      "Fully commissioned three-phase hybrid system delivered on schedule in 9 working days",
      "A repeatable energy blueprint for event centres and hospitality venues across Lagos"
    ]
  }
]

// Projects data for detail pages (with all fields)
export const projectsData: Record<number, Project> = {
  1: featuredProjects[0],
  2: featuredProjects[1],
  3: featuredProjects[2],
  4: featuredProjects[3],
  5: featuredProjects[4],
  6: featuredProjects[5],
  7: featuredProjects[6]
}