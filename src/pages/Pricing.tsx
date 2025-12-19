import { useState } from 'react'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import {
  Check,
  FileText,
  Wrench,
  Package,
  ChevronRight,
  Info
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

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
              EMS - Wyre Smart Box Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete energy monitoring solutions with professional installation included.
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

      {/* Pricing Cards */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-16"
        >
          {emsProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="relative group"
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-heading">
                      {product.name}
                    </h3>
                    {product.id === 'ct-6000' && (
                      <Badge className="bg-brandColor text-white">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <p className="text-base text-muted-foreground">
                    CT Capacity: {product.rating}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Package Includes */}
                  <div>
                    <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                      <Package className="h-4 w-4 text-brandColor" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {packageIncludes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {item.name}
                            {typeof item.quantity === 'number' && (
                              <span className="text-brandColor ml-1">({item.quantity}x)</span>
                            )}
                            {typeof item.quantity === 'string' && (
                              <span className="text-brandColor ml-1 font-semibold">({item.quantity})</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Admin Panel Features */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-heading mb-3">
                      Free Admin Panel Features:
                    </h4>
                    <ul className="space-y-2">
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
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">One-Time Payment</p>
                      <div className="text-3xl font-bold text-heading">
                        {formatPrice(product.sellingPrice)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Includes everything • No hidden fees
                      </p>
                    </div>
                  </div>

                  {/* Technical Specifications (Collapsible) */}
                  {selectedProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-gray-200"
                    >
                      <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                        <Info className="h-4 w-4 text-brandColor" />
                        Technical Specifications:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Rated Current:</span>
                          <span className="text-heading font-medium">{product.specifications.ratedCurrent}</span>
                        </li>
                        {product.specifications.accuracyClass && (
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Accuracy Class:</span>
                            <span className="text-heading font-medium">{product.specifications.accuracyClass}</span>
                          </li>
                        )}
                        {product.specifications.ctOpeningSize && (
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">CT Opening Size:</span>
                            <span className="text-heading font-medium">{product.specifications.ctOpeningSize}</span>
                          </li>
                        )}
                        {product.specifications.outputSignal && (
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Output Signal:</span>
                            <span className="text-heading font-medium">{product.specifications.outputSignal}</span>
                          </li>
                        )}
                        {product.specifications.certification && (
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Certification:</span>
                            <span className="text-heading font-medium">{product.specifications.certification}</span>
                          </li>
                        )}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                          <Wrench className="h-3 w-3" />
                          Installation: 1-2 hours per sensor
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Our team handles everything
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* CTA Buttons */}
                  <div className="space-y-2 pt-2">
                    <Button
                      className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
                      size="lg"
                      onClick={() => handleRequestQuote(product)}
                    >
                      Request Quote
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      className="w-full border border-gray-300 hover:bg-gray-50"
                      size="lg"
                      variant="outline"
                      onClick={() => handleViewSpecs(product.id)}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      {selectedProduct === product.id ? 'Hide Specs' : 'View Specs'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Note */}
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
