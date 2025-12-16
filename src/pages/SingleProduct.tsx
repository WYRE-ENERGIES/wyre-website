import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Check, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import OtherNavbar from '../components/navbar/OtherNavbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';

// Import the same products data (in a real app, this would come from an API)
const solarProducts = [
  {
    id: 1,
    name: "Premium 400W Monocrystalline Solar Panel",
    price: 299000,
    originalPrice: 349000,
    category: "Solar Panels",
    description: "High-efficiency monocrystalline solar panel with 22% efficiency rating, perfect for residential and commercial installations.",
    fullDescription: "Our Premium 400W Monocrystalline Solar Panel represents the pinnacle of solar technology. Featuring advanced PERC (Passivated Emitter Rear Cell) technology, this panel delivers exceptional performance even in low-light conditions. With a 22% efficiency rating and 25-year linear power warranty, it's the perfect choice for both residential and commercial installations. The panel is built with tempered glass and anodized aluminum frame for maximum durability and weather resistance.",
    specifications: {
      "Power Output": "400W",
      "Efficiency": "22%",
      "Dimensions": "2008 x 1002 x 40 mm",
      "Weight": "22.5 kg",
      "Warranty": "25 years linear power warranty",
      "Cell Type": "Monocrystalline PERC",
      "Frame": "Anodized aluminum",
      "Glass": "Tempered glass 3.2mm"
    },
    features: [
      "High efficiency PERC technology",
      "Excellent low-light performance",
      "25-year linear power warranty",
      "Weather-resistant design",
      "Easy installation",
      "Certified for grid-tie systems"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: 14,
    stockCount: 25
  },
  {
    id: 2,
    name: "High-Efficiency 500W Bifacial Panel",
    price: 449000,
    originalPrice: null,
    category: "Solar Panels",
    description: "Advanced bifacial technology captures sunlight from both sides, increasing energy output by up to 30%.",
    fullDescription: "Revolutionary bifacial solar panel that captures sunlight from both the front and rear surfaces, delivering up to 30% more energy output compared to traditional panels. This cutting-edge technology makes it ideal for installations with reflective surfaces or elevated mounting systems. The panel features advanced cell technology and robust construction for long-term reliability.",
    specifications: {
      "Power Output": "500W",
      "Efficiency": "21.5%",
      "Bifacial Gain": "Up to 30%",
      "Dimensions": "2279 x 1134 x 35 mm",
      "Weight": "28.5 kg",
      "Warranty": "25 years linear power warranty",
      "Cell Type": "Bifacial PERC",
      "Frame": "Anodized aluminum",
      "Glass": "Double glass 2.5mm + 2.5mm"
    },
    features: [
      "Bifacial technology for increased output",
      "Double glass construction",
      "Enhanced durability",
      "Ideal for elevated installations",
      "Reflective surface optimization",
      "25-year warranty"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: null,
    stockCount: 15
  },
  {
    id: 3,
    name: "Lithium Iron Phosphate 10kWh Battery",
    price: 1299000,
    originalPrice: 1499000,
    category: "Batteries",
    description: "Long-lasting LiFePO4 battery with 10-year warranty, ideal for off-grid and backup power systems.",
    fullDescription: "Premium lithium iron phosphate (LiFePO4) battery system designed for reliable energy storage. With a 10-year warranty and over 6000 charge cycles, this battery provides exceptional longevity and performance. Perfect for off-grid installations, backup power systems, and energy independence projects. Features advanced BMS (Battery Management System) for optimal performance and safety.",
    specifications: {
      "Capacity": "10kWh",
      "Voltage": "48V",
      "Chemistry": "LiFePO4",
      "Cycles": "6000+ cycles",
      "Warranty": "10 years",
      "Dimensions": "600 x 400 x 200 mm",
      "Weight": "85 kg",
      "Operating Temperature": "-10°C to +50°C"
    },
    features: [
      "Long cycle life (6000+ cycles)",
      "10-year warranty",
      "Advanced BMS protection",
      "Wide operating temperature range",
      "Maintenance-free operation",
      "Scalable design"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false,
    discount: 13,
    stockCount: 0
  },
  {
    id: 4,
    name: "5kW Hybrid Solar Inverter",
    price: 899000,
    originalPrice: null,
    category: "Inverters",
    description: "Smart hybrid inverter with grid-tie and off-grid capabilities, includes WiFi monitoring and mobile app.",
    fullDescription: "Advanced 5kW hybrid solar inverter that seamlessly switches between grid-tie and off-grid modes. Features built-in WiFi connectivity for remote monitoring and control through our mobile app. Perfect for residential and small commercial installations requiring flexible power management and backup capabilities.",
    specifications: {
      "Power Rating": "5kW",
      "Input Voltage": "150-450V DC",
      "Output Voltage": "220V AC",
      "Efficiency": "97.5%",
      "WiFi": "Built-in",
      "App Control": "Yes",
      "Warranty": "5 years",
      "Dimensions": "400 x 300 x 150 mm"
    },
    features: [
      "Hybrid grid-tie/off-grid operation",
      "WiFi connectivity",
      "Mobile app monitoring",
      "High efficiency (97.5%)",
      "Easy installation",
      "5-year warranty"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: null,
    stockCount: 8
  },
  {
    id: 5,
    name: "Solar Panel Mounting System",
    price: 199000,
    originalPrice: 249000,
    category: "Mounting Systems",
    description: "Durable aluminum mounting system suitable for various roof types, includes all necessary hardware.",
    fullDescription: "Professional-grade aluminum mounting system designed for secure and efficient solar panel installation. Compatible with various roof types including tile, metal, and flat roofs. Includes all necessary hardware and installation accessories for a complete mounting solution.",
    specifications: {
      "Material": "Anodized aluminum",
      "Compatibility": "All roof types",
      "Load Capacity": "5400 Pa",
      "Corrosion Resistance": "25+ years",
      "Installation": "Tool-free assembly",
      "Warranty": "10 years",
      "Weight": "15 kg per set"
    },
    features: [
      "Universal roof compatibility",
      "Tool-free assembly",
      "High load capacity",
      "Corrosion-resistant",
      "Complete hardware kit",
      "10-year warranty"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: 20,
    stockCount: 50
  },
  {
    id: 6,
    name: "Smart Solar Charge Controller",
    price: 159000,
    originalPrice: null,
    category: "Controllers",
    description: "MPPT charge controller with LCD display, USB ports, and Bluetooth connectivity for remote monitoring.",
    fullDescription: "Advanced MPPT (Maximum Power Point Tracking) charge controller with intelligent charging algorithms. Features a clear LCD display, multiple USB ports for device charging, and Bluetooth connectivity for remote monitoring and control through mobile devices.",
    specifications: {
      "Type": "MPPT",
      "Max Current": "40A",
      "Max Voltage": "100V",
      "Display": "LCD",
      "USB Ports": "2x USB-A, 1x USB-C",
      "Bluetooth": "Yes",
      "Efficiency": "98%",
      "Warranty": "3 years"
    },
    features: [
      "MPPT technology for maximum efficiency",
      "LCD display with real-time data",
      "Multiple USB charging ports",
      "Bluetooth connectivity",
      "Intelligent charging algorithms",
      "3-year warranty"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: null,
    stockCount: 30
  },
  {
    id: 7,
    name: "20kWh Solar Battery Bank",
    price: 2499000,
    originalPrice: 2999000,
    category: "Batteries",
    description: "Large capacity battery bank perfect for commercial installations and extended backup power needs.",
    fullDescription: "High-capacity 20kWh battery bank designed for commercial and large residential installations. Provides extended backup power and energy independence for critical applications. Features modular design for easy expansion and advanced monitoring capabilities.",
    specifications: {
      "Capacity": "20kWh",
      "Voltage": "48V",
      "Chemistry": "LiFePO4",
      "Cycles": "6000+ cycles",
      "Warranty": "10 years",
      "Dimensions": "1200 x 600 x 200 mm",
      "Weight": "170 kg",
      "Modular": "Yes"
    },
    features: [
      "Large capacity (20kWh)",
      "Modular expansion capability",
      "Commercial-grade reliability",
      "Advanced monitoring system",
      "10-year warranty",
      "Scalable design"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false,
    discount: 17,
    stockCount: 0
  },
  {
    id: 8,
    name: "10kW String Inverter",
    price: 1599000,
    originalPrice: null,
    category: "Inverters",
    description: "High-power string inverter with multiple MPPT inputs, designed for large residential and commercial systems.",
    fullDescription: "Professional 10kW string inverter with multiple MPPT inputs for optimal performance in large solar installations. Designed for residential and commercial applications requiring high power output and advanced monitoring capabilities.",
    specifications: {
      "Power Rating": "10kW",
      "MPPT Inputs": "2 independent",
      "Max DC Voltage": "1000V",
      "Efficiency": "98.2%",
      "Monitoring": "WiFi/Ethernet",
      "Warranty": "10 years",
      "Dimensions": "500 x 400 x 200 mm",
      "Weight": "25 kg"
    },
    features: [
      "High power output (10kW)",
      "Multiple MPPT inputs",
      "Advanced monitoring",
      "High efficiency (98.2%)",
      "Professional-grade reliability",
      "10-year warranty"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: null,
    stockCount: 5
  },
  {
    id: 9,
    name: "Solar Panel Cleaning Kit",
    price: 49000,
    originalPrice: 69000,
    category: "Accessories",
    description: "Complete cleaning kit with telescopic pole, soft brush, and eco-friendly cleaning solution for solar panels.",
    fullDescription: "Professional solar panel cleaning kit designed to maintain optimal performance of your solar installation. Includes telescopic pole, soft brush head, and eco-friendly cleaning solution that won't damage panels or the environment.",
    specifications: {
      "Pole Length": "Extends to 6 meters",
      "Brush Material": "Soft synthetic bristles",
      "Solution": "Eco-friendly concentrate",
      "Coverage": "500ml treats 50 panels",
      "Storage": "Compact carrying case",
      "Warranty": "1 year"
    },
    features: [
      "Telescopic pole (up to 6m)",
      "Soft, non-abrasive brush",
      "Eco-friendly cleaning solution",
      "Compact storage case",
      "Easy to use",
      "Maintains panel efficiency"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: 29,
    stockCount: 100
  },
  {
    id: 10,
    name: "Micro Inverter 300W",
    price: 129000,
    originalPrice: null,
    category: "Inverters",
    description: "Compact micro inverter for individual panel optimization, includes 25-year warranty and monitoring capabilities.",
    fullDescription: "Compact micro inverter designed for individual panel optimization. Each panel gets its own inverter for maximum efficiency and monitoring. Perfect for installations with shading issues or complex roof layouts.",
    specifications: {
      "Power Rating": "300W",
      "Input Voltage": "22-45V DC",
      "Output Voltage": "220V AC",
      "Efficiency": "96.5%",
      "Monitoring": "Built-in",
      "Warranty": "25 years",
      "Dimensions": "200 x 150 x 50 mm",
      "Weight": "1.2 kg"
    },
    features: [
      "Individual panel optimization",
      "25-year warranty",
      "Built-in monitoring",
      "Shade tolerance",
      "Easy installation",
      "High reliability"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: null,
    stockCount: 75
  },
  {
    id: 11,
    name: "Solar Panel Junction Box",
    price: 29000,
    originalPrice: 39000,
    category: "Accessories",
    description: "Weatherproof junction box with bypass diodes for safe and efficient solar panel connections.",
    fullDescription: "Professional weatherproof junction box with integrated bypass diodes for safe and efficient solar panel connections. Designed to withstand harsh weather conditions and provide reliable electrical connections.",
    specifications: {
      "IP Rating": "IP67",
      "Bypass Diodes": "3 integrated",
      "Max Current": "15A",
      "Max Voltage": "1000V",
      "Material": "UV-resistant plastic",
      "Warranty": "5 years",
      "Dimensions": "150 x 100 x 50 mm"
    },
    features: [
      "Weatherproof (IP67)",
      "Integrated bypass diodes",
      "UV-resistant housing",
      "Easy installation",
      "Reliable connections",
      "5-year warranty"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: 26,
    stockCount: 200
  },
  {
    id: 12,
    name: "Grid-Tie Solar System Kit",
    price: 3999000,
    originalPrice: 4499000,
    category: "Complete Systems",
    description: "Complete 5kW grid-tie solar system including panels, inverter, mounting, and all necessary components.",
    fullDescription: "Complete 5kW grid-tie solar system kit that includes everything needed for a professional installation. Perfect for homeowners looking for a turnkey solar solution with all components matched and optimized for maximum performance.",
    specifications: {
      "System Size": "5kW",
      "Panels": "12x 400W panels",
      "Inverter": "5kW hybrid inverter",
      "Mounting": "Complete mounting system",
      "Warranty": "25 years panels, 5 years inverter",
      "Annual Output": "~7500 kWh",
      "CO2 Savings": "~3.5 tons/year"
    },
    features: [
      "Complete system kit",
      "Professional installation ready",
      "25-year panel warranty",
      "High annual energy output",
      "Significant CO2 savings",
      "Grid-tie compatible"
    ],
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    discount: 11,
    stockCount: 3
  }
];

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = solarProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  const handleContactRedirect = () => {
    if (product) {
      // Store product info in localStorage for contact form pre-filling
      localStorage.setItem('selectedProduct', JSON.stringify({
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      }));
      window.location.href = '/contact';
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
        <OtherNavbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-heading mb-4">Product Not Found</h1>
            <Link to="/solar-catalog" className="text-brandColor hover:underline">
              Return to Catalog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[83rem] mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/solar-catalog" className="hover:text-brandColor">
              Product Catalog
            </Link>
            <span>/</span>
            <span className="text-heading">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[83rem] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl font-bold text-heading mb-2">
                    {product.name}
                  </h1>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-heading">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ₦{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <Badge className="bg-red-500 text-white">
                    -{product.discount}%
                  </Badge>
                )}
              </div>

              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-green-600 font-medium">
                        In Stock ({product.stockCount} available)
                      </span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-red-600 font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-brandColor hover:bg-brandColor/80 text-white"
                  onClick={handleContactRedirect}
                  disabled={!product.inStock}
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Contact to Buy' : 'Out of Stock'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-heading">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-heading">{key}</span>
                        <span className="text-muted-foreground">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-heading">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-heading mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solarProducts
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                    <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-0">
                        <div className="aspect-square rounded-t-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-heading mb-2 line-clamp-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {relatedProduct.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-heading">
                              ₦{relatedProduct.price.toLocaleString()}
                            </span>
                            {relatedProduct.originalPrice && (
                              <span className="text-muted-foreground line-through text-sm">
                                ₦{relatedProduct.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
