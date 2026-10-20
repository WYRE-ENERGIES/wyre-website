export type FacilitySector = 'commercial' | 'industrial' | 'schools'

export type EquipmentIcon =
  | 'airvent'
  | 'snowflake'
  | 'lightbulb'
  | 'monitor'
  | 'server'
  | 'refrigerator'
  | 'droplets'
  | 'elevator'
  | 'cctv'
  | 'wifi'
  | 'printer'
  | 'fan'
  | 'screen'
  | 'kitchen'
  | 'cog'
  | 'compressor'
  | 'weld'
  | 'conveyor'
  | 'cooling'
  | 'cnc'
  | 'package'
  | 'forklift'
  | 'tools'

export type EquipmentItem = {
  id: string
  name: string
  defaultWatts: number
  defaultHours: number
  defaultHp?: number
  sectors: FacilitySector[]
  icon: EquipmentIcon
  image?: string
  hint: string
}

export type SelectedLoad = {
  id: string
  equipmentId: string
  name: string
  qty: number
  watts: number
  hours: number
  hp?: number
}

export type BackupSource = 'diesel' | 'petrol' | 'grid-generator' | 'grid'

export type SolarPackage = {
  id: string
  name: string
  kva: number
  batteryKwh: number
}

export type CalculatorEstimate = {
  sector: FacilitySector
  loads: SelectedLoad[]
  connectedKw: number
  peakKw: number
  dailyKwh: number
  inverterKva: number
  solarKwp: number
  panelCount: number
  batteryKwh: number
  backupHoursAtPeak: number
  backupSource: BackupSource
  backupSourceLabel: string
  monthlyOperatingCost: number
  annualOperatingCost: number
  matchedPackages: SolarPackage[]
  isCustomSystem: boolean
}

export const WATTS_PER_HP = 746
export const DIVERSITY_FACTOR = 0.75
export const PEAK_SUN_HOURS = 5
export const PANEL_WATTS = 550
export const SYSTEM_EFFICIENCY = 0.77
export const INVERTER_HEADROOM = 1.25
export const POWER_FACTOR = 0.8
export const BATTERY_DOD = 0.8
export const BATTERY_EFFICIENCY = 0.9
export const DIESEL_LITERS_PER_KWH = 0.33
export const PETROL_LITERS_PER_KWH = 0.5
export const GENERATOR_OPEX_MARKUP = 0.15
export const GRID_TARIFF_PER_KWH = 210
export const DEFAULT_DIESEL_PRICE = 1400
export const DEFAULT_PETROL_PRICE = 1000

export const INVERTER_SIZES_KVA = [10, 20, 40, 80, 120, 160, 200, 250, 300, 500]

export const BACKUP_OPTIONS: { value: BackupSource; label: string }[] = [
  { value: 'diesel', label: 'Diesel generator' },
  { value: 'petrol', label: 'Petrol generator' },
  { value: 'grid-generator', label: 'Grid + generator' },
  { value: 'grid', label: 'Grid only' },
]

export const BACKUP_HOUR_OPTIONS = [4, 8, 12]

export const SECTOR_OPTIONS: { value: FacilitySector; label: string }[] = [
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'schools', label: 'Schools' },
]

export const sectorLabel = (sector: FacilitySector) =>
  SECTOR_OPTIONS.find((option) => option.value === sector)?.label ?? sector

export const SOLAR_PACKAGES: SolarPackage[] = [
  { id: '10-20', name: '10kVA Inverter with 20kWh Lithium Battery', kva: 10, batteryKwh: 20 },
  { id: '10-30', name: '10kVA Inverter with 30kWh Battery', kva: 10, batteryKwh: 30 },
  { id: '20-60', name: '20kVA with 60kWh Lithium Battery', kva: 20, batteryKwh: 60 },
  { id: '40-100', name: '40kVA with 100kWh Lithium Battery', kva: 40, batteryKwh: 100 },
  { id: '80-160', name: '80kVA with 160kWh Battery', kva: 80, batteryKwh: 160 },
  { id: '80-210', name: '80kVA with 210kWh Battery', kva: 80, batteryKwh: 210 },
]

export const hpToWatts = (hp: number) => Math.round(hp * WATTS_PER_HP)

export const wattsToHp = (watts: number) => Math.round((watts / WATTS_PER_HP) * 10) / 10

