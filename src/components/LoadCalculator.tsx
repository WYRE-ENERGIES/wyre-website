import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  AirVent,
  Snowflake,
  Lightbulb,
  Monitor,
  Server,
  Refrigerator,
  Droplets,
  ArrowUpDown,
  Cctv,
  Wifi,
  Printer,
  Fan,
  Tv,
  UtensilsCrossed,
  Cog,
  Gauge,
  Flame,
  Boxes,
  Wind,
  Cpu,
  Package,
  Forklift,
  Wrench,
  Plus,
  Trash2,
  RotateCcw,
  Zap,
  BatteryCharging,
  Sun,
  Building2,
  Factory,
  GraduationCap,
  ArrowRight,
  Timer,
} from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { cn } from '../lib/utils'
import {
  BACKUP_HOUR_OPTIONS,
  BACKUP_OPTIONS,
  DEFAULT_DIESEL_PRICE,
  DEFAULT_PETROL_PRICE,
  DIVERSITY_FACTOR,
  EQUIPMENT_CATALOG,
  PANEL_WATTS,
  PEAK_SUN_HOURS,
  SECTOR_OPTIONS,
  buildEstimate,
  formatKwh,
  formatNaira,
  hpToWatts,
  usesHorsepower,
  wattsToHp,
  type BackupSource,
  type CalculatorEstimate,
  type EquipmentIcon,
  type FacilitySector,
  type SelectedLoad,
} from '../data/loadCalculator'

const ICON_MAP: Record<EquipmentIcon, LucideIcon> = {
  airvent: AirVent,
  snowflake: Snowflake,
  lightbulb: Lightbulb,
  monitor: Monitor,
  server: Server,
  refrigerator: Refrigerator,
  droplets: Droplets,
  elevator: ArrowUpDown,
  cctv: Cctv,
  wifi: Wifi,
  printer: Printer,
  fan: Fan,
  screen: Tv,
  kitchen: UtensilsCrossed,
  cog: Cog,
  compressor: Gauge,
  weld: Flame,
  conveyor: Boxes,
  cooling: Wind,
  cnc: Cpu,
  package: Package,
  forklift: Forklift,
  tools: Wrench,
}

const SECTOR_ICONS: Record<FacilitySector, LucideIcon> = {
  commercial: Building2,
  industrial: Factory,
  schools: GraduationCap,
}

type LoadCalculatorProps = {
  onEstimateChange?: (estimate: CalculatorEstimate | null) => void
  onRequestQuote?: () => void
}

const emptyCustomLoad = {
  name: '',
  watts: '',
  hours: '8',
  qty: '1',
}

