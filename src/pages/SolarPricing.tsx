import { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import OtherNavbar from '../components/navbar/OtherNavbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../components/ui/dialog';
import { ContactForm } from '../components/ContactForm';
import { CheckCircle2 } from 'lucide-react';

// Solar system packages data (shared with SolarCatalog)
const solarProducts = [
  {
    id: 8,
    name: "10kVA Inverter with 10kWh Lithium Battery",
    category: "Complete Systems",
    description: "Efficient 10kVA hybrid inverter paired with 10kWh lithium battery. Ideal for small to medium residential homes seeking reliable solar power backup with moderate energy storage capacity.",
    image: "/img/solar-4.jpeg",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 1,
    name: "10kVA Inverter with 20kWh Lithium Battery",
    category: "Complete Systems",
    description: "Complete solar power system featuring a 10kVA hybrid inverter paired with a 20kWh lithium battery. Perfect for small to medium residential applications with reliable backup power.",
    image: "/img/solar-5.jpeg",
    inStock: true,
    price: null as number | null, // Price available on request
    originalPrice: null as number | null
  },
  {
    id: 2,
    name: "10kVA Inverter with 30kWh Battery",
    category: "Complete Systems",
    description: "Enhanced solar power system with 10kVA inverter and larger 30kWh lithium battery capacity. Ideal for medium-sized homes requiring extended backup power and energy independence.",
    image: "/img/solar-5.jpeg",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 3,
    name: "20kVA with 60kWh Lithium Battery",
    category: "Complete Systems",
    description: "Powerful 20kVA inverter system with 60kWh lithium battery storage. Designed for large residential or small commercial installations with high energy demands.",
    image: "/img/solar-6.jpeg",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 4,
    name: "40kVA with 100kWh Lithium Battery",
    category: "Complete Systems",
    description: "Commercial-grade 40kVA inverter system with 100kWh lithium battery bank. Perfect for large commercial buildings, offices, and industrial applications requiring substantial power capacity.",
    image: "/img/solar-6.jpeg",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 5,
    name: "80kVA with 160kWh Battery",
    category: "Complete Systems",
    description: "High-capacity 80kVA inverter system with 160kWh lithium battery storage. Engineered for large-scale commercial and industrial facilities with significant energy requirements.",
    image: "/img/solar-7.jpeg",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 6,
    name: "80kVA with 210kWh Battery",
    category: "Complete Systems",
    description: "Maximum capacity 80kVA inverter system with 210kWh lithium battery bank. The ultimate solution for large industrial facilities, data centers, and operations requiring maximum energy storage and reliability.",
    image: "/img/solar-8.jpeg",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  }
];

const categories = [
  { name: "Complete Systems", count: 8 }
];

// Helper function to extract kVA from product name
const extractKVA = (productName: string): string | null => {
  const match = productName.match(/(\d+)\s*[Kk][Vv][Aa]/);
  return match ? `${match[1]}kVA` : null;
};

// Get unique kVA values and their counts
const getKVAOptions = () => {
  const kvaMap = new Map<string, number>();
  solarProducts.forEach(product => {
    const kva = extractKVA(product.name);
    if (kva) {
      kvaMap.set(kva, (kvaMap.get(kva) || 0) + 1);
    }
  });
  return Array.from(kvaMap.entries())
    .map(([kva, count]) => ({ name: kva, count }))
    .sort((a, b) => parseInt(a.name) - parseInt(b.name));
};

const kvaOptions = getKVAOptions();

const SolarPricing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedKVA, setSelectedKVA] = useState<string[]>([]);
  const [priceRange] = useState([0, 5000000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [selectedProducts, setSelectedProducts] = useState<typeof solarProducts[0][]>([]);
  const [initialFormData, setInitialFormData] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  }>({});

  const filteredProducts = solarProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    // Only filter by price if price exists
    const matchesPrice = product.price === null || (product.price !== null && product.price >= priceRange[0] && product.price <= priceRange[1]);
    const productKVA = extractKVA(product.name);
    const matchesKVA = selectedKVA.length === 0 || (productKVA && selectedKVA.includes(productKVA));

    return matchesSearch && matchesCategory && matchesPrice && matchesKVA;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const toggleKVA = (kva: string) => {
    setSelectedKVA(prev => {
      const isSelected = prev.includes(kva);
      if (isSelected) {
        return prev.filter(k => k !== kva);
      } else {
        return [...prev, kva];
      }
    });
  };

  const handleGetQuote = (product: typeof solarProducts[0]) => {
    // Check if product is already in selected products
    const isAlreadySelected = selectedProducts.some(p => p.id === product.id);
    if (!isAlreadySelected) {
      setSelectedProducts(prev => [...prev, product]);
    }

    // Pre-fill form with product information
    const priceText = product.price !== null && product.price !== undefined
      ? `₦${product.price.toLocaleString()}`
      : 'Price on Request';

    const productMessages = selectedProducts.map(p => {
      const pPriceText = p.price !== null && p.price !== undefined
        ? `₦${p.price.toLocaleString()}`
        : 'Price on Request';
      return `${p.name} (${pPriceText})`;
    });

    const newProductMessage = `${product.name} (${priceText})`;
    const allProducts = [...productMessages, newProductMessage].join('\n');

    setInitialFormData({
      subject: 'Solar Purchase',
      message: `I'm interested in purchasing:\n${allProducts}\n\nPlease provide more information about these products and availability.`
    });

    setIsModalOpen(true);
  };

  const removeProductFromQuote = (productId: number) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
    // Update message to reflect remaining products
    const remainingProducts = selectedProducts.filter(p => p.id !== productId);
    if (remainingProducts.length > 0) {
      const productMessages = remainingProducts.map(p => {
        const pPriceText = p.price !== null && p.price !== undefined
          ? `₦${p.price.toLocaleString()}`
          : 'Price on Request';
        return `${p.name} (${pPriceText})`;
      });
      setInitialFormData({
        subject: 'Solar Purchase',
        message: `I'm interested in purchasing:\n${productMessages.join('\n')}\n\nPlease provide more information about these products and availability.`
      });
    } else {
      setInitialFormData({
        subject: 'Solar Purchase',
        message: ''
      });
    }
  };

  const handleFormSuccess = () => {
    // Reset selected products and close modal after successful submission
    setSelectedProducts([]);
    setInitialFormData({});
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Optionally reset when closing
    setSelectedProducts([]);
    setInitialFormData({});
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
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
              Solar Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete solar power systems and contact us for personalized pricing based on your energy needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search solar products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background h-12"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <div className="flex items-center px-2 border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-brandColor text-white rounded-md' : ''}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-brandColor text-white rounded-md' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 flex-shrink-0`}>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-brandColor" />
                  <h3 className="text-lg font-semibold text-heading">Filters</h3>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleCategory(category.name);
                          }}
                          className="rounded border-border text-brandColor focus:ring-brandColor"
                        />
                        <span className="text-muted-foreground text-sm">
                          {category.name} ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* kVA Filter */}
                <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">kVA Rating</h4>
                  <div className="space-y-2">
                    {kvaOptions.map((kva) => (
                      <label
                        key={kva.name}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedKVA.includes(kva.name)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleKVA(kva.name);
                          }}
                          className="rounded border-border text-brandColor focus:ring-brandColor"
                        />
                        <span className="text-muted-foreground text-sm">
                          {kva.name} ({kva.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                {/* <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₦{priceRange[0].toLocaleString()}</span>
                      <span>₦{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div> */}

              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Products ({sortedProducts.length})
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border text-heading rounded-lg px-3 py-2 text-sm"
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {sortedProducts.length > 0 ? (
              <motion.div
                key={`products-${sortedProducts.length}-${selectedCategories.join('-')}-${selectedKVA.join('-')}-${searchTerm}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
              >
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    className="group"
                  >
                    <Card className="p-0 flex flex-col h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative">
                          <div className="absolute top-3 left-3 z-10">
                            <Badge
                              className={product.inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"}
                            >
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                          <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden flex items-center justify-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="p-4 flex-1 flex flex-col">
                          <h3 className="text-heading font-semibold mb-2 line-clamp-2">{product.name}</h3>

                          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                            {product.description}
                          </p>

                          {/* <div className="flex items-center gap-2 mb-4">
                          {product.price !== null ? (
                            <>
                              <span className="text-2xl font-bold text-heading">
                                ₦{product.price.toLocaleString()}
                              </span>
                              {product.originalPrice && (
                                <span className="text-muted-foreground line-through">
                                  ₦{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </>
                          ) : (
                            <span className="text-lg font-semibold text-brandColor">
                              Price on Request
                            </span>
                          )}
                        </div> */}

                          <div className="mt-auto pt-4">
                            <Button
                              className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
                              onClick={() => handleGetQuote(product)}
                              disabled={!product.inStock}
                            >
                              {product.inStock ? 'Get a Quote' : 'Out of Stock'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedKVA([]);
                    setSearchTerm('');
                  }}
                  className="mt-4"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-heading">Get a Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with pricing information.
            </DialogDescription>
          </DialogHeader>

          {/* Selected Products Display */}
          {selectedProducts.length > 0 && (
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-medium text-heading">Products in Quote:</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-heading truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.price !== null && product.price !== undefined
                          ? `₦${product.price.toLocaleString()}`
                          : 'Price on Request'}
                      </p>
                    </div>
                    <button
                      onClick={() => removeProductFromQuote(product.id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                      aria-label="Remove product"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ContactForm
            initialData={initialFormData}
            onSubmitSuccess={(message) => {
              setIsModalOpen(false);
              setTimeout(() => {
                setSuccessMessage(message || "Your message has sent successfully. We'll get back to you soon!");
                setShowSuccessDialog(true);
              }, 300);
            }}
            showTitle={false}
            idPrefix="modal"
            className="space-y-4"
            showCancelButton={true}
            onCancel={handleModalClose}
          />
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl text-center font-bold text-heading">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 pt-2">
              {successMessage}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => {
                setShowSuccessDialog(false);
                handleFormSuccess();
              }}
              className="w-full sm:w-auto bg-brandColor hover:bg-brandColor/90 text-white"
            >
              Okay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default SolarPricing;