const hpRated = (hp: number, hours: number, rest: Omit<EquipmentItem, 'defaultWatts' | 'defaultHours' | 'defaultHp'>) => ({
  ...rest,
  defaultHp: hp,
  defaultWatts: hpToWatts(hp),
  defaultHours: hours,
})

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  hpRated(2.5, 10, { id: 'cassette-ac', name: 'Cassette / Split AC', sectors: ['commercial', 'schools'], icon: 'airvent', image: '/img/equipment/split-ac.png', hint: '2.5 HP indoor unit' }),
  hpRated(24, 12, { id: 'chiller', name: 'Chiller', sectors: ['commercial', 'industrial'], icon: 'snowflake', image: '/img/equipment/chiller.png', hint: 'Central cooling plant' }),
  { id: 'led-lighting', name: 'LED Lighting', defaultWatts: 2500, defaultHours: 12, sectors: ['commercial', 'industrial', 'schools'], icon: 'lightbulb', image: '/img/equipment/lighting.png', hint: 'Per floor or hall' },
  { id: 'workstations', name: 'Workstations (×10)', defaultWatts: 2000, defaultHours: 9, sectors: ['commercial'], icon: 'monitor', image: '/img/equipment/workstations.png', hint: '10 PCs / laptops' },
  { id: 'server-rack', name: 'Server / IT Rack', defaultWatts: 3500, defaultHours: 24, sectors: ['commercial', 'industrial', 'schools'], icon: 'server', image: '/img/equipment/server.png', hint: 'Always-on IT load' },
  { id: 'display-cooler', name: 'Display Cooler', defaultWatts: 700, defaultHours: 24, sectors: ['commercial'], icon: 'refrigerator', image: '/img/equipment/fridge.png', hint: 'Retail refrigeration' },
  { id: 'cold-room', name: 'Cold Room', defaultWatts: 4500, defaultHours: 18, sectors: ['commercial', 'industrial'], icon: 'snowflake', image: '/img/equipment/cold-room.png', hint: 'Walk-in storage' },
  hpRated(2, 4, { id: 'water-pump', name: 'Water Pump', sectors: ['commercial', 'industrial', 'schools'], icon: 'droplets', image: '/img/equipment/water-pump.png', hint: 'Borehole / booster' }),
  hpRated(10, 6, { id: 'elevator', name: 'Elevator', sectors: ['commercial'], icon: 'elevator', image: '/img/equipment/elevator.png', hint: 'Passenger lift' }),
  { id: 'cctv', name: 'CCTV & Access', defaultWatts: 300, defaultHours: 24, sectors: ['commercial', 'industrial', 'schools'], icon: 'cctv', image: '/img/equipment/cctv.png', hint: 'Security stack' },
  { id: 'network', name: 'Network Closet', defaultWatts: 400, defaultHours: 24, sectors: ['commercial', 'schools'], icon: 'wifi', image: '/img/equipment/network.png', hint: 'Switches, APs, DVR' },
  { id: 'printer', name: 'Printer / Copier', defaultWatts: 800, defaultHours: 4, sectors: ['commercial', 'schools'], icon: 'printer', image: '/img/equipment/printer.png', hint: 'Office print room' },
  { id: 'led-screens', name: 'LED Screens / Signage', defaultWatts: 600, defaultHours: 12, sectors: ['commercial', 'schools'], icon: 'screen', image: '/img/equipment/led-screens.png', hint: 'Display & branding' },
  { id: 'commercial-kitchen', name: 'Commercial Kitchen', defaultWatts: 6000, defaultHours: 6, sectors: ['commercial', 'schools'], icon: 'kitchen', image: '/img/equipment/commercial-kitchen.png', hint: 'Canteen / F&B line' },
  { id: 'classroom-fans', name: 'Classroom Fans', defaultWatts: 1500, defaultHours: 8, sectors: ['schools'], icon: 'fan', image: '/img/equipment/classroom-fans.png', hint: 'Per classroom block' },
  { id: 'ict-lab', name: 'ICT Lab (×20 PCs)', defaultWatts: 4000, defaultHours: 8, sectors: ['schools'], icon: 'monitor', image: '/img/equipment/ict-lab.png', hint: 'Computer lab' },
  { id: 'projectors', name: 'Projectors / AV', defaultWatts: 400, defaultHours: 6, sectors: ['schools'], icon: 'screen', image: '/img/equipment/projectors.png', hint: 'Lecture rooms' },
  { id: 'science-lab', name: 'Science Lab', defaultWatts: 2500, defaultHours: 6, sectors: ['schools'], icon: 'tools', image: '/img/equipment/science-lab.png', hint: 'Benches & instruments' },
  { id: 'hostel-fridge', name: 'Hostel Refrigeration', defaultWatts: 800, defaultHours: 24, sectors: ['schools'], icon: 'refrigerator', image: '/img/equipment/fridge.png', hint: 'Boarding / kitchen' },
  hpRated(15, 10, { id: 'production-motor', name: 'Production Motor', sectors: ['industrial'], icon: 'cog', image: '/img/equipment/production-motor.png', hint: 'Line drive motor' }),
  hpRated(10, 8, { id: 'air-compressor', name: 'Air Compressor', sectors: ['industrial'], icon: 'compressor', image: '/img/equipment/air-compressor.png', hint: 'Workshop air' }),
  { id: 'welder', name: 'Welding Machine', defaultWatts: 8000, defaultHours: 6, sectors: ['industrial'], icon: 'weld', image: '/img/equipment/welder.png', hint: 'Arc / MIG station' },
  { id: 'conveyor', name: 'Conveyor System', defaultWatts: 4000, defaultHours: 10, sectors: ['industrial'], icon: 'conveyor', image: '/img/equipment/conveyor.png', hint: 'Material handling' },
  hpRated(10, 12, { id: 'cooling-tower', name: 'Cooling Tower', sectors: ['industrial'], icon: 'cooling', image: '/img/equipment/cooling-tower.png', hint: 'Process heat rejection' }),
  { id: 'cnc', name: 'CNC / Machine Tool', defaultWatts: 9000, defaultHours: 8, sectors: ['industrial'], icon: 'cnc', image: '/img/equipment/cnc.png', hint: 'Fabrication cell' },
  { id: 'packaging', name: 'Packaging Machine', defaultWatts: 3500, defaultHours: 8, sectors: ['industrial'], icon: 'package', image: '/img/equipment/packaging.png', hint: 'Fill, seal, wrap' },
  { id: 'forklift-charger', name: 'Forklift Charger', defaultWatts: 3000, defaultHours: 8, sectors: ['industrial'], icon: 'forklift', image: '/img/equipment/forklift-charger.png', hint: 'Warehouse charging' },
  { id: 'workshop-tools', name: 'Workshop Tools', defaultWatts: 2500, defaultHours: 6, sectors: ['industrial'], icon: 'tools', image: '/img/equipment/workshop-tools.png', hint: 'Benches & small plant' },
]

