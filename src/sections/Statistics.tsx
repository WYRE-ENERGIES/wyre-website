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
}

interface CachedData {
  data: GlobalEnergyMetrics
  timestamp: number
}

const CACHE_KEY = 'wyre_energy_metrics'

// Load cached data synchronously on initialization
const loadCachedData = (): GlobalEnergyMetrics | null => {
  if (typeof window === "undefined") return null
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
  return null
}

const Statistics = () => {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })
  // Initialize with cached data immediately
  const [energyData, setEnergyData] = useState<GlobalEnergyMetrics | null>(loadCachedData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch fresh data in the background
    const fetchEnergyMetrics = async () => {
      try {
        const response = await apiClient.get('global-energy-metrics/')
        if (response.data.status && response.data.data) {
          const newData = response.data.data

          // Update cache first to ensure persistence
          const cacheData: CachedData = {
            data: newData,
            timestamp: Date.now()
          }
          localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))

          // Then update state to trigger UI update
          setEnergyData(newData)
        }
      } catch (error) {
        console.error('Error fetching energy metrics:', error)
        setError('Unable to load latest metrics. Showing cached values.')
        // On error, keep using cached data (already set in state)
      }
    }

    fetchEnergyMetrics()
  }, [])

  // Convert kWh to a more readable format (divide by 1000 for MWh)
  // Only calculate if we have data, otherwise return 0 (Counter will handle it)
  const energyProcessed = energyData ? Math.round(energyData.total_energy_produced_kwh / 1000) : 0
  const carbonAnalysed = energyData ? Math.round(energyData.total_carbon_footprint_tons) : 0

  // Dummy data for Solar - will be replaced with API data later
  const solarCapacity = 150 // MW

  return (
    <section className="relative py-12 flex flex-col items-center justify-center lg:py-16">
      <div className=" w-full px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Metrics & Achievements
          </h2>
          <p className="text-sm font-semibold text-brandColor uppercase tracking-widest mt-2">
            Still counting...
          </p>
        </div>
      </div>
      <div className="max-2xl:px-6 max-w-[87rem] w-full mx-auto px-6 mt-18 lg:mt-14">
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
            <p className="text-4xl xl:text-5xl font-bold text-heading mb-2">
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
            <p className="text-4xl xl:text-5xl font-bold text-heading mb-2">
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
            <p className="text-4xl xl:text-5xl font-bold text-heading mb-2">
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
            <p className="text-4xl xl:text-5xl font-bold text-heading mb-2">
              <Counter end={solarCapacity} suffix=" MW" isInView={isStatsInView} />
            </p>
            <p className="text-gray-400 font-medium">Solar Capacity</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Statistics

