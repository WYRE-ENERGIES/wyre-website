"use client"

import { AnimatedList } from "../components/magicui/animated-list"
import { cn } from "../lib/utils"
import { AlertTriangle, TrendingDown, DollarSign, Zap, Fuel, Leaf, Target, Activity, Battery, AlertCircle } from "lucide-react"

interface Item {
  name: string
  description: string
  time: string
  icon: React.ElementType
  iconColor: string
}

let notifications = [
  {
    name: "Generator Alert",
    description: "Your generator is oversized by 60%. Your ideal size should be 45kVA to optimize fuel consumption",
    time: "15m ago",
    icon: AlertTriangle,
    iconColor: "text-orange-500",
  },
  {
    name: "Diesel Disparity",
    description: "600 Litres of diesel usage difference detected between EMS and branch reports. Investigation recommended",
    time: "10m ago",
    icon: Fuel,
    iconColor: "text-red-500",
  },
  {
    name: "Energy Savings",
    description: "You saved 30% on energy costs this month and averted 2.5 tonnes of CO2 emissions",
    time: "5m ago",
    icon: TrendingDown,
    iconColor: "text-green-500",
  },
  {
    name: "Budget Status",
    description: "You're on track to meet your monthly energy budget. Current spend is 75% of allocated amount",
    time: "2m ago",
    icon: Target,
    iconColor: "text-blue-500",
  },
  {
    name: "High Energy Usage",
    description: "Energy consumption increased by 45% compared to last week. Peak usage detected at 2:00 PM",
    time: "1h ago",
    icon: Zap,
    iconColor: "text-yellow-500",
  },
  {
    name: "CO2 Reduction",
    description: "Your solar installation has reduced carbon footprint by 1.8 tonnes this month",
    time: "3h ago",
    icon: Leaf,
    iconColor: "text-emerald-500",
  },
  {
    name: "Cost Alert",
    description: "Grid electricity costs exceeded ₦850,000 this period. Consider switching to generator during peak hours",
    time: "4h ago",
    icon: DollarSign,
    iconColor: "text-purple-500",
  },
  {
    name: "Battery Status",
    description: "Battery charge level at 78%. Communication issue detected between inverter and battery system",
    time: "6h ago",
    icon: Battery,
    iconColor: "text-amber-500",
  },
  {
    name: "Performance Alert",
    description: "Generator efficiency dropped to 65%. Maintenance recommended to restore optimal performance",
    time: "8h ago",
    icon: Activity,
    iconColor: "text-rose-500",
  },
  {
    name: "System Warning",
    description: "Multiple energy sources detected. Optimize load distribution to reduce operational costs",
    time: "12h ago",
    icon: AlertCircle,
    iconColor: "text-indigo-500",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, time, icon: Icon, iconColor }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[800px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      )}
    >
      <div className="flex flex-row items-start gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 mt-1">
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        <div className="flex flex-col overflow-hidden flex-1">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
    </figure>
  )
}

export default function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
      <AnimatedList delay={1500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  )
}