export const usesHorsepower = (equipmentId: string) =>
  Boolean(EQUIPMENT_CATALOG.find((item) => item.id === equipmentId)?.defaultHp)

const roundUpToSize = (value: number, sizes: number[]) => {
  const match = sizes.find((size) => size >= value)
  return match ?? sizes[sizes.length - 1]
}

export const formatWatts = (watts: number) => {
  if (watts >= 1000) {
    const kw = watts / 1000
    return `${kw % 1 === 0 ? kw.toFixed(0) : kw.toFixed(1)} kW`
  }
  return `${Math.round(watts).toLocaleString('en-NG')} W`
}

export const formatKwh = (kwh: number) => {
  if (kwh >= 100) return `${Math.round(kwh).toLocaleString('en-NG')} kWh`
  return `${kwh.toFixed(1)} kWh`
}

export const formatNaira = (amount: number) =>
  `₦${Math.round(amount).toLocaleString('en-NG')}`

export const backupSourceLabel = (source: BackupSource) =>
  BACKUP_OPTIONS.find((option) => option.value === source)?.label ?? source

export const buildEstimate = ({
  sector,
  loads,
  backupSource,
  fuelPrice,
  backupHours,
  gridShare = 0.4,
}: {
  sector: FacilitySector
  loads: SelectedLoad[]
  backupSource: BackupSource
  fuelPrice: number
  backupHours: number
  gridShare?: number
}): CalculatorEstimate | null => {
  if (loads.length === 0) return null

  const connectedWatts = loads.reduce((sum, load) => sum + load.qty * load.watts, 0)
  const dailyWh = loads.reduce((sum, load) => sum + load.qty * load.watts * load.hours, 0)
  const peakWatts = connectedWatts * DIVERSITY_FACTOR
  const connectedKw = connectedWatts / 1000
  const peakKw = peakWatts / 1000
  const dailyKwh = dailyWh / 1000

  const inverterKw = peakKw * INVERTER_HEADROOM
  const inverterKva = roundUpToSize(inverterKw / POWER_FACTOR, INVERTER_SIZES_KVA)

  const solarKwpRaw = dailyKwh / PEAK_SUN_HOURS / SYSTEM_EFFICIENCY
  const panelCount = Math.max(1, Math.ceil((solarKwpRaw * 1000) / PANEL_WATTS))
  const solarKwp = Math.ceil(solarKwpRaw * 10) / 10

  const averageLoadKw = dailyKwh / 24
  const usableBatteryKwh = averageLoadKw * backupHours
  const batteryKwh = Math.max(
    10,
    Math.ceil(usableBatteryKwh / BATTERY_DOD / BATTERY_EFFICIENCY)
  )

  const backupHoursAtPeak = peakKw > 0
    ? (batteryKwh * BATTERY_DOD * BATTERY_EFFICIENCY) / peakKw
    : 0

  const monthlyKwh = dailyKwh * 30
  let monthlyOperatingCost = 0

  if (backupSource === 'grid') {
    monthlyOperatingCost = monthlyKwh * GRID_TARIFF_PER_KWH
  } else if (backupSource === 'grid-generator') {
    const gridCost = monthlyKwh * gridShare * GRID_TARIFF_PER_KWH
    const genKwh = monthlyKwh * (1 - gridShare)
    const liters = genKwh * DIESEL_LITERS_PER_KWH
    monthlyOperatingCost = gridCost + liters * fuelPrice * (1 + GENERATOR_OPEX_MARKUP)
  } else {
    const litersPerKwh = backupSource === 'petrol' ? PETROL_LITERS_PER_KWH : DIESEL_LITERS_PER_KWH
    monthlyOperatingCost = monthlyKwh * litersPerKwh * fuelPrice * (1 + GENERATOR_OPEX_MARKUP)
  }

  const catalogMaxKva = Math.max(...SOLAR_PACKAGES.map((pkg) => pkg.kva))
  const isCustomSystem = inverterKva > catalogMaxKva

  const inverterMatches = SOLAR_PACKAGES.filter((pkg) => pkg.kva >= inverterKva)
  const matchedPackages = inverterMatches
    .filter((pkg) => pkg.batteryKwh >= batteryKwh * 0.85)
    .slice(0, 2)

  const fallbackPackages = matchedPackages.length
    ? matchedPackages
    : inverterMatches.slice(0, 1)

  return {
    sector,
    loads,
    connectedKw,
    peakKw,
    dailyKwh,
    inverterKva,
    solarKwp,
    panelCount,
    batteryKwh,
    backupHoursAtPeak,
    backupSource,
    backupSourceLabel: backupSourceLabel(backupSource),
    monthlyOperatingCost,
    annualOperatingCost: monthlyOperatingCost * 12,
    matchedPackages: isCustomSystem ? [] : fallbackPackages,
    isCustomSystem,
  }
}