const LoadCalculator = ({ onEstimateChange, onRequestQuote }: LoadCalculatorProps) => {
  const [sector, setSector] = useState<FacilitySector>('commercial')
  const [loads, setLoads] = useState<SelectedLoad[]>([])
  const [backupSource, setBackupSource] = useState<BackupSource>('diesel')
  const [fuelPrice, setFuelPrice] = useState(String(DEFAULT_DIESEL_PRICE))
  const [backupHours, setBackupHours] = useState(8)
  const [showCustomDialog, setShowCustomDialog] = useState(false)
  const [customLoad, setCustomLoad] = useState(emptyCustomLoad)
  const [customError, setCustomError] = useState<string | null>(null)
  const [highlightError, setHighlightError] = useState(false)

  const catalog = useMemo(
    () => EQUIPMENT_CATALOG.filter((item) => item.sectors.includes(sector)),
    [sector]
  )

  const numericFuelPrice = Number(fuelPrice.replace(/[^\d]/g, '')) || 0

  const estimate = useMemo(
    () =>
      buildEstimate({
        sector,
        loads,
        backupSource,
        fuelPrice: numericFuelPrice,
        backupHours,
      }),
    [sector, loads, backupSource, numericFuelPrice, backupHours]
  )

  useEffect(() => {
    onEstimateChange?.(estimate)
  }, [estimate, onEstimateChange])

  const qtyFor = (equipmentId: string) =>
    loads.find((load) => load.equipmentId === equipmentId)?.qty ?? 0

  const addEquipment = (equipmentId: string) => {
    const item = EQUIPMENT_CATALOG.find((entry) => entry.id === equipmentId)
    if (!item) return

    setHighlightError(false)
    setLoads((current) => {
      const existing = current.find((load) => load.equipmentId === equipmentId)
      if (existing) {
        return current.map((load) =>
          load.equipmentId === equipmentId ? { ...load, qty: load.qty + 1 } : load
        )
      }
      return [
        ...current,
        {
          id: equipmentId,
          equipmentId,
          name: item.name,
          qty: 1,
          watts: item.defaultWatts,
          hours: item.defaultHours,
          ...(item.defaultHp != null ? { hp: item.defaultHp } : {}),
        },
      ]
    })
  }

  const reduceEquipment = (equipmentId: string) => {
    setLoads((current) =>
      current
        .map((load) =>
          load.equipmentId === equipmentId ? { ...load, qty: load.qty - 1 } : load
        )
        .filter((load) => load.qty > 0)
    )
  }

  const updateLoad = (id: string, field: 'qty' | 'watts' | 'hours' | 'name' | 'hp', value: string) => {
    setLoads((current) =>
      current.map((load) => {
        if (load.id !== id) return load
        if (field === 'name') return { ...load, name: value }
        const numeric = Number(value)
        if (!Number.isFinite(numeric) || numeric < 0) return load
        if (field === 'hours') return { ...load, hours: Math.min(24, numeric) }
        if (field === 'qty') return { ...load, qty: Math.max(1, Math.round(numeric) || 1) }
        if (field === 'hp') {
          const hp = Math.round(numeric * 10) / 10
          return { ...load, hp, watts: hpToWatts(hp) }
        }
        return {
          ...load,
          watts: numeric,
          ...(load.hp != null ? { hp: wattsToHp(numeric) } : {}),
        }
      })
    )
  }

  const removeLoad = (id: string) => {
    setLoads((current) => current.filter((load) => load.id !== id))
  }

  const clearAll = () => {
    setLoads([])
  }

  const handleSectorChange = (nextSector: FacilitySector) => {
    setSector(nextSector)
    setLoads((current) =>
      current.filter((load) => {
        if (load.equipmentId.startsWith('custom-')) return true
        const item = EQUIPMENT_CATALOG.find((entry) => entry.id === load.equipmentId)
        return item?.sectors.includes(nextSector)
      })
    )
  }

  const handleBackupChange = (value: BackupSource) => {
    setBackupSource(value)
    if (value === 'petrol' && numericFuelPrice === DEFAULT_DIESEL_PRICE) {
      setFuelPrice(String(DEFAULT_PETROL_PRICE))
    }
    if (value === 'diesel' && numericFuelPrice === DEFAULT_PETROL_PRICE) {
      setFuelPrice(String(DEFAULT_DIESEL_PRICE))
    }
  }

  const handleFuelPriceChange = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, '')
    const formatted = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setFuelPrice(formatted)
  }

  const addCustomLoad = () => {
    const name = customLoad.name.trim()
    const watts = Number(customLoad.watts)
    const hours = Number(customLoad.hours)
    const qty = Math.max(1, Math.round(Number(customLoad.qty) || 1))

    if (!name) {
      setCustomError('Give this load a name')
      return
    }
    if (!Number.isFinite(watts) || watts <= 0) {
      setCustomError('Enter a wattage greater than 0')
      return
    }
    if (!Number.isFinite(hours) || hours <= 0 || hours > 24) {
      setCustomError('Hours per day must be between 1 and 24')
      return
    }

    const nextLoad: SelectedLoad = {
      id: `custom-${Date.now()}`,
      equipmentId: `custom-${Date.now()}`,
      name,
      qty,
      watts,
      hours,
    }

    setLoads((current) => [...current, nextLoad])
    setCustomLoad(emptyCustomLoad)
    setCustomError(null)
    setShowCustomDialog(false)
  }

  const handleCalculate = () => {
    if (!estimate) {
      setHighlightError(true)
      return
    }
    document.getElementById('system-recommendation')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const showFuelPrice = backupSource !== 'grid'
  const selectedCount = loads.reduce((sum, load) => sum + load.qty, 0)
  const showHpColumn = loads.some((load) => usesHorsepower(load.equipmentId) || load.hp != null)
  const loadGridClass = showHpColumn
    ? 'md:grid-cols-[1.3fr_0.55fr_0.6fr_0.85fr_0.7fr_0.75fr_auto]'
    : 'md:grid-cols-[1.4fr_0.7fr_0.9fr_0.8fr_0.8fr_auto]'

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-heading">
            Size your commercial solar system
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            For factories, offices, and multi-site operations — not home appliances. Add the loads that run your facility.
          </p>
        </div>

        <div className="flex w-fit border border-gray-200 rounded-lg overflow-hidden">
          {SECTOR_OPTIONS.map((option, index) => {
            const Icon = SECTOR_ICONS[option.value]
            const selected = sector === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSectorChange(option.value)}
                className={cn(
                  'inline-flex items-center gap-2 px-3 py-2 text-sm font-medium whitespace-nowrap',
                  index > 0 && 'border-l border-gray-200',
                  selected
                    ? 'bg-brandColor text-white'
                    : 'text-heading hover:bg-gray-50'
                )}
              >
                <Icon className="h-4 w-4" />
                {option.label}
              </button>
            )
          })}
        </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className={cn('text-sm', highlightError ? 'text-red-600 font-medium' : 'text-muted-foreground')}>
          {highlightError
            ? 'Add at least one load to calculate a system.'
            : selectedCount === 0
              ? 'Select the equipment on your site'
              : `${selectedCount} load${selectedCount === 1 ? '' : 's'} selected`}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowCustomDialog(true)}
            className="rounded-lg"
          >
            <Plus className="h-4 w-4" />
            Add other load
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={clearAll}
            disabled={loads.length === 0}
            className="rounded-lg"
          >
            <RotateCcw className="h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
        {catalog.map((item) => {
          const Icon = ICON_MAP[item.icon]
          const qty = qtyFor(item.id)
          const selected = qty > 0

          return (
            <motion.div
              key={item.id}
              layout
              role="button"
              tabIndex={0}
              onClick={() => addEquipment(item.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  addEquipment(item.id)
                }
              }}
              className={cn(
                'relative flex cursor-pointer flex-col items-center gap-2 rounded-lg border bg-white p-4 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-heading/20',
                selected
                  ? 'border-heading/40 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              {selected && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    reduceEquipment(item.id)
                  }}
                  className="absolute -top-2 -right-2 z-10 flex h-6 min-w-6 items-center justify-center rounded-full bg-heading px-1.5 text-xs font-semibold text-white"
                  aria-label={`Reduce ${item.name}`}
                >
                  {qty}
                </button>
              )}
              {item.image ? (
                <span className="flex h-16 w-16 items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="h-14 w-14 object-contain"
                    draggable={false}
                  />
                </span>
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-heading">
                  <Icon className="h-5 w-5" />
                </span>
              )}
              <span className="text-sm font-medium text-heading leading-tight">{item.name}</span>
            </motion.div>
          )
        })}
      </div>
      <p className="-mt-3 text-[11px] text-muted-foreground">
        3D icons by{' '}
        <a
          href="https://icons8.com/icons/3d-fluency"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-heading"
        >
          Icons8
        </a>
      </p>

      <div className="border border-gray-200 rounded-lg p-5 md:p-6 space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-heading">Verify load & hours</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Adjust quantity, wattage, and hours per day to match how the site actually runs. Horsepower is included for motors and cooling equipment.
          </p>
        </div>

        {loads.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 px-6 py-10 text-center">
            <p className="text-heading font-medium">No loads yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Pick equipment above, or add a custom load used on your site.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className={cn('hidden md:grid grid-cols-2 gap-3 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground', loadGridClass)}>
              <span>Equipment</span>
              <span>Qty</span>
              {showHpColumn && <span>HP</span>}
              <span>Watts</span>
              <span>Hrs/day</span>
              <span>Daily energy</span>
              <span />
            </div>
            <AnimatePresence>
              {loads.map((load) => {
                const showHp = usesHorsepower(load.equipmentId) || load.hp != null
                return (
                <motion.div
                  key={load.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={cn('grid grid-cols-2 gap-3 items-end md:items-center rounded-lg border border-gray-200 bg-white p-3', loadGridClass)}
                >
                  <div className="col-span-2 md:col-span-1">
                    <label className="md:hidden text-xs font-medium text-muted-foreground mb-1 block">Equipment</label>
                    <Input
                      value={load.name}
                      onChange={(event) => updateLoad(load.id, 'name', event.target.value)}
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="md:hidden text-xs font-medium text-muted-foreground mb-1 block">Qty</label>
                    <Input
                      type="number"
                      min={1}
                      value={load.qty}
                      onChange={(event) => updateLoad(load.id, 'qty', event.target.value)}
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                  {showHpColumn && (
                    <div>
                      {showHp ? (
                        <>
                          <label className="md:hidden text-xs font-medium text-muted-foreground mb-1 block">HP</label>
                          <Input
                            type="number"
                            min={0.5}
                            step={0.5}
                            value={load.hp ?? ''}
                            onChange={(event) => updateLoad(load.id, 'hp', event.target.value)}
                            className="bg-white border-gray-200 rounded-lg"
                            aria-label={`${load.name} horsepower`}
                          />
                        </>
                      ) : (
                        <span className="hidden md:block text-sm text-muted-foreground px-1">—</span>
                      )}
                    </div>
                  )}
                  <div>
                    <label className="md:hidden text-xs font-medium text-muted-foreground mb-1 block">Watts</label>
                    <Input
                      type="number"
                      min={1}
                      value={load.watts}
                      onChange={(event) => updateLoad(load.id, 'watts', event.target.value)}
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="md:hidden text-xs font-medium text-muted-foreground mb-1 block">Hrs/day</label>
                    <Input
                      type="number"
                      min={1}
                      max={24}
                      step={0.5}
                      value={load.hours}
                      onChange={(event) => updateLoad(load.id, 'hours', event.target.value)}
                      className="bg-white border-gray-200 rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 md:contents">
                    <p className="text-sm font-medium text-heading px-1">
                      <span className="md:hidden text-muted-foreground font-normal">Daily · </span>
                      {formatKwh((load.qty * load.watts * load.hours) / 1000)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeLoad(load.id)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-red-500 hover:bg-red-50"
                      aria-label={`Remove ${load.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div>
            <Label className="text-heading mb-2 block">Current backup power</Label>
            <Select value={backupSource} onValueChange={(value) => handleBackupChange(value as BackupSource)}>
              <SelectTrigger className="w-full bg-white border-gray-200 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BACKUP_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {showFuelPrice ? (
            <div>
              <Label className="text-heading mb-2 block">
                {backupSource === 'petrol' ? 'Petrol price (₦ / litre)' : 'Diesel price (₦ / litre)'}
              </Label>
              <div className="flex items-center">
                <span className="px-3 h-9 flex items-center justify-center bg-white border border-r-0 border-gray-200 rounded-l-lg text-heading font-medium">
                  ₦
                </span>
                <Input
                  value={fuelPrice}
                  onChange={(event) => handleFuelPriceChange(event.target.value)}
                  inputMode="numeric"
                  className="bg-white border-gray-200 rounded-l-none rounded-r-lg"
                />
              </div>
            </div>
          ) : (
            <div>
              <Label className="text-heading mb-2 block">Assumed grid tariff</Label>
              <Input value="₦210 / kWh (Band A)" disabled className="bg-gray-50 border-gray-200 rounded-lg" />
            </div>
          )}
          <div>
            <Label className="text-heading mb-2 block">Desired backup hours</Label>
            <Select
              value={String(backupHours)}
              onValueChange={(value) => setBackupHours(Number(value))}
            >
              <SelectTrigger className="w-full bg-white border-gray-200 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BACKUP_HOUR_OPTIONS.map((hours) => (
                  <SelectItem key={hours} value={String(hours)}>
                    {hours} hours
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="button"
          onClick={handleCalculate}
          className="w-full bg-brandColor hover:bg-brandColor/90 text-white rounded-lg py-6 text-base font-medium"
          size="lg"
        >
          Calculate system requirement
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <AnimatePresence>
        {estimate && (
          <motion.div
            id="system-recommendation"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="scroll-mt-24 border border-gray-200 rounded-lg p-5 md:p-6 space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-heading">Recommended system</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Indicative only. A Wyre engineer will confirm this on-site. Peak load uses a {Math.round(DIVERSITY_FACTOR * 100)}% diversity factor and {PEAK_SUN_HOURS} peak sun hours.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <MetricCard
                icon={Zap}
                label="Peak diversified load"
                value={`${estimate.peakKw.toFixed(1)} kW`}
                hint={`${estimate.connectedKw.toFixed(1)} kW connected`}
              />
              <MetricCard
                icon={Sun}
                label="Daily energy"
                value={formatKwh(estimate.dailyKwh)}
                hint="Total watt-hours / day"
              />
              <MetricCard
                icon={BatteryCharging}
                label="Inverter"
                value={`${estimate.inverterKva} kVA`}
                hint={`${estimate.solarKwp} kWp array`}
              />
              <MetricCard
                icon={Timer}
                label="Est. backup"
                value={`${estimate.backupHoursAtPeak.toFixed(1)} hrs`}
                hint="At peak load, without sun"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-3">System snapshot</p>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-xl font-bold text-heading">{estimate.inverterKva} kVA</p>
                    <p className="text-xs text-muted-foreground mt-1">Inverter</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-heading">{estimate.solarKwp} kWp</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {estimate.panelCount} × {PANEL_WATTS} W
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-heading">{estimate.batteryKwh} kWh</p>
                    <p className="text-xs text-muted-foreground mt-1">Storage</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-3">Current energy spend</p>
                <p className="text-xl font-bold text-heading">{formatNaira(estimate.monthlyOperatingCost)}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  per month on {estimate.backupSourceLabel.toLowerCase()} · {formatNaira(estimate.annualOperatingCost)} / year
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-heading mb-3">Suggested Wyre systems</h4>
              {estimate.isCustomSystem || estimate.matchedPackages.length === 0 ? (
                <div className="rounded-lg border border-dashed border-gray-300 px-4 py-4">
                  <p className="font-medium text-heading">Custom enterprise design</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    This load sits above our listed packages. Our engineers will specify a {estimate.inverterKva} kVA / {estimate.solarKwp} kWp system.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {estimate.matchedPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <p className="font-medium text-heading">{pkg.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pkg.kva} kVA inverter · {pkg.batteryKwh} kWh lithium storage
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onRequestQuote}
              className="text-sm font-medium text-heading underline-offset-4 hover:underline"
            >
              Continue with this estimate
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showCustomDialog} onOpenChange={setShowCustomDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-heading">Add another load</DialogTitle>
            <DialogDescription>
              For plant, process equipment, or anything not in the C&amp;I list.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="custom-name" className="mb-2 block">Equipment name</Label>
              <Input
                id="custom-name"
                value={customLoad.name}
                onChange={(event) => setCustomLoad({ ...customLoad, name: event.target.value })}
                placeholder="e.g. Injection moulding machine"
                className="bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label htmlFor="custom-qty" className="mb-2 block">Qty</Label>
                <Input
                  id="custom-qty"
                  type="number"
                  min={1}
                  value={customLoad.qty}
                  onChange={(event) => setCustomLoad({ ...customLoad, qty: event.target.value })}
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="custom-watts" className="mb-2 block">Watts</Label>
                <Input
                  id="custom-watts"
                  type="number"
                  min={1}
                  value={customLoad.watts}
                  onChange={(event) => setCustomLoad({ ...customLoad, watts: event.target.value })}
                  placeholder="5500"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="custom-hours" className="mb-2 block">Hrs/day</Label>
                <Input
                  id="custom-hours"
                  type="number"
                  min={1}
                  max={24}
                  value={customLoad.hours}
                  onChange={(event) => setCustomLoad({ ...customLoad, hours: event.target.value })}
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {customError && <p className="text-sm text-red-600">{customError}</p>}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowCustomDialog(false)}
              className="rounded-lg"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={addCustomLoad}
              className="rounded-lg bg-brandColor hover:bg-brandColor/90 text-white"
            >
              Add load
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

const MetricCard = ({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: LucideIcon
  label: string
  value: string
  hint: string
}) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4">
    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-heading">
      <Icon className="h-4 w-4" />
    </div>
    <p className="text-xs font-medium text-muted-foreground">{label}</p>
    <p className="text-xl font-bold text-heading mt-1">{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{hint}</p>
  </div>
)

export default LoadCalculator
