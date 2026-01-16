import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Leaf, Layers, Sun } from "lucide-react"
import { apiClient } from "../lib/api"

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
  isInView: boolean
}

const Counter = ({ end, suffix = "", duration = 2, isInView }: CounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

interface GlobalEnergyMetrics {
  total_energy_produced_kwh: number
  total_carbon_footprint_tons: number
  total_solar_energy_kwh?: number
}

interface CachedData {
  data: GlobalEnergyMetrics
  timestamp: number
}

const CACHE_KEY = 'wyre_energy_metrics'

const PLACEHOLDER_DATA: GlobalEnergyMetrics = {
  total_energy_produced_kwh: 66879958.4,
  total_carbon_footprint_tons: 33991.11,
  total_solar_energy_kwh: 102476.4
}

// Load cached data synchronously on initialization, or return placeholder
const loadCachedData = (): GlobalEnergyMetrics => {
  if (typeof window === "undefined") return PLACEHOLDER_DATA
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
      const parsedCache: CachedData = JSON.parse(cached)
      if (parsedCache.data) {
        return parsedCache.data
      }
    }
  } catch (error) {
    console.error('Error loading cached data:', error)
  }
  return PLACEHOLDER_DATA
}

const Statistics = () => {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const [energyData, setEnergyData] = useState<GlobalEnergyMetrics>(loadCachedData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEnergyMetrics = async () => {
      try {
        const response = await apiClient.get('global-energy-metrics/')
        if (response.data.status && response.data.data) {
          const newData = response.data.data

          // Merge with placeholder values to ensure all fields are present
          const mergedData: GlobalEnergyMetrics = {
            total_energy_produced_kwh: newData.total_energy_produced_kwh ?? PLACEHOLDER_DATA.total_energy_produced_kwh,
            total_carbon_footprint_tons: newData.total_carbon_footprint_tons ?? PLACEHOLDER_DATA.total_carbon_footprint_tons,
            total_solar_energy_kwh: newData.total_solar_energy_kwh ?? PLACEHOLDER_DATA.total_solar_energy_kwh
          }

          // Update cache first to ensure persistence
          const cacheData: CachedData = {
            data: mergedData,
            timestamp: Date.now()
          }
          localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))

          // Then update state to trigger UI update
          setEnergyData(mergedData)
        }
      } catch (error) {
        console.error('Error fetching energy metrics:', error)
        setError('Unable to load latest metrics. Showing cached values.')
        // On error, keep using cached/placeholder data (already set in state)
      }
    }

    fetchEnergyMetrics()
  }, [])

  // Always use data (either from API, cache, or placeholder)
  const energyProcessed = Math.round(energyData.total_energy_produced_kwh / 1000)
  const carbonAnalysed = Math.round(energyData.total_carbon_footprint_tons)

  const solarCapacity = Math.round((energyData.total_solar_energy_kwh ?? PLACEHOLDER_DATA.total_solar_energy_kwh!) / 1000)

  return (
    <section className="relative py-12 flex flex-col items-center justify-center lg:py-16">
      <div className=" w-full px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Metrics & Achievements
          </h2>
          <p className="text-sm font-semibold text-brandColor uppercase tracking-widest mt-2">
            And counting...
          </p>
        </div>
      </div>
      <div className="max-2xl:px-6 container w-full mx-auto px-6 mt-18 lg:mt-14">
        {error && (
          <div className="mb-4 text-center text-sm text-orange-600 bg-orange-50 border border-orange-100 px-3 py-2 rounded-md">
            {error}
          </div>
        )}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pt-12 border-t border-gray-200 justify-between w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <p className="text-4xl 2xl:text-5xl font-bold text-heading mb-2">
              <Counter end={energyProcessed} suffix=" MWh" isInView={isStatsInView} />
            </p>
            <p className="text-gray-400 font-medium">Total Energy Analyzed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-4xl 2xl:text-5xl font-bold text-heading mb-2">
              <Counter end={carbonAnalysed} suffix=" Gt" isInView={isStatsInView} />
            </p>
            <p className="text-gray-400 font-medium">Total Carbon Analyzed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Layers className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-4xl 2xl:text-5xl font-bold text-heading mb-2">
              <Counter end={15} suffix="+ MW" isInView={isStatsInView} />
            </p>
            <p className="text-gray-400 font-medium">Pipeline</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Sun className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-4xl 2xl:text-5xl font-bold text-heading mb-2">
              <Counter end={solarCapacity} suffix=" MWh" isInView={isStatsInView} />
            </p>
            <p className="text-gray-400 font-medium">Total Solar Energy</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Statistics