export const ESTIMATE_BLOCK_START = '--- Load calculator estimate ---'
export const ESTIMATE_BLOCK_END = '--- End of estimate ---'

export const formatEstimateMessage = (estimate: CalculatorEstimate) => {
  const loadLines = estimate.loads.map((load) => {
    const hpPart = load.hp != null ? ` · ${load.hp} HP` : ''
    return `- ${load.name} × ${load.qty}${hpPart} · ${formatWatts(load.watts)} · ${load.hours} hrs/day`
  })

  const packageLines = estimate.isCustomSystem
    ? ['Recommended package: Custom enterprise system (site design required)']
    : estimate.matchedPackages.map((pkg) => `- ${pkg.name}`)

  return [
    'Load Calculator estimate',
    `Facility sector: ${sectorLabel(estimate.sector)}`,
    `Current backup: ${estimate.backupSourceLabel}`,
    '',
    'Equipment:',
    ...loadLines,
    '',
    `Connected load: ${estimate.connectedKw.toFixed(1)} kW`,
    `Peak diversified load: ${estimate.peakKw.toFixed(1)} kW`,
    `Daily energy: ${formatKwh(estimate.dailyKwh)}`,
    `Recommended inverter: ${estimate.inverterKva} kVA`,
    `Recommended solar array: ${estimate.solarKwp} kWp (${estimate.panelCount} × ${PANEL_WATTS} W panels)`,
    `Recommended storage: ${estimate.batteryKwh} kWh`,
    `Estimated current energy spend: ${formatNaira(estimate.monthlyOperatingCost)} / month`,
    '',
    'Suggested Wyre systems:',
    ...packageLines,
  ].join('\n')
}

export const stripEstimateBlock = (message: string) => {
  const start = message.indexOf(ESTIMATE_BLOCK_START)
  if (start === -1) return message.trim()

  const end = message.indexOf(ESTIMATE_BLOCK_END)
  const before = message.slice(0, start)
  const after = end === -1 ? '' : message.slice(end + ESTIMATE_BLOCK_END.length)

  return `${before}${after}`.replace(/\n{3,}/g, '\n\n').trim()
}

export const upsertEstimateInMessage = (
  message: string,
  estimate: CalculatorEstimate | null
) => {
  const userNotes = stripEstimateBlock(message)
  if (!estimate) return userNotes

  const block = `${ESTIMATE_BLOCK_START}\n${formatEstimateMessage(estimate)}\n${ESTIMATE_BLOCK_END}`
  return userNotes ? `${block}\n\n${userNotes}` : block
}
