import { useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import {
  Check,
  FileText,
  Wrench,
  Package,
  ChevronRight,
  Info,
  Zap
} from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
import { cn } from '../lib/utils'

interface EMSProduct {
  id: string
  name: string
  rating: string
  sellingPrice: number
  laborUnits: number
  specifications: {
    ratedCurrent: string
    accuracyClass?: string
    ctOpeningSize?: string
    outputSignal?: string
    certification?: string
  }
}

const emsProducts: EMSProduct[] = [
  {
    id: 'ct-200-23',
    name: 'Wyre Smart Box',
    rating: '200/1-23',
    sellingPrice: 1201550,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '200/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Small',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-200-58',
    name: 'Wyre Smart Box',
    rating: '200/1-58',
    sellingPrice: 1264550,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '200/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Small',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-400-58',
    name: 'Wyre Smart Box',
    rating: '400/1-58',
    sellingPrice: 1264550,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '400/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Small',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-400-88',
    name: 'Wyre Smart Box',
    rating: '400/1-88',
    sellingPrice: 1311800,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '400/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Small',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-800',
    name: 'Wyre Smart Box',
    rating: '800/1',
    sellingPrice: 1374800,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '800/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Small',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-1000',
    name: 'Wyre Smart Box',
    rating: '1000/1',
    sellingPrice: 1485050,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '1000/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Medium',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-1500-812',
    name: 'Wyre Smart Box',
    rating: '1500/1-812',
    sellingPrice: 1532300,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '1500/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Medium',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-1500-816',
    name: 'Wyre Smart Box',
    rating: '1500/1-816',
    sellingPrice: 2130800,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '1500/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Medium',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-2000',
    name: 'Wyre Smart Box',
    rating: '2000/1',
    sellingPrice: 2162300,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '2000/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Medium',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-3000',
    name: 'Wyre Smart Box',
    rating: '3000/1',
    sellingPrice: 2304050,
    laborUnits: 2,
    specifications: {
      ratedCurrent: '3000/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Large',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  },
  {
    id: 'ct-6000',
    name: 'Wyre Smart Box',
    rating: '6000/1',
    sellingPrice: 2382800,
    laborUnits: 1,
    specifications: {
      ratedCurrent: '6000/1',
      accuracyClass: '0.5S',
      ctOpeningSize: 'Large',
      outputSignal: '5A',
      certification: 'IEC 61869'
    }
  }
]

const packageIncludes = [
  { name: 'Smart Monitoring Devices', quantity: 3 },
  { name: 'Energy Sensors', quantity: 1 },
  { name: 'Power Management Unit', quantity: 1 },
  { name: 'Current Sensors', quantity: 9 },
  { name: 'Professional Installation', quantity: 'Included' },
  { name: 'Delivery & Setup', quantity: 'Included' },
  { name: 'Free Admin Panel Access', quantity: '1-2 Years Free' }
]

const Pricing = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleRequestQuote = (product: EMSProduct) => {
    // Navigate to contact page with product info
    window.location.href = `/contact?product=${encodeURIComponent(product.name + ' ' + product.rating)}&price=${product.sellingPrice}`
  }

  const handleViewSpecs = (productId: string) => {
    setSelectedProduct(selectedProduct === productId ? null : productId)
  }

  const handleDownloadDatasheet = () => {
    // Admin panel features list
    const adminPanelFeatures = [
      'Monitor 3 Energy Sources (Utility, Generator, or Solar)',
      '5 year historical archive',
      'Analysis from 15 minutes to a year',
      'Unlimited email alerts for deviations & budget performance',
      '12 monthly reports'
    ]

    // Create CSV headers
    const headers = [
      'Product Name',
      'Capacity Rating',
      'Selling Price (₦)',
      'Rated Current',
      'Accuracy Class',
      'CT Opening Size',
      'Output Signal',
      'Certification',
      'Package Includes',
      'Free Admin Panel Access',
      'Admin Panel Features'
    ]

    // Create CSV rows
    const rows = emsProducts.map(product => {
      const packageItems = packageIncludes.map(item =>
        `${item.name}${typeof item.quantity === 'number' ? ` (${item.quantity}x)` : typeof item.quantity === 'string' ? ` (${item.quantity})` : ''}`
      ).join('; ')

      const adminFeatures = adminPanelFeatures.join('; ')

      return [
        product.name,
        product.rating,
        product.sellingPrice.toLocaleString('en-NG'),
        product.specifications.ratedCurrent,
        product.specifications.accuracyClass || '',
        product.specifications.ctOpeningSize || '',
        product.specifications.outputSignal || '',
        product.specifications.certification || '',
        packageItems,
        '1-2 Years Free',
        adminFeatures
      ]
    })

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)

    link.setAttribute('href', url)
    link.setAttribute('download', `Wyre_Smart_Box_Pricing_List_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up the URL object
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Header */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading">
              EMS - Wyre Smart Box Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare our complete energy monitoring solutions by CT Capacity Rating. All packages include professional installation and free admin panel access.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Free Admin Panel Banner */}
      <div className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-brandColor/10 to-purple-500/10 rounded-xl p-6 border border-brandColor/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-heading mb-2">
                🎉 Special Offer: Free Admin Panel Access
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Every Wyre Smart Box package includes <strong className="text-heading">free admin panel access for 1-2 years</strong>. Get real-time monitoring of 3 energy sources, 5-year historical data, detailed analytics, unlimited alerts, and 12 monthly reports all at no extra cost. After the free period, you can choose to continue with our affordable subscription plan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Package Includes & Admin Panel Features - Shown Once */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Package Includes */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-brandColor" />
                What's Included in Every Package:
              </h3>
              <ul className="space-y-2.5">
                {packageIncludes.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {item.name}
                      {typeof item.quantity === 'number' && (
                        <span className="text-brandColor ml-1 font-semibold">({item.quantity}x)</span>
                      )}
                      {typeof item.quantity === 'string' && (
                        <span className="text-brandColor ml-1 font-semibold">({item.quantity})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Admin Panel Features */}
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-brandColor" />
                Free Admin Panel Features:
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Monitor 3 Energy Sources (Utility, Generator, or Solar)
                  </span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    5 year historical archive
                  </span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Analysis from 15 minutes to a year
                  </span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Unlimited email alerts for deviations & budget performance
                  </span>
                </li>
                <li className="flex items-start space-x-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    12 monthly reports
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-brandColor/10 via-brandColor/5 to-purple-500/10">
                    <tr>
                      <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap">
                        CT Capacity Rating
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap">
                        Price
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap">
                        Rated Current
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap hidden md:table-cell">
                        Accuracy Class
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap hidden lg:table-cell">
                        CT Opening Size
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap hidden lg:table-cell">
                        Output Signal
                      </th>
                      <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-bold text-heading uppercase tracking-wider whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {emsProducts.map((product, index) => (
                      <motion.tr
                        key={product.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50/80 transition-colors duration-150 group"
                      >
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="text-base md:text-lg font-bold text-heading">
                              {product.rating}
                            </div>
                            {product.id === 'ct-6000' && (
                              <Badge className="bg-brandColor text-white text-xs">
                                Premium
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {product.name}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <div className="text-base md:text-lg font-bold text-heading">
                            {formatPrice(product.sellingPrice)}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            One-time payment
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                          {product.specifications.ratedCurrent}
                        </td>
                        <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground whitespace-nowrap hidden md:table-cell">
                          {product.specifications.accuracyClass || '-'}
                        </td>
                        <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground whitespace-nowrap hidden lg:table-cell">
                          {product.specifications.ctOpeningSize || '-'}
                        </td>
                        <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground whitespace-nowrap hidden lg:table-cell">
                          {product.specifications.outputSignal || '-'}
                        </td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col gap-2 min-w-[140px] md:min-w-[200px]">
                            <Button
                              className="w-full bg-brandColor hover:bg-brandColor/80 text-white text-xs md:text-sm"
                              size="sm"
                              onClick={() => handleRequestQuote(product)}
                            >
                              Request Quote
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                            <Button
                              className="w-full border border-gray-300 hover:bg-gray-50 text-xs md:text-sm"
                              size="sm"
                              variant="outline"
                              onClick={() => handleViewSpecs(product.id)}
                            >
                              <FileText className="mr-1 h-3 w-3" />
                              {selectedProduct === product.id ? 'Hide' : 'Specs'}
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Expanded Specifications */}
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 bg-gray-50/50"
            >
              <div className="px-6 py-6">
                {(() => {
                  const product = emsProducts.find(p => p.id === selectedProduct)
                  if (!product) return null
                  return (
                    <div className="max-w-4xl">
                      <h4 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                        <Info className="h-5 w-5 text-brandColor" />
                        Technical Specifications: {product.rating}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-sm text-muted-foreground">Rated Current:</span>
                          <span className="text-sm font-medium text-heading">{product.specifications.ratedCurrent}</span>
                        </div>
                        {product.specifications.accuracyClass && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-sm text-muted-foreground">Accuracy Class:</span>
                            <span className="text-sm font-medium text-heading">{product.specifications.accuracyClass}</span>
                          </div>
                        )}
                        {product.specifications.ctOpeningSize && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-sm text-muted-foreground">CT Opening Size:</span>
                            <span className="text-sm font-medium text-heading">{product.specifications.ctOpeningSize}</span>
                          </div>
                        )}
                        {product.specifications.outputSignal && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-sm text-muted-foreground">Output Signal:</span>
                            <span className="text-sm font-medium text-heading">{product.specifications.outputSignal}</span>
                          </div>
                        )}
                        {product.specifications.certification && (
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-sm text-muted-foreground">Certification:</span>
                            <span className="text-sm font-medium text-heading">{product.specifications.certification}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                          <Wrench className="h-3 w-3" />
                          Installation: 1-2 hours per sensor • Our team handles everything
                        </p>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Comparison Note */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-heading mb-2">
              Need Help Choosing the Right Package?
            </h2>
            <p className="text-muted-foreground">
              Our energy experts can help you select the perfect Smart Box package for your business needs. Get personalized recommendations based on your facility size and energy consumption.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-brandColor hover:bg-brandColor/80 text-white"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="border border-gray-300 hover:bg-gray-50"
              size="lg"
              variant="outline"
              onClick={handleDownloadDatasheet}
            >
              <FileText className="h-4 w-4" />
              Download Pricing Sheet
            </Button>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
        <div className="text-center">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent">
            Ready to Transform Your Energy Management?
          </span>
          <p className="mt-4 text-gray-500">
            Join hundreds of businesses already saving costs and improving efficiency with Wyre.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
              asChild
              size="lg">
              <a href="/contact">
                <span>Get Started</span>
              </a>
            </Button>

            <Button
              className="z-10 border border-border"
              asChild
              size="lg"
              variant="secondary">
              <a href="/contact?subject=demo">
                <span>Schedule Demo</span>
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

export default Pricing
